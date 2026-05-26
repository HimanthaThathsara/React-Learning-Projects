import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { categories } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single category by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { 
            error: 'Valid ID is required',
            code: 'INVALID_ID' 
          },
          { status: 400 }
        );
      }

      const category = await db.select()
        .from(categories)
        .where(eq(categories.id, parseInt(id)))
        .limit(1);

      if (category.length === 0) {
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(category[0]);
    }

    // List categories with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(categories);

    if (search) {
      query = query.where(
        or(
          like(categories.name, `%${search}%`),
          like(categories.slug, `%${search}%`),
          like(categories.description, `%${search}%`)
        )
      );
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description } = body;

    // Validate required fields
    if (!name || !slug) {
      return NextResponse.json(
        {
          error: 'Missing required fields: name and slug are required',
          code: 'MISSING_REQUIRED_FIELDS'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedSlug = slug.trim().toLowerCase();
    const sanitizedDescription = description ? description.trim() : null;

    // Validate name is not empty after trim
    if (!sanitizedName) {
      return NextResponse.json(
        {
          error: 'Name cannot be empty',
          code: 'INVALID_NAME'
        },
        { status: 400 }
      );
    }

    // Validate slug is not empty after trim
    if (!sanitizedSlug) {
      return NextResponse.json(
        {
          error: 'Slug cannot be empty',
          code: 'INVALID_SLUG'
        },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingCategory = await db.select()
      .from(categories)
      .where(eq(categories.slug, sanitizedSlug))
      .limit(1);

    if (existingCategory.length > 0) {
      return NextResponse.json(
        {
          error: 'A category with this slug already exists',
          code: 'DUPLICATE_SLUG'
        },
        { status: 400 }
      );
    }

    // Create new category
    const newCategory = await db.insert(categories)
      .values({
        name: sanitizedName,
        slug: sanitizedSlug,
        description: sanitizedDescription,
        createdAt: new Date().toISOString()
      })
      .returning();

    return NextResponse.json(newCategory[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
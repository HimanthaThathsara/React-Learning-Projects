import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { authors } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single author by ID
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

      const author = await db.select()
        .from(authors)
        .where(eq(authors.id, parseInt(id)))
        .limit(1);

      if (author.length === 0) {
        return NextResponse.json(
          { 
            error: 'Author not found',
            code: 'AUTHOR_NOT_FOUND'
          },
          { status: 404 }
        );
      }

      return NextResponse.json(author[0]);
    }

    // List authors with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(authors);

    if (search) {
      query = query.where(
        or(
          like(authors.name, `%${search}%`),
          like(authors.email, `%${search}%`)
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
    const { name, email, bio, avatar, twitterHandle, githubHandle } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { 
          error: 'Name is required',
          code: 'MISSING_NAME'
        },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { 
          error: 'Email is required',
          code: 'MISSING_EMAIL'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedBio = bio ? bio.trim() : null;
    const sanitizedAvatar = avatar ? avatar.trim() : null;
    const sanitizedTwitterHandle = twitterHandle ? twitterHandle.trim() : null;
    const sanitizedGithubHandle = githubHandle ? githubHandle.trim() : null;

    // Check if email already exists
    const existingAuthor = await db.select()
      .from(authors)
      .where(eq(authors.email, sanitizedEmail))
      .limit(1);

    if (existingAuthor.length > 0) {
      return NextResponse.json(
        { 
          error: 'Email already exists',
          code: 'EMAIL_EXISTS'
        },
        { status: 400 }
      );
    }

    // Create new author
    const newAuthor = await db.insert(authors)
      .values({
        name: sanitizedName,
        email: sanitizedEmail,
        bio: sanitizedBio,
        avatar: sanitizedAvatar,
        twitterHandle: sanitizedTwitterHandle,
        githubHandle: sanitizedGithubHandle,
        createdAt: new Date().toISOString()
      })
      .returning();

    return NextResponse.json(newAuthor[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
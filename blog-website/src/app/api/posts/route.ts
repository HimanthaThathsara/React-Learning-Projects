import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts, categories, authors } from '@/db/schema';
import { eq, like, or, and } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    // Single post by ID with category and author
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const result = await db
        .select({
          id: posts.id,
          title: posts.title,
          slug: posts.slug,
          content: posts.content,
          excerpt: posts.excerpt,
          featuredImage: posts.featuredImage,
          categoryId: posts.categoryId,
          authorId: posts.authorId,
          publishedAt: posts.publishedAt,
          views: posts.views,
          readingTime: posts.readingTime,
          createdAt: posts.createdAt,
          updatedAt: posts.updatedAt,
          category: {
            id: categories.id,
            name: categories.name,
            slug: categories.slug,
            description: categories.description,
            createdAt: categories.createdAt,
          },
          author: {
            id: authors.id,
            name: authors.name,
            email: authors.email,
            bio: authors.bio,
            avatar: authors.avatar,
            twitterHandle: authors.twitterHandle,
            githubHandle: authors.githubHandle,
            createdAt: authors.createdAt,
          },
        })
        .from(posts)
        .leftJoin(categories, eq(posts.categoryId, categories.id))
        .leftJoin(authors, eq(posts.authorId, authors.id))
        .where(eq(posts.id, parseInt(id)))
        .limit(1);

      if (result.length === 0) {
        return NextResponse.json(
          { error: 'Post not found', code: 'POST_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(result[0], { status: 200 });
    }

    // List all posts with pagination and search
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        content: posts.content,
        excerpt: posts.excerpt,
        featuredImage: posts.featuredImage,
        categoryId: posts.categoryId,
        authorId: posts.authorId,
        publishedAt: posts.publishedAt,
        views: posts.views,
        readingTime: posts.readingTime,
        createdAt: posts.createdAt,
        updatedAt: posts.updatedAt,
        category: {
          id: categories.id,
          name: categories.name,
          slug: categories.slug,
          description: categories.description,
          createdAt: categories.createdAt,
        },
        author: {
          id: authors.id,
          name: authors.name,
          email: authors.email,
          bio: authors.bio,
          avatar: authors.avatar,
          twitterHandle: authors.twitterHandle,
          githubHandle: authors.githubHandle,
          createdAt: authors.createdAt,
        },
      })
      .from(posts)
      .leftJoin(categories, eq(posts.categoryId, categories.id))
      .leftJoin(authors, eq(posts.authorId, authors.id));

    if (search) {
      query = query.where(like(posts.title, `%${search}%`));
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
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

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        {
          error: 'Missing required fields: title, slug, and content are required',
          code: 'MISSING_REQUIRED_FIELDS',
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const title = body.title.trim();
    const slug = body.slug.trim().toLowerCase();
    const content = body.content.trim();
    const excerpt = body.excerpt ? body.excerpt.trim() : null;
    const featuredImage = body.featuredImage ? body.featuredImage.trim() : null;

    // Validate slug uniqueness
    const existingPost = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, slug))
      .limit(1);

    if (existingPost.length > 0) {
      return NextResponse.json(
        {
          error: 'Slug must be unique. A post with this slug already exists',
          code: 'DUPLICATE_SLUG',
        },
        { status: 400 }
      );
    }

    // Validate categoryId if provided
    if (body.categoryId) {
      const categoryExists = await db
        .select()
        .from(categories)
        .where(eq(categories.id, body.categoryId))
        .limit(1);

      if (categoryExists.length === 0) {
        return NextResponse.json(
          {
            error: 'Invalid categoryId: Category does not exist',
            code: 'INVALID_CATEGORY',
          },
          { status: 400 }
        );
      }
    }

    // Validate authorId if provided
    if (body.authorId) {
      const authorExists = await db
        .select()
        .from(authors)
        .where(eq(authors.id, body.authorId))
        .limit(1);

      if (authorExists.length === 0) {
        return NextResponse.json(
          {
            error: 'Invalid authorId: Author does not exist',
            code: 'INVALID_AUTHOR',
          },
          { status: 400 }
        );
      }
    }

    // Prepare insert data
    const insertData = {
      title,
      slug,
      content,
      excerpt,
      featuredImage,
      categoryId: body.categoryId || null,
      authorId: body.authorId || null,
      publishedAt: body.publishedAt || null,
      views: body.views ?? 0,
      readingTime: body.readingTime || null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newPost = await db.insert(posts).values(insertData).returning();

    return NextResponse.json(newPost[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if post exists
    const existingPost = await db
      .select()
      .from(posts)
      .where(eq(posts.id, parseInt(id)))
      .limit(1);

    if (existingPost.length === 0) {
      return NextResponse.json(
        { error: 'Post not found', code: 'POST_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: any = {};

    // Sanitize and prepare updates
    if (body.title !== undefined) {
      updates.title = body.title.trim();
    }

    if (body.slug !== undefined) {
      const slug = body.slug.trim().toLowerCase();

      // Check slug uniqueness (excluding current post)
      const slugExists = await db
        .select()
        .from(posts)
        .where(and(eq(posts.slug, slug), eq(posts.id, parseInt(id))))
        .limit(1);

      if (slugExists.length === 0) {
        const otherPost = await db
          .select()
          .from(posts)
          .where(eq(posts.slug, slug))
          .limit(1);

        if (otherPost.length > 0) {
          return NextResponse.json(
            {
              error: 'Slug must be unique. Another post with this slug already exists',
              code: 'DUPLICATE_SLUG',
            },
            { status: 400 }
          );
        }
      }

      updates.slug = slug;
    }

    if (body.content !== undefined) {
      updates.content = body.content.trim();
    }

    if (body.excerpt !== undefined) {
      updates.excerpt = body.excerpt ? body.excerpt.trim() : null;
    }

    if (body.featuredImage !== undefined) {
      updates.featuredImage = body.featuredImage ? body.featuredImage.trim() : null;
    }

    // Validate and update categoryId
    if (body.categoryId !== undefined) {
      if (body.categoryId !== null) {
        const categoryExists = await db
          .select()
          .from(categories)
          .where(eq(categories.id, body.categoryId))
          .limit(1);

        if (categoryExists.length === 0) {
          return NextResponse.json(
            {
              error: 'Invalid categoryId: Category does not exist',
              code: 'INVALID_CATEGORY',
            },
            { status: 400 }
          );
        }
      }
      updates.categoryId = body.categoryId;
    }

    // Validate and update authorId
    if (body.authorId !== undefined) {
      if (body.authorId !== null) {
        const authorExists = await db
          .select()
          .from(authors)
          .where(eq(authors.id, body.authorId))
          .limit(1);

        if (authorExists.length === 0) {
          return NextResponse.json(
            {
              error: 'Invalid authorId: Author does not exist',
              code: 'INVALID_AUTHOR',
            },
            { status: 400 }
          );
        }
      }
      updates.authorId = body.authorId;
    }

    if (body.publishedAt !== undefined) {
      updates.publishedAt = body.publishedAt;
    }

    if (body.views !== undefined) {
      updates.views = body.views;
    }

    if (body.readingTime !== undefined) {
      updates.readingTime = body.readingTime;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    const updatedPost = await db
      .update(posts)
      .set(updates)
      .where(eq(posts.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedPost[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if post exists
    const existingPost = await db
      .select()
      .from(posts)
      .where(eq(posts.id, parseInt(id)))
      .limit(1);

    if (existingPost.length === 0) {
      return NextResponse.json(
        { error: 'Post not found', code: 'POST_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deleted = await db
      .delete(posts)
      .where(eq(posts.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Post deleted successfully',
        post: deleted[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
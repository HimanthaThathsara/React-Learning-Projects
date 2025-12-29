import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { authors, posts, categories } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validate ID is a valid integer
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        {
          error: 'Valid author ID is required',
          code: 'INVALID_ID',
        },
        { status: 400 }
      );
    }

    const authorId = parseInt(id);

    // Step 1: Get author by ID
    const authorResults = await db
      .select()
      .from(authors)
      .where(eq(authors.id, authorId))
      .limit(1);

    if (authorResults.length === 0) {
      return NextResponse.json(
        {
          error: 'Author not found',
          code: 'AUTHOR_NOT_FOUND',
        },
        { status: 404 }
      );
    }

    const author = authorResults[0];

    // Step 2: Get all posts by this author with category data
    const authorPosts = await db
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
      })
      .from(posts)
      .leftJoin(categories, eq(posts.categoryId, categories.id))
      .where(eq(posts.authorId, author.id));

    // Combine author with their posts
    const authorWithPosts = {
      ...author,
      posts: authorPosts,
    };

    return NextResponse.json(authorWithPosts, { status: 200 });
  } catch (error) {
    console.error('GET author by ID error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error as Error).message,
      },
      { status: 500 }
    );
  }
}
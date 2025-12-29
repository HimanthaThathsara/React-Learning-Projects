import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts, categories, authors } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        {
          error: 'Slug parameter is required',
          code: 'MISSING_SLUG'
        },
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
      .where(eq(posts.slug, slug))
      .limit(1);

    if (result.length === 0) {
      return NextResponse.json(
        {
          error: 'Post not found',
          code: 'POST_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}
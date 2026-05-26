import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { categories, posts, authors } from '@/db/schema';
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
          error: 'Category slug is required',
          code: 'MISSING_SLUG'
        },
        { status: 400 }
      );
    }

    // Step 1: Get category by slug
    const category = await db
      .select()
      .from(categories)
      .where(eq(categories.slug, slug))
      .limit(1);

    if (category.length === 0) {
      return NextResponse.json(
        { 
          error: 'Category not found',
          code: 'CATEGORY_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    const categoryData = category[0];

    // Step 2: Get all posts for this category with author data
    const categoryPosts = await db
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
        author: {
          id: authors.id,
          name: authors.name,
          email: authors.email,
          bio: authors.bio,
          avatar: authors.avatar,
          twitterHandle: authors.twitterHandle,
          githubHandle: authors.githubHandle,
          createdAt: authors.createdAt,
        }
      })
      .from(posts)
      .leftJoin(authors, eq(posts.authorId, authors.id))
      .where(eq(posts.categoryId, categoryData.id));

    // Combine category with posts
    const result = {
      ...categoryData,
      posts: categoryPosts
    };

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('GET category by slug error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error'),
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}
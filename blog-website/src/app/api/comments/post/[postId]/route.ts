import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { comments } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  try {
    const { postId } = params;

    // Validate postId is a valid integer
    if (!postId || isNaN(parseInt(postId))) {
      return NextResponse.json(
        {
          error: 'Valid post ID is required',
          code: 'INVALID_POST_ID',
        },
        { status: 400 }
      );
    }

    // Query all comments for the specified post, ordered by createdAt descending
    const postComments = await db
      .select()
      .from(comments)
      .where(eq(comments.postId, parseInt(postId)))
      .orderBy(desc(comments.createdAt));

    return NextResponse.json(postComments, { status: 200 });
  } catch (error) {
    console.error('GET comments error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error as Error).message,
        code: 'INTERNAL_SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { comments } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, authorName, authorEmail, content } = body;

    // Validate required fields
    if (!postId) {
      return NextResponse.json(
        { error: 'postId is required', code: 'MISSING_POST_ID' },
        { status: 400 }
      );
    }

    if (!authorName) {
      return NextResponse.json(
        { error: 'authorName is required', code: 'MISSING_AUTHOR_NAME' },
        { status: 400 }
      );
    }

    if (!authorEmail) {
      return NextResponse.json(
        { error: 'authorEmail is required', code: 'MISSING_AUTHOR_EMAIL' },
        { status: 400 }
      );
    }

    if (!content) {
      return NextResponse.json(
        { error: 'content is required', code: 'MISSING_CONTENT' },
        { status: 400 }
      );
    }

    // Validate postId is a valid integer
    const parsedPostId = parseInt(postId);
    if (isNaN(parsedPostId)) {
      return NextResponse.json(
        { error: 'postId must be a valid integer', code: 'INVALID_POST_ID' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedAuthorName = authorName.trim();
    const sanitizedAuthorEmail = authorEmail.trim().toLowerCase();
    const sanitizedContent = content.trim();

    // Validate sanitized fields are not empty
    if (!sanitizedAuthorName) {
      return NextResponse.json(
        { error: 'authorName cannot be empty', code: 'EMPTY_AUTHOR_NAME' },
        { status: 400 }
      );
    }

    if (!sanitizedAuthorEmail) {
      return NextResponse.json(
        { error: 'authorEmail cannot be empty', code: 'EMPTY_AUTHOR_EMAIL' },
        { status: 400 }
      );
    }

    if (!sanitizedContent) {
      return NextResponse.json(
        { error: 'content cannot be empty', code: 'EMPTY_CONTENT' },
        { status: 400 }
      );
    }

    // Create new comment
    const newComment = await db
      .insert(comments)
      .values({
        postId: parsedPostId,
        authorName: sanitizedAuthorName,
        authorEmail: sanitizedAuthorEmail,
        content: sanitizedContent,
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newComment[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
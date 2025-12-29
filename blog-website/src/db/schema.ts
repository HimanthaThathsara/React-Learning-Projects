import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Authors table
export const authors = sqliteTable('authors', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  bio: text('bio'),
  avatar: text('avatar'),
  twitterHandle: text('twitter_handle'),
  githubHandle: text('github_handle'),
  createdAt: text('created_at').notNull(),
});

// Categories table
export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  createdAt: text('created_at').notNull(),
});

// Posts table
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  categoryId: integer('category_id').references(() => categories.id),
  authorId: integer('author_id').references(() => authors.id),
  publishedAt: text('published_at'),
  views: integer('views').default(0),
  readingTime: integer('reading_time'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Comments table
export const comments = sqliteTable('comments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  postId: integer('post_id').references(() => posts.id),
  authorName: text('author_name').notNull(),
  authorEmail: text('author_email').notNull(),
  content: text('content').notNull(),
  createdAt: text('created_at').notNull(),
});
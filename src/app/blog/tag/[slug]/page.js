// src/app/blog/[slug].js
'use client';
import BlogByTags from '@/components/blog/BlogByTags';
import SingleBlogPage from '@/components/blog/SingleBlogPage';
import { useParams } from 'next/navigation';

export default function TagBlogPage() {
  const { slug } = useParams();
  console.log("--->", slug);
  
  return (
    <div>
      <BlogByTags tag={slug} />
    </div>
  );
}

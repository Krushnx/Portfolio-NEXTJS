// src/app/blog/[slug].js
'use client';
import SingleBlogPage from '@/components/blog/SingleBlogPage';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const { slug } = useParams();
  console.log("--->", slug);
  
  return (
    <div>
      <SingleBlogPage slug={slug} />
    </div>
  );
}

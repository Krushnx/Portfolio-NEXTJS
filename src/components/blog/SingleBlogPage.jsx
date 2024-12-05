import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // Import rehypeRaw
import "./about.css";
import Link from "next/link";

const SingleBlogPage = ({ slug }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`/api/blogs?slug=${slug}`);
    const data = await res.json();
    setData(data);
    console.log("DATA --> ", data);
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white px-4 lg:px-[260px] py-[56px]">
    <div className="container mx-auto">
      <h1 className="text-[32px] lg:text-[40px] mb-4 text-center font-kanit text-Purple-2">
        {data.title}
      </h1>
      <p className="text-[14px] lg:text-[17px] font-bold mb-2 italic text-center text-gray-300">
        {data.description}
      </p>
  
      <div className="prose prose-invert lg:prose-xl mb-6">
        {/* Render Markdown content with raw HTML support */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]} // Add rehypeRaw plugin here
        >
          {data.content}
        </ReactMarkdown>
      </div>
  
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-auto">
          <div className="mt-2">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
              {data.tags.map((tag) => (
                <Link href={`/blog/tag/${tag}`} key={tag}>
                  <span className="text-sm bg-gray-700 py-1 px-2 m-1 rounded">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>
              Published on:{" "}
              {new Date(data.date)
                .toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
                .replace(/(\d)(st|nd|rd|th)/, "$1$2")}
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 lg:mt-0">
          <span className="font-kanit text-[20px] lg:text-[25px]">TOTAL HITS</span>
          <span className="font-bold text-[20px] lg:text-[25px] text-neon-Green">
            {data.views}
          </span>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default SingleBlogPage;

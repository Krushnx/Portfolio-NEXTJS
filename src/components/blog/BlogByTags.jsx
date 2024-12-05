"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { taglines } from "./taglines";
import Button4 from "../Buttons/Button4";
import Image from "next/image";
import { logos } from "../../../public/logo/logo";
import Footer from "../footer/Footer";
import MainFooter from "../footer/MainFooter";

const BlogByTags = ({ tag }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`/api/blogs?tag=${tag}`);
    const data = await response.json();
    setData(data);
    console.log("Data --> ", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:mx-[45px] md:my-[0px] my-[30px] mx-[10px]">
      <p className="md:w-[650px] tracking-[1px]  text-[37px] font-kanit mt-[20px]">
        Blogs of :{" "}
        <span className="text-[37px] font-kanit text-Purple-2">
          {decodeURIComponent(tag)}
        </span>
      </p>
      <p className="text-[18px]">{taglines[decodeURIComponent(tag)]}</p>

      <div className="mt-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data &&
            Array.isArray(data) &&
            data.map((project) => (
              <BlogCard project={project} key={project._id} />
            ))}
        </div>
      </div>
      <div className="flex justify-center my-[20px]">
        <Button4 link="/blog" val="View All Blogs" />
      </div>

      
    </div>
  );
};

export default BlogByTags;

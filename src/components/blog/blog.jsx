"use client";
import React, { useEffect, useState } from "react";
import "./about.css";
import Link from "next/link";
import Image from "next/image";
import LikesComponent from "../apiTest/LikeComponents";
import BlogCard from "./BlogCard";

function Blog() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/blogs");
    const data = await response.json();
    setData(data);
    console.log("Data --> ", data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:mx-[45px] md:my-[0px] my-[30px] mx-[10px] ">
      <div className="md:p-[60px] flex justify-between flex-col md:flex-row">
        <div>
          <h2 className="text-[100px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight  md:block">
            My Blog <br></br>Space
          </h2>
          <p className="md:w-[650px] tracking-[1px] message text-[18px] font-summery  text-gray-500">
            Welcome to My Blog Space - where I share{" "}
            <span className="text-gray-300">insights, projects,</span> and{" "}
            <span className="text-gray-300">experiences</span> that fuel
            curiosity and inspire learning.
          </p>
        </div>
        <div className="relative w-[400px] h-[350px] overflow-hidden mr-[100px]  mb-[10px] md:mt-[-30px]">
          <Image
            src="/logo/blog-logo-hd.png"
            alt="Description of the image"
            layout="fill" // Fill the container
            objectFit="contain" // Cover the container while maintaining aspect ratio
          />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((project) => (
            <BlogCard project={project} key={project._id} />
          ))}
        </div>
      </div>
      <div className="my-[20px]"></div>
    </div>
  );
}
export default Blog;

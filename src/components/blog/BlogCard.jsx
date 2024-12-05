'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';





const BlogCard = ({project}) => {
    
   const imageLink = project?.photo || `/blog/${project.slug}.png`
   const formattedDate = new Date(project.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    return (
        <div className='bg-tagBg workCard rounded-lg p-4 max-w-[410px]'>


            {/* <CardSpotlight className=" bg-tagBg workCard rounded-lg p-4   transform transition-transform duration-200"> */}
            <div className=" h-64 relative pointer">
                <Image src={imageLink} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="flex items-center justify-between ">
                <div className="flex mt-4 flex-col">
                    <h3 className=" text-lg font-medium font-kanit">
                        <Link href={`/blog/${project.slug}`} className="hover:underline text-left" >
                        {project.title}
                        </Link>
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">{formattedDate}</p>
                </div>  
            </div>
            <p className="text-sm mt-2 font-summery text-gray-400 min-h-[40px]">{project.description.substring(0, 100)}</p>

            <div className="flex flex-wrap mt-2">
                {project.tags.map((tag) => (
                    <Link href={`/blog/tag/${tag}`} key={tag}>
                    <span className="text-sm bg-gray-700 py-1 px-2 m-1 rounded" key={tag}>{tag}</span>
                    </Link>
                ))}
            </div>
            <Link href={`/blog/${project.slug}`} className="text font-kanit mt-1 hover:underline" >Read More . . .</Link>



        </div>
    );
};

export default BlogCard;
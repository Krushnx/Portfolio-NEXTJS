'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import WorkSkill from './WorkSkill';
import Link from 'next/link';
import { logos } from '../../../public/logo/logo';
// import {CardSpotlight} from '@/components/ui/card-spotlight'


const ProjectCard = ({ project, onClick }) => (
    < >
    <div className='bg-tagBg workCard rounded-lg p-4 '>

   
    {/* <CardSpotlight className=" bg-tagBg workCard rounded-lg p-4   transform transition-transform duration-200"> */}
        <div className="w-full h-64 relative pointer" onClick={onClick}>
            <Image src={project.photo} alt={project.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex mt-4 flex-col">
                <h3 className=" text-lg font-medium font-kanit">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.time}</p>
            </div>
            <div className="flex gap-2">

                <Link href={project.link} >
                    <div className="relative w-[40px] h-[40px] overflow-hidden group pointer">
                        <Image
                            src='https://cdn3d.iconscout.com/3d/premium/thumb/code-10189658-8248838.png?f=webp'
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                </Link>
                <Link href={project.code} >
                    <div className="relative w-[40px] h-[40px] overflow-hidden group pointer">
                        <Image
                            src='https://cdn3d.iconscout.com/3d/free/thumb/free-github-8173947-6491025.png?f=webp'
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                </Link>
            </div>
        </div>
        <p className="text-sm mt-2 font-summery">{project.description.substring(0, 100)}...</p>
        <div className="technologies flex gap-4 mt-3">
            {project.techUsed.map((item, index) => {
                return <WorkSkill link={logos[item]} key={index} tooltip={item} />

            })}
        </div>
         </div>
    {/* </CardSpotlight>  */}
       </>

);

const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
        <div className="bg-tagBg p-6 rounded-lg w-full max-w-[800px] relative max-h-[90vh] -">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold pointer">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='white' className="text-white">
                <path d="M19.414 6.586a2 2 0 0 0-2.828 0L12 10.172 7.414 5.586a2 2 0 0 0-2.828 2.828L9.172 12l-4.586 4.586a2 2 0 0 0 2.828 2.828L12 13.828l4.586 4.586a2 2 0 0 0 2.828-2.828L14.828 12l4.586-4.586a2 2 0 0 0 0-2.828z" />
            </svg></button>
            <h2 className="text-2xl font-medium font-kanit">{project.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{project.time}</p>
            <div className="w-full h-[250px] relative">
                <Image src={project.photo} alt={project.name} layout="fill" objectFit="contain" className="rounded-t-lg" />
            </div>
            <p className="mt-4 font-summery">{project.fullDescription}</p>
            <div className="flex flex-row items-center mt-3">

                <span className="mt-1 text-gray-400 mt-[16px] font-summery font-bold ">Tech Stack : &nbsp;&nbsp;&nbsp;</span>

                <div className="technologies flex gap-4 ">
                    {project.techUsed.map((item, index) => (
                        <WorkSkill link={logos[item]} key={index} tooltip={item} />
                    ))}
                </div></div>
            <div className="mt-4 flex space-x-4">
                <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="px-4 py-2 bg-Purple text-white rounded pointer hover:bg-Purple-2 font-summery"
                >
                    Live Project
                </button>
                <button
                    onClick={() => window.open(project.code, '_blank')}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-summery"
                >
                    View Code
                </button>
            </div>
        </div>
    </div>
);
const MyProject = ({projects}) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default MyProject;

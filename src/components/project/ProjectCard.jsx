import React from 'react';
import WorkSkill from '@/components/project/WorkSkill';
import Image from 'next/image';
import Link from 'next/link';
import { logos } from '../../../public/logo/logo';


const ProjectCard = ({projectInfo}) => {
    


    return (
        <div className='flex w-[400px] flex-col workCard rounded-lg p-4 bg-tagBg'>
            <div className="w-full h-64 relative pointer">
                <Image src={projectInfo.photo} alt={projectInfo.name} layout="fill" objectFit="cover" className="rounded-t-lg" />

            </div>
            <div className="flex items-center justify-between">
                <div className="flex mt-4 flex-col">
                    <h3 className=" text-lg font-medium font-kanit">{projectInfo.name}</h3>
                    <p className="text-sm text-gray-600">{projectInfo.time}</p>
                </div>
                <div className="flex gap-2">

                    <Link href={projectInfo.link} >
                        <div className="relative w-[40px] h-[40px] overflow-hidden group pointer">
                            <Image
                                src='https://cdn3d.iconscout.com/3d/premium/thumb/code-10189658-8248838.png?f=webp'
                                alt="Description of the image"
                                layout="fill" // Fill the container
                                objectFit="cover" // Cover the container while maintaining aspect ratio
                            />
                        </div>
                    </Link>
                    <Link href={projectInfo.code} >
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
            <p className="text-sm mt-2 font-summery">{projectInfo.description.substring(0, 100)}...</p>            <div className="technologies flex gap-4 mt-3">
                {projectInfo.techUsed.map((item, index) => {
                    return <WorkSkill link={logos[item]} key={index} tooltip={item} />

                })}
            </div>
        </div>

    );
};

export default ProjectCard;
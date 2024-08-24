import Link from 'next/link';
import './project.css'
import Image from 'next/image';
import Button1 from '../Buttons/Button1';
import Featured from './Featured';
import MyProject from './Myprojects';
import Button4 from '../Buttons/Button4';
import { projects } from './projectInfo';

const Project = ({ isComponent, compProject }) => {

    return (
        <div className='md:mx-[45px] md:my-[0px] my-[30px] mx-[10px]  '>

            {isComponent &&
            <div>
                            <h2 className='text-[100px] font-kanit leading-[85px] mb-[30px] tracking-tight '>My <br/> Work</h2>

                <MyProject projects={compProject} />
            </div>
            }
            {!isComponent &&
                <div>
                    <div className="md:p-[60px] flex justify-between flex-col-reverse md:flex-row">
                        <div className="mywork ">
                            <h2 className='text-[100px] font-kanit leading-[85px] font-medium mb-[30px] tracking-tight hidden md:block'>My <br></br>Work</h2>
                            <p className='md:w-[500px] tracking-[1px] message text-[18px] font-summery  text-gray-500'> Developed and deployed scalable <span className='text-gray-300'>Full-Stack</span> applications in the travel, e-commerce, and education sectors using <Link href='https://react.dev' className='aboutLink'>React</Link> and <Link href='https://nodejs.org' className='aboutLink'>NodeJS</Link> Completed over <span className='text-gray-300'>15</span> major projects and <span className='text-gray-300'>50+</span> smaller ones, leveraging hosting platforms such as <Link href='https://vercel.com' className='aboutLink'>Vercel</Link> and <Link href='https://firebase.google.com' className='aboutLink'>Firebase</Link>. Currently enhancing skills in <Link href='https://tailwindcss.com' className='aboutLink'>Tailwind</Link> and <Link href='https://nextjs.org' className='aboutLink'>NextJS</Link>.</p>
                        </div>
                        <div className="">
                            <h2 className='text-[100px] font-kanit leading-[85px] font-medium mb-[30px] tracking-tight block md:hidden'>My <br></br>Work</h2>
                            <div className="flex flex-col">
                                <Featured />
                            </div>

                        </div>
                    </div>


                    <MyProject projects={projects} />
                    <div className="flex items-center justify-center my-[10px]">
                        <Button4 link='/work' val='View All' />
                    </div>
                </div>
            }

        </div>

    );
}

export default Project;
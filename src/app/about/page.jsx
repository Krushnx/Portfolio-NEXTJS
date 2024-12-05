import About from "@/components/about/About";
import SkillIcon from "@/components/about/SkillIcon";
import Image from "next/image";
import Link from "next/link";
import { logos } from "../../../public/logo/logo";





const AboutPage = () => {


    const Frontend = ['HTML', 'Tailwind', 'CSS', 'JS' , 'Bootstrap', 'React'];
    const Backend = ['C++' , 'NodeJS' , 'Next' , 'Express'];
    const Databases = ['MongoDB' , 'MySQL' , 'Firebase'];


    return (
        <div>
            <About isComponent={true} />
            <div id="mySkills" className="md:mx-[45px] md:my-[0px] my-[30px] mx-[10px] md:p-[60px] flex justify-between flex-col-reverse md:flex-row ">
                <div>
                    <h2 className='text-[100px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight hidden md:block'>My <br></br>Skills</h2>
                    {/* <p className='md:w-[500px] tracking-[1px] message text-[18px] font-summery  text-gray-500'>Graduated from PES Modern College of Engineering, Pune with CGPA of <span className='text-gray-300'>9.25</span>  in <span className='text-gray-300'>B.E. (IT) .</span> Developed and deployed scalable <span className='text-gray-300'>Full-Stack</span> applications in the travel, e-commerce, and education sectors using <Link href='https://react.dev' className='aboutLink'>React</Link> and <Link href='https://nodejs.org' className='aboutLink'>NodeJS</Link> Completed over <span className='text-gray-300'>15</span> major projects and <span className='text-gray-300'>50+</span> smaller ones, leveraging hosting platforms such as <Link href='https://vercel.com' className='aboutLink'>Vercel</Link> and <Link href='https://firebase.google.com' className='aboutLink'>Firebase</Link>. Currently enhancing skills in <Link href='https://tailwindcss.com' className='aboutLink'>Tailwind</Link> and <Link href='https://nextjs.org' className='aboutLink'>NextJS</Link>.</p> */}
                    <p className='md:w-[500px] tracking-[1px] message text-[18px] font-summery mt-[15px] text-gray-100 font-bold'>Frontend </p>
                    <div className="grid grid-cols-5 lg:grid-cols-7 gap-4">
                        {Frontend.map((item, index) => (
                            <SkillIcon name={item} link={logos[item]} key={index} />
                        ))}
                    </div>
                    <p className='md:w-[500px] tracking-[1px] message text-[18px] font-summery  mt-[15px] text-gray-100 font-bold'>Backend </p>
                    <div className="grid grid-cols-5 lg:grid-cols-7 gap-4">
                        {Backend.map((item, index) => (
                            <SkillIcon name={item} link={logos[item]} key={index} />
                        ))}
                        
                    </div>
                    <p className='md:w-[500px] tracking-[1px] message text-[18px] font-summery  mt-[15px] text-gray-100 font-bold'>Databases </p>
                    <div className="grid grid-cols-5 lg:grid-cols-7 gap-4">
                        {Databases.map((item, index) => (
                            <SkillIcon name={item} link={logos[item]} key={index} />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h2 className='text-[100px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight block md:hidden'>My <br></br>Skills</h2>
                    <div className="relative w-[500px] h-[500px] overflow-hidden mr-[0px] ml-[-30px] mt-[50px] mb-[10px] ">
                        <Image
                            src="/about/skill2.png"
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
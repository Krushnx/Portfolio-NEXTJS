import Image from "next/image";
import WorkSkill from "../project/WorkSkill";
import { logos } from "../../../public/logo/logo";
import Link from "next/link";

const ExperinceCard = () => {

    const Workabl = ['React', 'NodeJS', 'JS', 'MySQL', 'Agile', 'Postman']

    return (
        <div className="flex flex-col gap-5">
            {/* <div className="border-tagColor border-[1px] bg-tagBg flex flex-col rounded-[14px] p-[20px]">
                <div className="flex md:flex-row flex-col items-center w-full justify-between">

                    <div className="flex md:mb-[0px] mb-[10px] md:flex-row flex-col">

                        <div className='flex items-center justify-between'>
                            
                        <div className="relative w-[60px] h-[60px] overflow-hidden rounded-[15px]">
                            <Image
                                src="https://cdn2.bitwiseglobal.com/bwin-prod-cdn/themes/bwindia/images/logo-white.png"
                                alt="Description of the image"
                                layout="fill" // Fill the container
                                objectFit="contain" // Cover the container while maintaining aspect ratio
                            />

                        </div>
                        <p className="block md:hidden mr-[-35px]">Aug 2024 - Present</p>

                        </div>
                        <div className="flex flex-col md:ml-[15px]">
                            <div>
                                <p className="text-[25px] font-popins">Bitwise Global</p>

                            </div>
                            <div className="flex gap-5">
                                <Link href='https://www.bitwiseglobal.com' className="font-summery  text-gray-500"> <i className="fas fa-link "></i>&nbsp;bitwiseglobal.com</Link>
                                <p className="font-summery text-gray-500"><i className="fas fa-map-marker-alt"></i> &nbsp;Pune, India </p>
                            </div>
                        </div>
                    </div>
                    <p className='hidden md:block'>Aug 2024 - Present</p>
                </div>

                <div className="border-tagColor border-[1px] rounded-[14px] flex flex-col mt-[15px] py-[10px] md:px-[20px]">
                    <div className="flex md:gap-7 p-[5px] items-center">
                        <p className="text-[20px] font-kanit md:w-auto w-[200px]">Software Engineer (Trainee)</p>
                        <p className="text-[17px] font-summery bg-tagBg-2 md:px-[15px] px-[10px] py-[3px] rounded-[12px]">Full Time</p>
                    </div>
                    <div className="p-[15px]">
                    <p className=" font-summery my-[5px] text-gray-500 ">‣</p>
                    <p className=" font-summery my-[5px] text-gray-500 ">‣</p>
                    <p className=" font-summery my-[5px] text-gray-500 ">‣</p>
                    
                    </div>
                    <div className=" flex gap-4 px-[15px] pb-[15px]">
                        {Workabl.map((item, index) => {
                            return <WorkSkill link={logos[item]} key={index} tooltip={item} />

                        })}
                    </div>
                </div>
            </div> */}


            <div className="border-tagColor border-[1px] bg-tagBg flex flex-col rounded-[14px] p-[20px]">
                <div className="flex md:flex-row flex-col items-center w-full justify-between">

                    <div className="flex md:mb-[0px] mb-[10px] md:flex-row flex-col">

                        <div className='flex items-center justify-between'>
                            
                        <div className="relative w-[60px] h-[60px] overflow-hidden rounded-[15px]">
                            <Image
                                src="/logo/workabl.png"
                                alt="Description of the image"
                                layout="fill" // Fill the container
                                objectFit="contain" // Cover the container while maintaining aspect ratio
                            />

                        </div>
                        <p className="block md:hidden mr-[-35px]">Apr 2024 - May 2024</p>

                        </div>
                        <div className="flex flex-col md:ml-[15px]">
                            <div>
                                <p className="text-[25px] font-popins">Workabl</p>

                            </div>
                            <div className="flex gap-5">
                                <Link href='https://www.workabl.in' className="font-summery  text-gray-500"> <i className="fas fa-link "></i>&nbsp;workabl.in</Link>
                                <p className="font-summery text-gray-500"><i className="fas fa-map-marker-alt"></i> &nbsp;Mumbai, India (Remote) </p>
                            </div>
                        </div>
                    </div>
                    <p className='hidden md:block'>Apr 2024 - May 2024</p>
                </div>

                <div className="border-tagColor border-[1px] rounded-[14px] flex flex-col mt-[15px] py-[10px] px-[20px]">
                    <div className="flex md:gap-7 p-[5px] items-center">
                        <p className="text-[20px] font-kanit ">Full Stack Development Intern</p>
                        <p className="text-[17px] font-summery bg-tagBg-2 px-[15px] py-[3px] rounded-[12px]">Internship</p>
                    </div>
                    <div className="md:p-[15px]">
                    <p className=" font-summery my-[5px] text-gray-500 ">‣ Built a production-grade event page for Workabl using <span className="text-white ">ReactJS, Node.js,</span> and <span className="text-white ">MySQL</span>  with <span className="text-white ">REST API.</span>  </p>
                    <p className=" font-summery my-[5px] text-gray-500 ">‣ Collaborated in an <span className="text-white ">Agile</span>  team, enhancing event creation, <span className="text-white ">Authentication</span> , and backend performance.</p>
                    <p className=" font-summery my-[5px] text-gray-500 ">‣ Tested APIs with <span className="text-white ">Postman</span> and ensured data integrity with <span className="text-white ">Joy.</span></p>
            
                    </div>
                     <div className=" flex gap-4 px-[15px] pb-[15px]">
                        {Workabl.map((item, index) => {
                            return <WorkSkill link={logos[item]} key={index} tooltip={item} />

                        })}
                    </div> 
                </div>
            </div>


            

        </div>
    );
}

export default ExperinceCard;
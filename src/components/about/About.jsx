import Image from 'next/image';
import './about.css';
import Button1 from '../Buttons/Button1';
import Key from '../key-points/Key';
import Link from 'next/link';
import Button4 from '../Buttons/Button4';
import Button2 from '../Buttons/Button2';

const About = ({ isComponent }) => {

    return (
        <div className='md:mx-[45px] md:my-[0px] my-[30px] mx-[10px] border-[0px] border-yellow-300 '>

            <div className="md:p-[60px] flex justify-between flex-col-reverse md:flex-row">
                <div className="mywork ">
                    <h2 className='text-[100px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight hidden md:block'>About <br></br>Me</h2>
                    <p className='md:w-[460px] tracking-[1px] message text-[18px] font-summery  text-gray-500'>Enthusiastic <span className='text-gray-300'>Full Stack Developer</span> driven by clean code and innovative solutions. Focused on crafting beautiful interfaces and seamless experiences. I am Graduated from PES Modern College of Engineering, Pune with CGPA of <span className='text-gray-300'>9.25</span>  in <span className='text-gray-300'>B.E. (IT). 

                    </span>Currently Working in <Link href='https://www.bitwiseglobal.com/' className='aboutLink'>Bitwise Solutions</Link>  as Software Developer Trainee </p>
                </div>
                <div className="">
                    <h2 className='text-[100px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight block md:hidden'>About <br></br>Me</h2>

                    <div className="relative w-[400px] h-[300px] overflow-hidden mr-[50px]  mb-[10px] about-img">
                        <Image
                            src="/about/pic3.png"
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                    <div className="flex gap-3 items-center">

                        {!isComponent &&
                            <div className="mt-5 md:block hidden">
                                <Button4 link='/about' val='Know More'/>
                            </div>
                        }

                        <div className="mt-5 md:block hidden">
                            <Button2 link="https://drive.google.com/file/d/1VbVn5ryWUdlkvm5cEtoB6LVgmJjY3YNL/view?usp=sharing" name="Resume" img="/logo/file.png" />

                        </div>
                    </div>

                </div>
            </div>
            <Key />
            <div className=" flex items-center mt-[10px] mb-[10px] justify-center md:hidden">
                <div className="flex gap-3 items-center">

                    {!isComponent &&
                        <div className="mt-5 ">
                            <Button4 link='/about' val='Know More'/>
                        </div>
                    }

                    <div className="mt-5 ">
                        <Button2 link="/resume" name="Resume" img="/logo/file.png" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
import Image from "next/image";
import './home.css'
import Button1 from "../Buttons/Button1";
import Button2 from "../Buttons/Button2";
import Social from "../Buttons/Social";
import Link from "next/link";
// import { FlipWords } from "@/components/ui/flip-words";
import { logos } from '@/../public/logo/logo';

const Hero = () => {
  const words = ["Web-development", "Flute-playing", "Programming", "Art"];

    return (

        <div className="border-0 border-white md:p-[75px] p-[10px] flex flex-col  heroBG">
            <div className="flex md:flex-row justify-between flex-col-reverse md:mt-[-44px]">


                <div>
                    <div className="flex items-center ">
                        <Image src='https://cdn3d.iconscout.com/3d/premium/thumb/waving-hand-10559027-8511605.png?f=webp' height={60} width={60} alt="Hello" />
                        <p className="md:text-[30px] text-[25px] text-gray-400 ">Hello World !</p>
                    </div>
                    <p className="md:text-[72px] text-[36px] font-bold">{"I'm"} <span className="gradient-text">Krushna</span> Nagare, </p>
                    <div className="md:text-[35px] text-[20px] text-gray-400 font-summery md:w-[670px]">{"I'm passionate about"}  
                      {/* <FlipWords words={words} /> */}
                      </div>
                    {/* <p className="md:text-[20px] text-[20px] text-gray-400 font-summery md:w-[470px]">Enthusiastic  <span className="text-white font-kanit font-medium "><FlipWords words={words} /> </span> driven by clean code and innovative solutions.</p> */}
                    <div className="flex mt-[18px] gap-4">
                        <Button1 link="/contact" name="Get in Touch" />
                        <Button2 link="https://drive.google.com/file/d/1VbVn5ryWUdlkvm5cEtoB6LVgmJjY3YNL/view?usp=sharing" name="Resume" img="/logo/file.png" />
                    </div>
                    <div className="flex mt-[18px] gap-3 " >

                        {/*<Social />*/}
                    <div className='flex gap-3 mt-[18px]'>
                        
                        <Link href='https://www.github.com/krushnx'>
                          <div className="relative w-[43px] h-[43px]  overflow-hidden pointer">
                             <Image
                               src={logos['Github']}
                               alt="Description of the image"
                               layout="fill" // Fill the container
                               objectFit="contain" // Cover the container while maintaining aspect ratio
                             />
                           </div>
                        </Link>
                        <Link href='https://www.linkedin.com/krushna-nagare'>
                          <div className="relative w-[60px] h-[60px]  overflow-hidden pointer">
                             <Image
                               src={logos['Linkedin']}
                               alt="Description of the image"
                               layout="fill" // Fill the container
                               objectFit="contain" // Cover the container while maintaining aspect ratio
                             />
                           </div>
                        </Link>
                        
                        <Link href='https://www.instagram.com/itskrushnanagare'>
                          <div className="relative w-[50px] h-[50px]  overflow-hidden pointer">
                             <Image
                               src={logos['Instagram']}
                               alt="Description of the image"
                               layout="fill" // Fill the container
                               objectFit="contain" // Cover the container while maintaining aspect ratio
                             />
                           </div>
                        </Link>
<Link href='mailto:contact.nagare@gmail.com'>
                          <div className="relative w-[43px] h-[43px]  overflow-hidden pointer">
                             <Image
                               src={logos['Mail']}
                               alt="Description of the image"
                               layout="fill" // Fill the container
                               objectFit="contain" // Cover the container while maintaining aspect ratio
                             />
                           </div>
                        </Link>

                    </div>

                        <div id="about"></div>
                    </div>

                </div>
                <div className="relative w-[400px] h-[400px] md:w-[480px] md:h-[550px] overflow-hidden  md:mt-[-75px] md:mb-[0] mt-[-40px] mb-[20px] z-100">
                        <Image
                            src="/home/avatar.png"
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                
            </div>
            <div className="md:flex justify-center w-[100%] hidden">
                <Link href='#about'>
                    <div className="scrollToAbout pointer">
                        <div className="moveDot"></div>
                    </div>
                </Link>
            </div>
        </div>

    );
}

export default Hero;
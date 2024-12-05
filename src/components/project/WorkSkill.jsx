import Image from "next/image";
import './project.css'
import Link from "next/link";
const WorkSkill = ({ link, tooltip }) => {
    return (
        <div className="hoverME flex flex-col mt-[15px] justify-center items-center" >
            <Link href='/about#mySkills'>
                <div className="relative w-[30px] h-[30px]   ">
                    <Image
                        src={link}
                        alt="Description of the image"
                        layout="fill" // Fill the container
                        objectFit="contain" // Cover the container while maintaining aspect ratio
                    />
                </div>
                
            </Link>
            
        </div>
    );
}

export default WorkSkill;

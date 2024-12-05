import Image from "next/image";
import Button1 from "../Buttons/Button1";

const Featured = () => {

    return (
        <div>
            

            <div className="hidden md:block">

                <div className="relative w-[410px] h-[300px] md:w-[600px] md:h-[400px] overflow-hidden   mb-[10px] ">

                    <Image
                        src="/work/featured.png"
                        alt="Description of the image"
                        layout="fill" // Fill the container
                        objectFit="cover" // Cover the container while maintaining aspect ratio
                    />
                </div>

                <div className="flex flex-col ml-[40px] mt-[-65px]">
                    <p className='text-[17px] font-bold ml-[35px] font-summery tracking-[2px]'>Featured Project</p>
                    <p className='text-[42px] mt-[-15px] font-medium font-kanit tracking-tight'>Trek Travel Website</p>
                    <Button1 link="https://trek-tide.web.app/" name="View Project" />
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden hidden flex flex-col justify-center items-center">

                <div className="relative w-[410px] h-[300px] md:w-[600px] md:h-[400px] overflow-hidden   ">

                    <Image
                        src="/work/featured-phone.png"
                        alt="Description of the image"
                        layout="fill" // Fill the container
                        objectFit="cover" // Cover the container while maintaining aspect ratio
                    />
                </div>

                <div className="flex flex-col justify-center items-center mt-[-10px]">
                    <p className='text-[17px] font-bold  font-summery tracking-[2px]'>Featured Project</p>
                    <p className='text-[42px]  font-medium font-kanit tracking-tight'>Trek Travel Website</p>
                    <Button1 link="https://trek-tide.web.app/" name="View Project" />
                </div>
            </div>
        </div>
    );
}

export default Featured;
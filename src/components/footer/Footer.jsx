import Image from 'next/image';
import './footer.css'
import { logos } from '../../../public/logo/logo';

const Footer = () => {

    return (
        <div className='mt-[15px]'>
            <p className=" font-summery text-gray-600 text-[13px] mb-[5px] text-center">THAT{"'"}S ALL FOLKS ! </p>

            <div className="font-handwriting text-center text-[36px] text-blue-400">
                Krushna Nagare
            </div>
            <div className="footer-background">
                <div className="footer-blob"></div>
            </div>
            <div className="footer-bottom">
                <article>
                    Design by Krushna Nagare &#169; 2024
                </article>

                <div className="flex items-center gap-5">

                    <p className='font-summery font-semibold'>Build With</p>

                    <div className="relative w-[35px] h-[35px] overflow-hidden rounded-[100px]">
                        <Image
                            src={logos['Next']}
                            alt="Description of the image"
                            layout="fill" // Fill the container
                            objectFit="cover" // Cover the container while maintaining aspect ratio
                        />
                    </div>
                    <p className='font-summery font-semibold'>X</p>

                    <div className="relative w-[35px] h-[35px] overflow-hidden rounded-[100px]">
                        <Image
                            src={logos['Triangle']}
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

export default Footer;
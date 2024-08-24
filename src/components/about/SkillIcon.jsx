import Image from "next/image";

const SkillIcon = ({ link, name }) => {

    return (
        <div className="flex flex-col ">
            <p className="mt-0 text-gray-500 text-center text-[15px]">{name}</p>
            <div className="relative w-[50px] h-[50px] overflow-hidden  ">
                <Image
                    src={link}
                    alt="Description of the image"
                    layout="fill" // Fill the container
                    objectFit="cover" // Cover the container while maintaining aspect ratio
                />
            </div>
        </div>
    );
}

export default SkillIcon;
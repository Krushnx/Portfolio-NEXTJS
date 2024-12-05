import Image from "next/image";
import { logos } from "../../../public/logo/logo";

const DashBoard = ({value , name , logo , color}) => {
  return (
    <div className={`flex items-center justify-between  ${color} p-[35px] h-[175px] w-[315px]`}>
      <div className="flex flex-col">
        <p className="text-[34px] font-bold">{value}</p>
        <p className="text-[24px] font-bold">{name}</p>
      </div>
      <div className="relative w-[85px] h-[85px] overflow-hidden ">
        <Image
          src={logos[logo]}
          alt="Description of the image"
          layout="fill"
           objectFit="contain"
        />
      </div>
    </div>
  );
};

export default DashBoard;

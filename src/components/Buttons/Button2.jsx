import Image from "next/image";
import Link from "next/link";

const Button2 = ({link , name , img}) =>{

    return(
        <Link href={link} className="py-3 w-[125px] text-gray-300 border-[1px]  border-gray-300 bg-transparent flex justify-center items-center text-[15px] font-bold rounded-[5px] pointer">
            {img && <Image src={img} height={15} width={15} alt="logo"/>}
            <button className="pointer">&nbsp; {name}</button>
        </Link>
    );
}

export default Button2;
import Link from "next/link";

const Button1 = ({link , name , type}) =>{

    return(
        <Link href={link} className="py-[9px] w-[145px] bg-Purple hover:bg-Purple-2 flex justify-center items-center text-[15px]  rounded-[5px] pointer">
            <button type={type} className="pointer">{name}</button>
        </Link>
    );
}

export default Button1;
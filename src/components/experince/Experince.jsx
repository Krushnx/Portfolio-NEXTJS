import Image from "next/image";
import Button4 from "../Buttons/Button4";
import Button2 from "../Buttons/Button2";
import Link from "next/link";
import Key from "../key-points/Key";
import ExperinceCard from "./ExperinceCard";

const Experince = () => {

    return (
        <div className='md:mx-[45px] md:my-[0px] my-[30px] mx-[10px] '>

            <div className="md:p-[60px] flex justify-between flex-col-reverse md:flex-row">
                <h2 className='md:text-[100px] text-[90px] font-kanit leading-[80px] font-medium mb-[30px] tracking-tight block'>My<br></br>Experince</h2>

            </div>
            <div className="md:px-[60px]">
                <ExperinceCard />
            </div>
        </div>
    );
}

export default Experince;
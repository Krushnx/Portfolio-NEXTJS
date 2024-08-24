import './key.css';

const KeyPoint = ({icon, title, desc, bgColor}) => {
    return (
        <div>
            <div className="flex flex-col border-tagColor py-[30px] border-[1px] rounded-[15px]">
                <div className="w-100% border-[1px] border-tagColor mb-[-25px]"></div>
                <div className="flex items-center myDiv">
                    <div className={`h-[50px] mr-[-17px] z-[2] w-[50px] ml-[20px] rounded-[100px] flex justify-center items-center font-bold ${bgColor}`}>{icon}</div>
                    <p className="bg-tagColor px-[13px] py-[5px] mr-[20px] rounded-[100px] md:w-[300px] ">&nbsp;&nbsp;&nbsp;&nbsp;{title}</p>
                </div>
                <p className='mt-[10px] ml-[45px] w-[250px] font-light text-gray-400'>{desc}</p>
            </div>
        </div>
    );
}

export default KeyPoint;

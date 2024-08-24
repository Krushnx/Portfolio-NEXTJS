
const SubmitBTN = ({  name  }) =>{

    return(
        <div  className="py-[9px] w-[145px] bg-Purple hover:bg-Purple-2 flex justify-center items-center text-[15px]  rounded-[5px] pointer">
            <button type='submit' className="pointer">{name}</button>
        </div>
    );
}

export default SubmitBTN;
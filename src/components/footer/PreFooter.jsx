import Image from "next/image";

const PreFooter = () => {

    return (
        <div className="my-[60px]">
            <div className="Prefooter mt-[100px]">
                <div className="flex md:mx-[50px] gap-10 items-center justify-between md:flex-row flex-col">
                    <p className=" font-summery text-gray-500 md:w-[400px]">Thank you for visiting my portfolio. If you’d like to learn more about my work or discuss potential opportunities, please feel free to reach out. I’m always open to new projects and collaborations. </p>
                    <div className="flex md:flex-row flex-col">
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=krushnx&theme=transparent" alt="desc" className="h-[130px]" />
                        <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=krushnx&theme=transparent" alt="desc" className="h-[130px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreFooter;
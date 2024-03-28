import Image from "next/image";

interface Props {
    adData: {
        img: string;
        title: string;
        data: string;
    };
    theme: string;
};

const Advertisment = ({adData, theme} : Props) => {
    return (
        <div className={`w-[239px] h-[511px] flex flex-col items-center p-2 shadow-lg ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#3B3E47]'}`}>
            <div className={`relative`}>
                <Image src={adData?.img} width={217} height={218} alt="adv image" />
                <div className={`absolute flex items-center justify-center top-0 right-0 text-[#ffffff] w-[48px] h-[25px] bg-black font-[700] text-[13px] leading-[19px]`}>Ad</div>
            </div>
            <p className={`mt-[20px] font-[600] text-[20px] leading-[24px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>{adData?.title}</p>
            <p className={`mt-[10px] font-[400] text-[13px] leading-[19px] w-[189px] ${theme === 'light' ? 'text-[#525965]' : 'text-[#DFDFDF]'}`}>{adData?.data}</p>
        </div>
    )
};

export default Advertisment;

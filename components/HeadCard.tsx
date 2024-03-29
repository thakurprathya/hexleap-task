
import Image from 'next/image';

interface Props {
    cardData: {
        img: string;
        team: string;
        eventCount: number;
        sport: string;
    };
    theme: string;
};

const HeadCard = ({cardData, theme} : Props) => {
    return (
        <div className={`w-[239px] h-[511px] p-2 shadow-lg flex flex-col cursor-pointer ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#3B3E47]'}`}>
            <Image src={cardData?.img} width={385} height={217} alt="card image" className={`self-center`} />
            <p className={`mt-[15px] font-[500] text-[17px] leading-[21px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>{cardData?.team}</p>
            <div className={`mt-[10px] flex justify-between rounded-[2px] p-2 ${theme === 'light' ? 'bg-[#F7F7F8]' : 'bg-[#292B32]'}`}>
                <div className={`flex flex-col gap-1`}>
                    <p className={`font-[400] text-[12px] leading-[14.5px] ${theme === 'light' ? 'text-[#525965]' : 'text-[#DFDFDF]'}`}>Total Events</p>
                    <p className={`font-[500] text-[14px] leading-[17px] ${theme === 'light' ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}>{cardData?.eventCount}</p>
                </div>
                <div className={`flex flex-col gap-1`}>
                    <p className={`font-[400] text-[12px] leading-[14.5px] ${theme === 'light' ? 'text-[#525965]' : 'text-[#DFDFDF]'}`}>Sport</p>
                    <p className={`font-[500] text-[14px] leading-[17px] ${theme === 'light' ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}>{cardData?.sport}</p>
                </div>
            </div>
        </div>
    )
};

export default HeadCard;

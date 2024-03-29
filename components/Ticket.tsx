import Image from "next/image";

interface Props {
    ticketData: {
        img: string;
        team: string;
        location: string;
        date: string;
        day: string;
        time: string;
        btnText: string;
    };
    theme: string;
    screenWidth: number;
};

const Ticket = ({ticketData, theme, screenWidth} : Props) => {
    return (
        <div className={`w-[215px] h-[510px] md:w-[257px] md:h-[625px] flex flex-col items-center p-2 shadow-lg md:shadow-xl ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#3B3E47]'}`}>
            <Image src={ticketData?.img} width={screenWidth<=380 ? 215 : 257} height={screenWidth<=380 ? 375 : 401} alt="ticket"/>
            <div className={`-mt-[15px] md:-mt-[12px] relative`}>
                <div className={`absolute top-0 -left-8 md:-left-10 rounded-full w-5 h-5 ${theme === 'light' ? 'bg-[#f0f6fc]' : 'bg-[#221A2C]'}`}></div>
                <p className={`text-[#A9ACB2]`}>
                    {screenWidth <= 330 ?
                        `- - - - - - - - - - - - -`
                    : screenWidth <= 768 ?
                        `- - - - - - - - - - - - - - -`
                    :
                        `- - - - - - - - - - - - - - - - -`
                    }
                </p>
                <div className={`absolute top-0 -right-8 md:-right-10 rounded-full w-5 h-5 ${theme === 'light' ? 'bg-[#f0f6fc]' : 'bg-[#221A2C]'}`}></div>
            </div>
            <p className={`mt-[20px] font-poppins font-[500] text-[15px] md:text-[17px] leading-[22px] md:leading-[27px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>{ticketData?.team}</p>
            <div className={`mt-[10px] flex items-center gap-1 md:gap-2 uppercase font-poppins font-[400] text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>
                <p>{ticketData?.date+" |"}</p>
                <p>{ticketData?.day+" |"}</p>
                <p>{ticketData?.time}</p>
            </div>
            <p className={`mt-[20px] capitalize text-center md:w-[213px] font-[400] text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] ${theme === 'light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}>{ticketData?.location}</p>
            <button className={`mt-[20px] w-[180px] md:w-[213px] h-[36px] bg-[#1D1D1F] text-white font-[500] text-[13px] leading-[15px]`}>{ticketData?.btnText}</button>
        </div>
    )
};

export default Ticket;

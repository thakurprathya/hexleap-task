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
};

const Ticket = ({ticketData, theme} : Props) => {
    return (
        <div className={`w-[257px] h-[625px] flex flex-col items-center p-2 shadow-xl ${theme === 'light' ? 'bg-[#ffffff]' : 'bg-[#3B3E47]'}`}>
            <Image src={ticketData?.img} width={257} height={401} alt="ticket"/>
            <div className={`-mt-[12px] relative`}>
                <div className={`absolute top-0 -left-10 rounded-full w-5 h-5 ${theme === 'light' ? 'bg-[#f0f6fc]' : 'bg-[#221A2C]'}`}></div>
                <p className={`text-[#A9ACB2]`}>- - - - - - - - - - - - - - - - - </p>
                <div className={`absolute top-0 -right-10 rounded-full w-5 h-5 ${theme === 'light' ? 'bg-[#f0f6fc]' : 'bg-[#221A2C]'}`}></div>
            </div>
            <p className={`mt-[20px] font-poppins font-[500] text-[17px] leading-[27px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>{ticketData?.team}</p>
            <div className={`mt-[10px] flex items-center gap-2 uppercase font-poppins font-[400] text-[14px] leading-[21px] ${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`}>
                <p>{ticketData?.date+" |"}</p>
                <p>{ticketData?.day+" |"}</p>
                <p>{ticketData?.time}</p>
            </div>
            <p className={`mt-[20px] capitalize text-center w-[213px] font-[400] text-[14px] leading-[21px] ${theme === 'light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}>{ticketData?.location}</p>
            <button className={`mt-[20px] w-[213px] h-[36px] bg-[#1D1D1F] text-white font-[500] text-[13px] leading-[15px]`}>{ticketData?.btnText}</button>
        </div>
    )
};

export default Ticket;

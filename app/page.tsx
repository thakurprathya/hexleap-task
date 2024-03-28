"use client";
import { useState } from "react";
import { cardData, ticketData, advertismentData } from "@/constants";
import HeadCard from "@/components/HeadCard";
import Advertisment from "@/components/Advertisment";
import Ticket from "@/components/Ticket";

export default function Home() {
    const [theme, setTheme] = useState('dark');

    const HandleThemeChange = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <button onClick={HandleThemeChange} className={`fixed top-5 md:top-10 right-5 md:right-10 w-8 h-8 md:w-10 md:h-10`}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={`${theme === 'light' ? 'text-black' : 'text-[#ffffff]'}`} >
                    <path d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 017.5 2m11.57 1.5l1.43 1.43L4.93 20.5 3.5 19.07 19.07 3.5m-6.18 2.43L11.41 5 9.97 6l.42-1.7L9 3.24l1.75-.12.58-1.65L12 3.1l1.73.03-1.35 1.13.51 1.67m-3.3 3.61l-1.16-.73-1.12.78.34-1.32-1.09-.83 1.36-.09.45-1.29.51 1.27 1.36.03-1.05.87.4 1.31M19 13.5a5.5 5.5 0 01-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15-.24 3.35-2.53-2.2m4.33-2.7l1.15-2.77 2.2 2.54-3.35.23m1.15-4.96l-1.14-2.78 3.34.24-2.2 2.54M9.63 18.93l2.77 1.15-2.53 2.19-.24-3.34z" />
                </svg>
            </button>

            <div className={`p-5 md:py-10 md:px-20 w-full h-full flex flex-col items-center ${theme === 'light' ? 'bg-[#F7F7F8]' : 'bg-[#292B32]'}`}>
                <div className={`flex flex-col`}>
                    <p className={`font-poppins font-[700] text-[24px] leading-[36px] border-b-2 border-[#738FFF] w-[81px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>Sports</p>
                    <div className={`mt-[20px] flex gap-4 flex-wrap justify-center`}>
                        {/* cards */}
                        {cardData.map((card, index) =>
                            <HeadCard key={index} cardData={card} theme={theme} />
                        )}

                        {/* advertisment */}
                        <Advertisment adData={advertismentData} theme={theme} />
                    </div>
                    <button className={`mt-12 self-center bg-[#2C9CF0] hover:bg-blue-700 text-white w-[125px] h-[46px] font-[600] text-[16px] leading-[26px]`}>See More</button>
                </div>

                <div className={`mt-[50px] w-full flex flex-col items-center p-10 bg-gradient-to-b ${theme === 'light' ? 'text-black from-[#F9F8FF] to-[#F3F9FF]' : 'text-[#ffffff] from-[#18282A] to-[#221A2C]'}`}>
                    <p className={`font-poppins font-[700] text-[50px] leading-[53px]`}>Collection Spotlight</p>
                    <p className={`mt-[20px] max-w-[917px] text-center font-[400] text-[14px] leading-[23px]`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                    <div className={`mt-[30px]`}>

                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";
import{
    RxTwitterLogo,
} from 'react-icons/rx'

import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Our Channel
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube/>
                            <span className="text-[15px] ml-[6px]">YouTube</span>
                        </p>


                       
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo/>
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </p>

                       
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        

                        

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">2023 ALL RIGHTS RESERVED</span>
                        </p>

                       
                    </div>
               </div>

               
            </div>
        </div>
    )
}

export default Footer



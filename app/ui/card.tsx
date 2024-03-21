"use client"
import Image from 'next/image'
import { gsap } from 'gsap';
import { useRef } from "react";
import {useGSAP} from '@gsap/react'

interface CardProps{
    title: string ; 
    comment: string ; 
    src: string ; 
    classname: string ;
}


export default function Card({title , comment , src , classname}: CardProps){

    return(
        <div className={` ${classname} w-[232px] h-[248px] px-[14px] pt-[20px] z-10   shrink-0 rounded-2xl border border-white/15 bg-gradient-to-b from-[#1c1926f5] from-[-10.57%] to-[#000000f5] to-133.78% shadow-[0px_5px_4px_-1px_rgba(0, 0, 0, 0.15), 0px_0px_20px_0px_rgba(255, 255, 255, 0.03)] hover:transform hover:transition hover:duration-700 hover:ease-in-out  hover:translate-y-[-15px] cursor-pointer `}>
         <div className="flex flex-col gap-[14px] ">
            <div className=" pl-[9.16px] inline-flex items-center gap-[10.74px] ">
             <Image src={src} alt={""} width={36} height={36}/>
             <div className={`flex flex-col items-start ${classname}`}>
              <div className="text-[16px] font-medium leading-5 tracking-[-0.32px] text-white/90">Bryn Booker</div>
              <div className="text-[12px] font-normal leading-[16px] tracking-[-0.12px] text-white/50 ">CEO @bookerai</div>
             </div>
            </div>
            <div className={`w-[208px] h-[52px] shrink-0 rounded-md bg-[#ffffff08]  ${classname} `}></div>
         </div>                   
        </div>
    )
}
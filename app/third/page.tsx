"use client"
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/card";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);


export default function Third(){

    const containe = useRef(null) ;
    useGSAP(()=>{
      const tl = gsap.timeline() ;
      tl.from(".reff",{
        autoAlpha: 0,
        duration: 1 ,
      }).from(".firstPop",{
        autoAlpha: 0 ,
        y: 20 ,
        duration: 0.425 ,
        scale: 0.8 ,
        ease: "power4" ,
        backgroundColor: "black" ,
      },"-=0.5").from(".text",{
        y:-20 ,
        duration: 1 ,
        ease: "power4.out" ,
        autoAlpha: 0 ,
        stagger: 0.2 ,
      },"-=0.1").from(".btn",{
        autoAlpha: 0 ,
        ease:"back.out",
        duration: 0.530 ,
        scaleX: 0.03 ,
        
      },"-=1").from(".btnText",{
        autoAlpha: 0 ,
        y:30 ,
        duration: 0.45 ,
        ease: "power4.out",
      },"-=0.76")
    }, {scope: containe})
    return(
        
        <div ref={containe} className=" flex flex-col " >
          <div className=" reff w-full relative flex items-center justify-center">
           <div className="  mt-[-200px]  w-[682px] bg-[#6941c6b3] blur-[242px] h-[221px] "></div>
          </div>
          <div className="w-full  items-center justify-center flex flex-col overflow-hidden " >
          <div className=" px-[436px] pt-[108px] flex flex-col gap-9 items-start ">
            <div className="flex flex-col w-full items-center justify-center gap-6">
                <div className="firstPop py-[6px] px-3 rounded-[56px] border-[0.5px] border-white bg-gradient-to-b from-[#ffffff14] from-74.55% to-[#40404014] to-131.94% shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.10), 0px_3px_7px_1px_rgba(0, 0, 0, 0.20) inset] text-white text-center text-[13px] font-medium leading-5 tracking-[-0.26px] ">
                  New Update <span className="text-[#8B8B8B]">Joe,Sales artisan</span>
                </div>
                <div className="text max-w-[568px] text-center text-[48px] font-medium leading-[60px] tracking-[-1.44px] bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91% ">Crafting Digital Artisans & World-Class Software</div>
                <div className="text max-w-[468px] text-white/70 text-center text-[20px] font-normal leading-[26px] tracking-[-0.18px] pt-[2px]">Meet AI Artisans - Revolutionizing Team Integration with Feature-rich Software</div>
            </div>
            <div className="flex items-center justify-center w-full">
                <Link href={""} className="flex btn overflow-hidden justify-center items-center gap-[10px] rounded-[56px] py-[12px] px-6 bg-gradient-to-b from-[#663ade] from-[-41.25%] to-[#2E1C62] to-[131.94%] text-white text-[18px] font-medium leading-[20px] tracking-[-0.36px] hover:bg-[#663ade]  "><span className="btnText invisible">Hire Ava</span></Link>
            </div>
          </div>
          <Card/>
          </div>
        </div>
        

        
    )
}
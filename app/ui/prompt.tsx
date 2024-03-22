"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image" ;
gsap.registerPlugin(useGSAP);

export default function Prompt({props , classname}:{props: string , classname: string}){
    const prompt = useRef(null) ;

    useGSAP(()=>{
        const tl = gsap.timeline() ;
        tl.from(".firstPrompt",{
            autoAlpha: 0 ,
            y: 100 ,
            duration: 0.4 ,
            ease: "power2.out", 
        },"+=0.96").from(".secondPrompt",{
            autoAlpha: 0 ,
            y: 100 ,
            duration: 0.4 ,
            ease: "power2.out", 
        },"+=0.96")
    },{scope: prompt})

    return(
        <div ref={prompt} className="justify-end flex">
          <div className={` ${classname} pt-[5px] inline-flex items-center gap-4 pl-1 `}>
            <div className=" max-w-[430px] w-full text-right text-[16px] font-normal leading-5 tracking-[-0.32px] text-white/80 ">{props}</div>
            <Image src={"avatar.svg"} alt={"avatarLogoEmpty"} width={28} height={28} className="avatarAnimate"/>
          </div>
        </div>
        
    )
}
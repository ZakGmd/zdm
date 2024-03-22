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
        tl.from(prompt.current,{
            autoAlpha: 0 ,
            y: 100 ,
            duration: 0.4 ,
            ease: "power2.out", 
        },"+=0.96")
    })

    return(
        <div ref={prompt}>
          <div className={` ${classname} pt-[5px] inline-flex items-center gap-4 pl-1 `}>
            <div className="textAnimate max-w-[430px] w-full text-right text-[16px] font-normal leading-5 tracking-[-0.32px] text-white/90 ">{props}</div>
            <Image src={"avatar.svg"} alt={"avatarLogoEmpty"} width={28} height={28} className="avatarAnimate"/>
          </div>
        </div>
        
    )
}
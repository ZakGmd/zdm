"use client"
import Cards from "../ui/cards";
import Text from "../ui/aiText";
import Prompt from "../ui/prompt";
import AiText from "../ui/aiText";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Card(){
    const container = useRef(null) ;

    useGSAP(()=>{
        const tl = gsap.timeline() ;
        tl.from(container.current,{
            autoAlpha: 0 ,
            y:2500 ,
            ease: "power2" ,
            duration: 1 ,
        },"-=0.05").from(".date",{
            autoAlpha: 0,
            duration:0.8 ,
            ease: "power2.out" ,
            y:-20 ,
        }).from(".shape",{
            autoAlpha: 0,
            duration:0.8 ,
            ease: "power2.out" ,
        })

    }) ;

    return(
        <div className="w-full relative flex flex-col items-center justify-center mt-[64px]" ref={container}>
            <div className="absolute shape top-[100px] w-[588px] h-[323px] shrink-0 rounded-[16px] bg-[#6941c648] blur-[242px] -z-10"></div>
            <div className="max-w-[631px] w-full h-[340px]   shrink-0 rounded-2xl border border-white/15 bg-gradient-to-b from-[#1c1926f5] from-[-10.57%] to-[#000000f5] to-133.78% shadow-[0px_5px_4px_-1px_rgba(0, 0, 0, 0.15), 0px_0px_20px_0px_rgba(255, 255, 255, 0.03)]">
                <div className="flex flex-col gap-[26px] items-start  ">
                    <div className="px-[60px] pt-[31px] w-full flex flex-col gap-[23px]  ">
                        <div className="text-center date text-[13px] font-medium leading-5 tracking-[-0.26px] text-white/80 ">Today <span className="text-white/50">04:20 PM</span></div>
                        <Prompt props={"I need some leads!"} classname={"firstPrompt"} />
                        <AiText classname={"firstAiText max-w-[286px]"} texts={"Absolutely, I can help with that! I've just scoured the internet for potential leads that align with our targets."} aiClass={"firstAiLogo"} />
                    </div>
                    <div className="flex items-start gap-[21px] ml-[-60px]">
                        <Cards title={"Bryn Booker"} comment={"CEO @bookerai"} src={"cardAvatar1.svg"} classname={"-rotate-2 hover:rotate-[-4deg] "} />
                        <Cards title={"Drik Horton"} comment={"Founder of @horton"} src={"cardAvatar2.svg"} classname={"rotate-1 hover:rotate-[0deg]  "} />
                        <Cards title={"Adam Kramer"} comment={"Founder of Listup.ai"} src={"cardAvatar3.svg"} classname={"hover:rotate-[4deg] rotate-3 "}/> 
                    </div>

                </div>
            </div>
        </div>
    )
}
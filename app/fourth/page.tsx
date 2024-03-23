"use client"
import Link from "next/link";
import Popup from "../ui/popup";
import AiText from "../ui/aiText";
import Prompt from "../ui/prompt";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Fourth(){
    const container = useRef(null) ;

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
    },{scope: container})
    return(
        <div ref={container}>
            <div className="reff absolute top-[-200px] left-[440px] w-[790px] shadow-[0_210px_430px_30px_rgba(84,88,223,0.17)] h-[200px] z-10 rounded-full">
            </div>  
         <div className="w-full items-center justify-center flex flex-col overflow-hidden ">
          <div className="relative  w-[619px]   bg-gradient-to-b from-transparent   from-10%   to-[#0D0D0C] to-30%  ">
            <div className="w-[588px] h-[773px] absolute bottom-[-480px] rounded-[16px] bg-[#5458dfb3] blur-[240px] "></div>
            <div className="absolute w-[0.7px] h-[784.001px] bg-gradient-to-br from-transparent from-25%  via-white/20 via-49.09% to-white/5 to-[75.26%] "></div>
            <div className="absolute right-0 w-[0.7px] h-[784.001px] bg-gradient-to-br from-transparent from-45%  via-white/20 via-65.09% to-white/5 to-[75.26%] "></div>
            <div className=" pt-[78px] w-full flex  flex-col gap-9 items-start ">
             <div className=" flex flex-col w-full items-center justify-center gap-6">
              <div className="firstPop py-[6px] px-3 rounded-[56px]   bg-gradient-to-b from-[#ffffff14] from-74.55% to-[#40404014] to-131.94% shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.10), 0px_3px_7px_1px_rgba(0, 0, 0, 0.20) inset] text-white text-center text-[13px] font-medium leading-5 tracking-[-0.26px] ">New Update <span className="text-[#8B8B8B]">Otsu calendar is here!</span></div>
              <div className="text max-w-[588px] w-full text-center text-[48px] font-semibold leading-[60px] tracking-[-1.44px] bg-clip-text text-transparent bg-gradient-to-b from-white from-84.91% to-[#676767] to-148.91% ">Elevate Your Day with Otsu Your Personal Assistant</div>
              <div className="text max-w-[468px] text-white/70 text-center text-[20px] font-normal leading-[26px] tracking-[-0.18px] pt-[2px]">Experience the future of personal assistance, and the luxury of smart productivity.</div>
             </div>
             <div className="flex items-center justify-center w-full">
              <Link href={""} className="btn flex justify-center items-center gap-[10px] rounded-[56px] py-[12px] px-6 bg-gradient-to-br from-[#4339BF] from-[74.55%] to-[#2E1C62] to-[131.94%] text-white text-[18px] font-medium leading-[20px] tracking-[-0.36px]"><span className="btnText">Get started</span> </Link>
             </div>
             <div className="flex flex-col gap-[26px] items-start pl-[50.51px] pt-[29px] pr-[42px]  ">
                <AiText classname={"secondAiText max-w-[330px]"} texts={"Hello Moussaab! I'm Otsu, your personal productivity partner. Let's elevate your efficiency and scale new heights together."} aiClass={"secondAiLogo"}/>
                <div className="flex items-center justify-between w-full gap-[100px]">
                    <Popup title="Documents" comment="Adding 213 new files" src="document.svg" classname={"firstPopup"} />
                    <Prompt props={"Can you help me with my schedule?"} classname={"secondPrompt"} />
                </div>
                <div className="flex items-center relative  w-full ">
                  <AiText classname={"thirdAiText max-w-[330px]"} texts={"Need assistance with your schedule? Say no more. Let's synchronize your calendars and start optimizing your time right away."} aiClass={"thirdAiLogo"}/>
                  <Popup title="Inbox" comment="You have new emails." src="analytics.svg" classname="absolute right-[-134px] secondPopup" />
                 
                </div>
                <Popup title="Analytics" comment="Check your data for this m..." src="inbox.svg" classname="ml-[-100px] thirdPopup" />
                
             </div>
            </div>
          </div>
         </div>
        </div>
       
       
    )
}
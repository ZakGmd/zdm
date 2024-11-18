"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function Home() {
  const containe = useRef(null) ;
  useGSAP(()=>{
    var split = new SplitText('.textSplit',{type: "words"});
    const tl = gsap.timeline() ;
    tl.from(".Image",{
      autoAlpha: 0,
      duration: 1 ,
      ease:"power2.in",
    },"").from(".txt",{
      autoAlpha: 0 ,
      duration: 1 ,
      y: -20 , 
      ease: "power2" ,
    },"-=0.3").from(".txt2",{
      y:-20 ,
      duration: 1,
      ease: "power2" ,
      autoAlpha: 0 ,
    },"-=0.6").to(".reff",{
      y:-20 ,
      duration: 1 ,
      ease: "power4.out" ,
      autoAlpha: 1 ,
    },"-=1.1").from(".btn",{
      autoAlpha: 0 ,
      ease:"back.out",
      duration: 0.530 ,
      scaleX: 0.03 ,
      
    },"-=1.2").from(".btnText",{
      autoAlpha: 0 ,
        y:30 ,
        duration: 0.45 ,
        ease: "power4.out",
    },"-=0.9").from(".logos",{
      autoAlpha: 0,
      duration: 1 ,
      ease:"power2.in",
    }).from(split.words,{
      autoAlpha: 0 ,
      stagger: 0.08 ,
    },"-=1.6").to(".SHDW",{
      y:-20 ,
      duration: 1 ,
      ease: "power4.out" ,
      autoAlpha: 1 ,
    },"-=0.4")
  }, {scope: containe})
  return (
    <main className="relative flex flex-col w-full overscroll-y-contain " ref={containe}>
      <div className="reff w-full opacity-0 relative flex items-center justify-center">
        <div className="  mt-[-200px]  w-[682px] bg-[#6941c6b3] blur-[242px] h-[221px] ">
         </div>
      </div>
      <div className="SHDW opacity-0 fixed bottom-[-380px] left-[660px] w-[600px] shadow-[0_-210px_430px_50px_rgba(105,65,198,0.20)] h-[200px] z-10 rounded-full">
      </div>  
      <div className="flex flex-col gap-6 items-center justify-center  ">
        <div className=" mt-4" >
          <Image src="/HeroImage.svg" alt={"shadowSvg"} width={300} height={104} className="Image  flex -z-40"/>
        </div>
        <div className="flex flex-col items-center mt-[-56px] gap-7 max-w-[600px]">
          <div className="flex flex-col items-center gap-4   ">
            <div className="txt text-[48px] mt-[36px] text-slate-50 font-medium text-center tracking-tighter leading-[60px] " >Elevate Your Day with Otsu Your Personal Assistant</div>
            <div className="txt2 text-[20px] text-slate-50/50 text-center  leading-[26px] font-light" >Experience the future of personal assistance,<br></br> and the luxury of smart productivity.</div>
          </div>
          <Link href={""} className="flex btn overflow-hidden justify-center items-center gap-[10px] rounded-[56px] py-[12px] px-6 bg-gradient-to-b from-[#663ade] from-[-41.25%] to-[#2E1C62] to-[131.94%] text-white text-[18px] font-medium leading-[20px] tracking-[-0.36px] hover:bg-[#663ade]  "><span className="btnText">Get started</span></Link>
        </div>
        <div className="flex flex-col mt-11 items-center max-w-[600px] gap-10 ">
          <div className="textSplit text-white/80 text-[12px] tracking-[1px] uppercase font-normal  ">Used by people in top companies</div>
          <Image src={"/Logos.svg"} alt={"Logos"} className="logos" width={521.81} height={25.94} />
        </div>
        
      </div>
      
    </main>
  );
}

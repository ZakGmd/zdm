"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function Second(){
  const containe = useRef(null) ;
  const containe2 = useRef(null) ;
  useGSAP(()=>{
  
    const tl = gsap.timeline() ;
    tl.from(".Image",{
      autoAlpha: 0,
      duration: 1 ,
      ease:"power2.in",  
    },"").from(".word",{
      duration: 1, 
    autoAlpha: 0, 
    ease:"power1.out" ,
    y:-40 ,
    stagger: 0.12 ,
    },"").from(".textt",{
      autoAlpha: 0,
      duration: 1 ,
      y: -40 ,
      ease:"power4",
    },"-=0.8").from(".BTNS",{
      autoAlpha: 0 ,
      y:-20 ,
      duration: 1 ,
      ease: "power4.out" ,
      stagger:  0.2 ,
    },"-=0.6")
  }, {scope: containe})
  useGSAP(()=>{
    var split = new SplitText('.textSplit',{type: "words"});
    const tl = gsap.timeline() ;
    tl.from(split.words,{
      autoAlpha: 0 ,
      stagger: 0.08 ,
    },"+=1.7").from(".logos",{
      autoAlpha: 0,
      duration: 1 ,
      ease:"power2.in",
    },"-=0.5")
  }, {scope: containe2})
    return(
      <>
      
      <div className="flex items-center justify-between pt-[174px] pr-[295px] pl-[132px] " ref={containe}>
        <div className="flex flex-col items-start gap-[44px]">
          <div className="flex flex-col max-w-[438px] w-full items-start gap-4 ">
          <div id="tt">
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">We </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Create </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Digital<br></br> </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Workers </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Called </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Artisans </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">And </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">World-Class </span>
            <span className="word text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%">Software </span>
          </div>
            <div className="textt text-[16px] leading-[22px] tracking-[-0.18px] text-white/80 ">Artisans are out-of-the-box AI employees that integrate seamlessly with human teams. They use our feature-rich software.</div>
          </div>
          <div className="flex items-center gap-[16px]">
            <Link href={""} className="BTNS flex justify-center items-center gap-[10px] rounded-[56px] py-[10px] px-4 bg-gradient-to-b from-[#663ade] from-[-41.25%] to-[#2E1C62] hover:from-[#2E1C62]  text-white text-[14px] font-medium leading-[20px] tracking-[-0.28px] ">Hire Ava</Link>
            <Link href={""} className="BTNS flex justify-center items-center gap-[10px] rounded-[56px] py-[10px] px-4 bg-gradient-to-b from-[#99999937] from-[-41.25%]  via-[#bdbdbd1a] via-30% to-[#ffffff1a] hover:bg-[#bdbdbd1a] transition-colors  duration-300  text-white text-[14px] font-medium leading-[20px] tracking-[-0.28px] ">Meet all artisans</Link>
          </div>
        </div>
        <div className="mt-[-60px]">
        <Image src={"/HeroImage.svg"} alt={"AiLogo"} className="Image " width={321} height={341} />
        </div>
      </div>
      <div className="w-full flex items-center mt-[100px] justify-center">
        <div className="flex flex-col  items-center max-w-[600px] gap-10 mt-6" ref={containe2}>
          <div   className="textSplit text-white/80 text-[12px] tracking-[1px] uppercase font-normal  ">Used by people in top companies</div>
          <Image src={"/Logos.svg"} alt={"Logos"} width={521.81} height={25.94}  className="logos"/>
        </div>
      </div>
     
      
      </>

    )
}
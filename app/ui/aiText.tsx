"use client"
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

interface AiTypes{
  classname: string ;
  texts: string ; 
  aiClass: string ;
}
export default function AiText({classname , texts , aiClass}:AiTypes){
    const textsContainer = useRef(null) ;
    const aiAvatar = useRef(null) ;

    useGSAP(() => {
        var splitFirstText = new SplitText('.firstAiText',{type: "chars"});
        var splitSecondText = new SplitText('.secondAiText',{type: "words"}) ;
        var splitThirdText = new SplitText('.thirdAiText',{type: "words"}) ;

        const tl = gsap.timeline() ;
        tl.from(".firstAiLogo",{
          autoAlpha: 0 ,
          y:30 ,
          ease: "power2.out" ,
          duration: 0.4 ,
        },"+=1.3").from(splitFirstText.chars ,{
            
            autoAlpha: 0 ,
            stagger: 0.02 ,
        }).from(splitSecondText.words,{
          autoAlpha: 0 ,
          stagger: 0.08 ,
        },"-=0.5").from(".secondAiLogo",{
          autoAlpha: 0 ,
          y:30 ,
          ease: "power2.out" ,
          duration: 0.4 ,
        },"-=2.1").from(splitThirdText.words,{
          autoAlpha: 0 ,
          stagger: 0.08 ,
        },"+=1.4").from(".thirdAiLogo",{
          autoAlpha: 0 ,
          y:30 ,
          ease: "power2.out" ,
          duration: 0.4 ,
        },"-=2.1")

      },{scope: textsContainer})
    return(
        <div ref={textsContainer}>
          <div className="inline-flex items-start gap-4 ">
           <Image src={"aiAvatar.svg"} alt={"avatar for ai"} width={28} height={28} ref={aiAvatar} className={`${aiClass} z-20`} />
           <div className={` ${classname} flex-1 text-white/60 text-[16px] leading-5 tracking-[-0.32px]  `}>{texts}</div>
          </div>
        </div>
        
    )
}
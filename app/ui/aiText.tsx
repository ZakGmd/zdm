"use client"
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function AiText({classname , texts}:{classname: string , texts: string}){
    const textsContainer = useRef(null) ;
    const aiAvatar = useRef(null) ;

    useGSAP(() => {
        var splitFirstText = new SplitText('.firstAiText',{type: "chars"});
        var splitSecondText = new SplitText('.secondAiText',{type: "words"}) ;

        const tl = gsap.timeline() ;
        tl.from(aiAvatar.current,{
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
        },"-=1.5")

      },{scope: textsContainer})
    return(
        <div ref={textsContainer}>
          <div className="inline-flex items-start gap-4 ">
           <Image src={"aiAvatar.svg"} alt={"avatar for ai"} width={28} height={28} ref={aiAvatar} />
           <div className={` ${classname} flex-1 text-white/70 text-[16px] leading-5 tracking-[-0.32px] `}>{texts}</div>
          </div>
        </div>
        
    )
}
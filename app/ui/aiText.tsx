"use client"
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function AiText(){
    const text = useRef(null) ;
    const aiAvatar = useRef(null) ;

    useGSAP(() => {
        var splitText = new SplitText(text.current,{type: "chars"});
        const tl = gsap.timeline() ;
        tl.from(aiAvatar.current,{
          autoAlpha: 0 ,
          y:30 ,
          ease: "power2.out" ,
          duration: 0.4 ,
        },"+=1.3").from(splitText.chars ,{
            autoAlpha: 0 ,
            stagger: 0.02 ,
        })

      })
    return(
        <div className="max-w-[400px] flex items-start gap-4 ">
          <Image src={"aiAvatar.svg"} alt={"avatar for ai"} width={28} height={28} ref={aiAvatar} />
          <div className=" flex-1 text-white/70 text-[16px] leading-5 tracking-[-0.32px] " ref={text}>Absolutely, I can help with that! I&apos;ve just scoured the internet for potential leads that align with our targets.</div>
        </div>
    )
}
"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap-trial/SplitText" ;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText) ;

export default function Text(){
    const text = useRef(null) ;
    

    useGSAP(() => {
        var splitText = new SplitText(text.current,{type: "chars"});
        const tl = gsap.timeline() ;
        tl.from(splitText.chars ,{
            autoAlpha: 0 ,
            stagger: 0.05 ,
        })

      },)
    return(
        <div className=" flex-1 text-white/70 text-[16px] leading-5 tracking-[-0.32px] " ref={text}>Absolutely, I can help with that! I&apos;ve just scoured the internet for potential leads that align with our targets.</div>
    )
}
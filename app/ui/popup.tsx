"use client"
import Image from 'next/image'
import { gsap } from 'gsap';
import { useRef } from "react";
import {useGSAP} from '@gsap/react' ;
gsap.registerPlugin(useGSAP);

interface PopupTypes{
  title: string ; 
  comment: string ; 
  src: string ; 
  classname: string ;
}

export default function Popup({title , comment ,src , classname}:PopupTypes) {
  const popup = useRef(null) ;
  useGSAP(()=>{
    const tl = gsap.timeline();
      tl.from(".firstPopup",{
        autoAlpha: 0 ,
        scale: 0.75,    
        y: 43.55 ,
        duration: 0.4 ,
        ease:"power2.out" ,
      },"+=1")
  },{scope: popup})
  return (
    <div ref={popup}>
     <div className={`${classname} w-[227px] flex py-2 pl-3 pr-2 items-center rounded-xl  bg-white/10 shadow-[0px_0px_0px_0.6px_rgba(0, 0, 0, 0.10), 0px_3px_2px_-1px_rgba(0, 0, 0, 0.05)] backdrop-blur-[4px] ml-[-160px]` }>
      <div className="flex items-center gap-3 flex-1 self-stretch">
        <Image src={src} alt={""} height={38} width={38} />
        <div className="flex flex-col items-start  ">
         <div className="text-[13px] font-medium leading-4 tracking-[-0.13px] text-white">{title}</div>
         <div className="text-[11px] font-normal text-ellipsis leading-4 tracking-[-0.11px] text-white/60">{comment}</div>
        </div>
      </div>
     </div>
    </div>
  )
}



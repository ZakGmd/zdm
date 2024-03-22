import Image from "next/image";
import Link from "next/link";
import Card from "../ui/card";



export default function Third(){

    return(
        <>
        <div className="absolute top-[-200px] left-[440px] w-[790px] shadow-[0_210px_430px_30px_rgba(84,88,223,0.17)] h-[200px] z-10 rounded-full">
        </div>
        <div className="w-full items-center justify-center flex flex-col overflow-hidden ">
          <div className=" px-[436px] pt-[78px] flex flex-col gap-9 items-start ">
            <div className="flex flex-col w-full items-center justify-center gap-6">
                <div className="py-[6px] px-3 rounded-[56px] border-[0.5px] border-white bg-gradient-to-b from-[#ffffff14] from-74.55% to-[#40404014] to-131.94% shadow-[0px_1px_2px_0px_rgba(0, 0, 0, 0.10), 0px_3px_7px_1px_rgba(0, 0, 0, 0.20) inset] text-white text-center text-[13px] font-medium leading-5 tracking-[-0.26px] ">New Update <span className="text-[#8B8B8B]">Joe,Sales artisan</span></div>
                <div className="max-w-[568px] text-center text-[48px] font-medium leading-[60px] tracking-[-1.44px] bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91% ">Crafting Digital Artisans & World-Class Software</div>
                <div className="max-w-[468px] text-white/70 text-center text-[20px] font-normal leading-[26px] tracking-[-0.18px] pt-[2px]">Meet AI Artisans - Revolutionizing Team Integration with Feature-rich Software</div>
            </div>
            <div className="flex items-center justify-center w-full">
                <Link href={""} className="flex justify-center items-center gap-[10px] rounded-[56px] py-[12px] px-6 bg-gradient-to-br from-[#5834BD] from-[74.55%] to-[#2E1C62] to-[131.94%] text-white text-[18px] font-medium leading-[20px] tracking-[-0.36px]">Hire Ava</Link>
            </div>
          </div>
          <Card/>
        </div>

        </>
    )
}
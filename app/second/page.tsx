import Image from "next/image";
import Link from "next/link";

export default function Second(){

    return(
      <>
      
      <div className="flex items-center justify-between pt-[174px] pr-[295px] pl-[132px] ">
        <div className="flex flex-col items-start gap-[44px]">
          <div className="flex flex-col max-w-[438px] w-full items-start gap-4 ">
            <div className="text-[36px] font-medium leading-[46px] tracking-[-1.08px] self-stretch bg-clip-text text-transparent bg-gradient-to-b from-white from-14.91% to-[#676767] to-148.91%  ">We Create Digital Workers Called Artisans And World-Class Software</div>
            <div className="text-[16px] leading-[22px] tracking-[-0.18px] text-white/80 ">Artisans are out-of-the-box AI employees that integrate seamlessly with human teams. They use our feature-rich software.</div>
          </div>
          <div className="flex items-center gap-[16px]">
            <Link href={""} className="flex justify-center items-center gap-[10px] rounded-[56px] py-[10px] px-4 bg-gradient-to-br from-[#5834BD] to-[#2E1C62] text-white text-[14px] font-medium leading-[20px] tracking-[-0.28px] ">Hire Ava</Link>
            <Link href={""} className="flex justify-center items-center gap-[10px] rounded-[56px] py-[10px] px-4 bg-gradient-to-b from-[#99999937] from-[-41.25%]  via-[#bdbdbd1a] via-30% to-[#ffffff1a] text-white text-[14px] font-medium leading-[20px] tracking-[-0.28px] ">Meet all artisans</Link>
          </div>
        </div>
        <div className="mt-[-60px]">
        <Image src={"/HeroImage.svg"} alt={"AiLogo"} width={321} height={341} />
        </div>
      </div>
      <div className="w-full flex items-center mt-[100px] justify-center">
        <div className="flex flex-col  items-center max-w-[600px] gap-10 ">
          <div className="text-white/80 text-[12px] tracking-[1px] uppercase font-normal  ">Used by people in top companies</div>
          <Image src={"/Logos.svg"} alt={"Logos"} width={521.81} height={25.94} />
        </div>
      </div>
     
      
      </>

    )
}
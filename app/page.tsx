import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full ">
      <div className="fixed top-[-200px] left-[440px] w-[790px] shadow-[0_210px_430px_30px_rgba(84,88,223,0.17)] h-[200px] z-10 rounded-full">
      </div>
      <div className="fixed bottom-[-380px] left-[540px] w-[600px] shadow-[0_-210px_430px_50px_rgba(84,88,223,0.17)] h-[200px] z-10 rounded-full">
      </div>
      
      
      
      <div className="flex flex-col gap-2 items-center justify-center  ">
        <div >
          <Image src="/HeroImage.svg" alt={"shadowSvg"} width={300} height={104}/>
        </div>
        <div className="flex flex-col items-center mt-[-40px] gap-7 max-w-[600px]">
          <div className="flex flex-col items-center gap-4   ">
            <div className=" text-[48px] text-slate-50 font-medium text-center tracking-tighter leading-[60px] " >Elevate Your Day with Otsu Your Personal Assistant</div>
            <div className=" text-[20px] text-slate-50/75 text-center  leading-[26px] font-light" >Experience the future of personal assistance,<br></br> and the luxury of smart productivity.</div>
          </div>
          <Link href={""} className="px-6 py-3 text-[18px] leading-[20px] gap-2 text-base tracking-tighter bg-[#4439C0] rounded-3xl text-white ">Get started</Link>
        </div>
        <div className="flex flex-col mt-11 items-center max-w-[600px] gap-10 ">
          <div className="text-white/80 text-[12px] tracking-[1px] uppercase font-normal  ">Used by people in top companies</div>
          <Image src={"/Logos.svg"} alt={"Logos"} width={521.81} height={25.94} />
        </div>
      </div>
    </main>
  );
}

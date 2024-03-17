import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col   min-h-screen w-full ">
      <div className="fixed top-[-200px] left-[490px] w-[722px] shadow-[0_210px_430px_55px_rgba(84,88,223,0.2)] h-[200px] z-10 rounded-sm">
      </div>
      
      <nav className="px-[144px] pt-6 pb-2 flex items-center justify-between">
        <Image src="/LogoGroup.svg" alt={"shadowSvg"} width={130} height={24}/>
        <div className="flex items-center gap-9 px-4 py-3">
          <Link href={""} className=" text-sm tracking-tighter items-start font-semibold text-slate-50 ">Features</Link>
          <Link href={""} className=" text-sm tracking-tighter items-start font-medium text-slate-50 ">About</Link>
          <Link href={""} className=" text-sm tracking-tighter items-start font-medium text-slate-50 ">Pricing</Link>
          <Link href={""} className=" text-sm tracking-tighter items-start font-medium text-slate-50 ">Ressources</Link>
          <Link href={""} className=" text-sm tracking-tighter items-start font-medium text-slate-50 ">Contact</Link>
        </div>
        <div className="flex items-center gap-9 ">
          <div className="text-sm text-slate-50">Log in</div>
          <Link href={""} className="px-4 py-2 text-cente text-sm tracking-tighter bg-[#4439C0] rounded-3xl text-white ">Get started</Link>
        </div>
      </nav>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div >
          <Image src="/HeroImage.svg" alt={"shadowSvg"} width={341} height={364}/>
        </div>
        <div className="flex flex-col items-center gap-7 max-w-[668px]">
          <div className="flex flex-col items-center gap-4   ">
            <div className=" text-5xl text-slate-50 font-semibold text-center tracking-tighter leading-[60px] " >Elevate Your Day with Otsu Your Personal Assistant</div>
            <div className=" text-xl text-slate-50/50 text-center tracking-[-0.18px] leading-7 font-light" >Experience the future of personal assistance,<br></br> and the luxury of smart productivity.</div>
          </div>
          <Link href={""} className="px-6 py-2 text-cente text-base tracking-tighter bg-[#4439C0] rounded-3xl text-white ">Get started</Link>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen ">
      <div className="absolute top-1 left-[400px]">
        <Image src="/shadowTop.svg" alt={"shadowSvg"} width={682} height={221}/>
      </div>
      <div className="absolute bottom-0 left-0">
      <Image src="/shadowBottom.svg" alt={"shadowSvg"} width={588} height={723}/>
      </div>
      <nav className="px-[144px] py-6 flex items-center justify-between">
        <Image src="/LogoGroup.svg" alt={"shadowSvg"} width={130} height={24}/>
        <div></div>
        <div></div>
      </nav>
    </main>
  );
}

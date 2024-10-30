"use client";
import Headers from "@/components/headers";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();


  return (
    <>
      <Headers />
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/home-bg-img.png)' }}>
        <div className="absolute inset-0 bg-[rgb(0,0,0,0.1)]"></div>
        <div className="relative z-10 flex items-center justify-start h-[75%] ms-36 text-[#12305B]">
          <div>
            <div className="text-[18px]">We&apos;re here to help you</div>
            <div className="font-bold text-[60px]">Relax & Rest</div>
            <div>With the aid of our Melatonin Sleepstiq, we can assure you that you can <br /> get quality sleep.</div>
            <button onClick={() => {router.push("/shop")}} className="bg-[#FC5959] rounded-md font-semibold text-center text-white mt-6 py-4 w-[40%] text-sm font-opensans">
            Visit Shop
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white px-36 py-16">
        <div className="flex">
          <div>
            <div>Our Amazing Story</div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

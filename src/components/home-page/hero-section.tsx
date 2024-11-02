import { RouterProps } from "@/interfaces/RouterInterface";
import Image from "next/image";
import React, { FC } from "react"

const HeroSection:FC<RouterProps> = ({router}) => {
  return (
    <>
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/home-bg-img.png)" }}>
    <div className="relative z-10 flex items-center justify-start h-[90%] ms-6 sm:ms-16 lg:ms-36 text-[#12305B]">
      <div>
        <div className="sm:text-[18px]">We&apos;re here to help you</div>
        <div className="font-bold text-3xl sm:text-[45px] lg:text-[60px] py-2 sm:py-8">Relax & Rest</div>
        <div className=" w-[70%] sm:w-full">With the aid of our Melatonin Sleepstiq, we can assure you that you can <br /> get quality sleep.</div>
        <button onClick={() => { router.push("/shop") }} className="bg-[#FC5959] rounded-md font-semibold text-center text-white mt-6 py-4 w-[40%] text-sm font-opensans">
          Visit Shop
        </button>
      </div>
    </div>
  </section>
  <div className="bg-white py-8 px-16 w-[85%] overflow-x-auto whitespace-nowrap  absolute flex items-center gap-10 -bottom-14 right-0" style={{
        boxShadow: "50px 50px 100px 0px rgba(0, 0, 0, 0.15)",
      }}>
        <Image
          src={"/images/google-logo.png"}
          alt="logo"
          width={146}
          height={51}
        />
        <Image
          src={"/images/forbes-logo.png"}
          alt="logo"
          className="mb-2"
          width={129}
          height={51}
        />
        <Image
          src={"/images/bloomberg-logo.png"}
          alt="logo"
          width={226}
          height={51}
        />
        <Image
          src={"/images/Sleep-Review-Logo.png"}
          alt="logo"
          width={201}
          height={51}
        />
        <Image
          src={"/images/influensive-logo.png"}
          alt="logo"
          width={220}
          height={51}
        />
      </div>
  </>
  )
}

export default HeroSection
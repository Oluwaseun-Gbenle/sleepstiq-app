import React from "react"

const ShopHeroSection = () => {
  return (
    <>
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url(/images/sleeping-man.png)" }}>
        <div className="relative z-10 flex items-center justify-start h-[80%] ms-6 sm:ms-16 lg:ms-36 text-[#12305B]">
          <div>
            <div className="sm:text-[18px]">We&apos;re here to help you</div>
            <div className="font-bold text-4xl sm:text-[45px] lg:text-[60px] py-2 sm:py-8">Relax & Rest</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopHeroSection
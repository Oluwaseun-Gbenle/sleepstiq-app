import { RouterProps } from "@/interfaces/RouterInterface"
import Image from "next/image"
import React, { FC } from "react"

const ShopNow: FC<RouterProps> = ({ router }) => {
    return (
        <section className="relative -top-14 lg:flex items-center justify-between px-6 sm:px-16 lg:px-0">
            <div className="lg:w-1/2">
                <Image
                    src={"/images/Vape-Pen 1.png"}
                    alt="vape-pen"
                    className=""
                    width={775}
                    height={580}
                />
                 <div className="lg:absolute w-fit lg:w-[30%] mx-auto lg:mx-0 lg:left-[22%] right-20 my-5 lg:my-0 bottom-0 rounded-md bg-white p-7 text-[#4D533C] italic leading-6" style={{ boxShadow:" 0px 50px 100px 0px rgba(0, 0, 0, 0.15)"}}>
                😊  Promotes calm and relaxation. <br />
                💤  Inhalation allows for a rapid effect. <br />
                ✅  100% drug-free, plant-based ingredients. <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 3rd-party lab tested. <br />
            </div>
            </div>
            <div className="lg:w-[45%] px-6 sm:px-16 lg:mx-0 text-center lg:text-start">
                <div className="font-bold text-[36px] text-[#12305B] mt-16 lg:mt-0">Shop Now</div>
                <div className="text-[#21384299] py-12 lg:w-[70%]">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</div>
                <button onClick={() => { router.push("/shop") }} className="bg-[#FC5959] rounded-md font-semibold text-center text-white mt-2 lg:mt-6 py-4 w-[40%] text-sm font-opensans">
                    Visit Shop
                </button>
            </div>
        </section>
    )
}

export default ShopNow
import { RouterProps } from "@/interfaces/RouterInterface"
import React, { FC } from "react"

const VisitShop: FC<RouterProps> = ({ router }) => {
    return (
        <>
        <div className="px-36 pb-36 text-center">
            <div className="font-bold text-[36px] text-[#12305B]">Visit Our Shop</div>
            <div className="text-[#21384299] pt-8 w-[90%]">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
            </div>
            <button onClick={() => { router.push("/shop") }} className="bg-[#FC5959] rounded-md font-semibold text-center text-white mt-6 py-4 w-[40%] text-sm font-opensans">
                Visit Shop
            </button>
        </div>
        <hr className="border-[#21384218]  mx-36 relative bottom-0  mb-24"/>
        </>
    )
}

export default VisitShop
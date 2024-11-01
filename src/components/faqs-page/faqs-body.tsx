import React, { useState } from "react"
import SleepstiqProduct from "./sleepstiq-product"

const FaqsBody = () => {
    const [link, setLink] = useState("sleepstiq-product")
    return (
        <div className="bg-white px-8 md:px-[68px] mt-16 min-h-[80vh]">
            <div className="sm:flex gap-16">
                <div className="sm:text-[18px] text-[#12305B] flex items-center gap-4 sm:block">
                    <div onClick={() => { setLink("sleepstiq-product") }} className={`cursor-pointer hover:text-[#0d83aa] ${link === "sleepstiq-product" ? "font-bold" : ""} `}>
                        <span className="relative">Sleepstiq</span>
                        <span className="bg-[#FFD7231A]  py-3 sm:pe-8">
                            <span className=""> Product</span>
                        </span>
                    </div>
                    <div onClick={() => { setLink("order") }} className={`cursor-pointer hover:text-[#0d83aa] ${link === "order" ? "font-bold" : ""} py-12`}>Order</div>
                    <div onClick={() => { setLink("melantonin") }} className={`cursor-pointer hover:text-[#0d83aa] ${link === "melantonin" ? "font-bold" : ""}`}>Melantonin</div>
                </div>
                <div className="sm:w-[70%] mb-16">
                    {link === "sleepstiq-product" ? <SleepstiqProduct /> : <div />}
                </div>
            </div>
        </div>
    )
}

export default FaqsBody
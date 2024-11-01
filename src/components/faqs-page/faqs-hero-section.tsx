import Image from "next/image"
import React from "react"

const FaqsHeroSection = () => {
    return (
        <>
            <section className="relative w-full h-[85vh] bg-[#FBF9F2]">
                <div className="relative z-10 flex items-center justify-start h-[90%] ms-6 sm:ms-16 lg:ms-36 text-[#12305B]">
                    <div>
                        <div className="sm:text-[18px]">We&apos;re here to help you</div>
                        <div className="font-semibold text-3xl sm:text-[45px] lg:text-[60px] py-2 sm:py-8">How can we assist?</div>
                        <div className="relative">
                            < Image
                                src="/svg/search.svg"
                                alt="search"
                                className="absolute left-3 sm:left-12 top-7"
                                width={33}
                                height={33}
                            />
                            <input type="search" placeholder="Search FAQs here" className="text-[#12305B] bg-white mt-2 py-6 px-12 sm:px-24 placeholder-[#12305B] w-[80vw] md:w-[60vw] rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqsHeroSection
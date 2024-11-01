"use client"
import Image from "next/image"
import React from "react"
import { logos } from "./data"

const Footer = () => {
    return (
        <div className="bg-[#12305b] relative pt-10 pb-12 px-[68px]">
            <Image
                src={"/svg/footer.svg"}
                alt="footer svg"
                className="absolute object-cover xl:object-contain z-0 pointer-events-none"
                fill
            />
            <div className="flex justify-center">
                <Image
                    src={"/images/logo2.png"}
                    alt="logo"
                    width={134}
                    height={89}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:flex gap-12 lg:gap-8 mt-12 text-white w-full z-10">
                <div>
                    <div className="mb-8 font-semibold">COMPANY</div>
                    <div className="space-y-4 flex flex-col text-[#ABABAB]">
                        <a href="/about">About</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                        <a href="/jobs">Jobs</a>
                    </div>
                </div>
                <div>
                    <div className="mb-8 font-semibold">CONTACT</div>
                    <div className="space-y-4 flex flex-col">
                        <div className="text-[#ABABAB]">Phone</div>
                        <div className="font-bold">+234 708 507 3128</div>
                        <div className="text-[#ABABAB]">Address</div>
                        <div className="font-bold">16, Ogindipe Close, Upston  Close</div>
                    </div>
                </div>

                <div className=" lg:w-[40%] mx-auto flex gap-6">
                    <div>
                        <div className="mb-8 font-semibold">CONSUMER ADVISORY</div>
                        <div className="">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.
                            <br /> <br />By using our website or product, you agree to follow our <br /> <a className="text-[#8FE2FF] cursor-pointer">terms of service.</a></div>
                    </div>
                    <div className="h-[210px] border-l border-[#5D6544] hidden md:block"></div>
                </div>
                <div>
                    <div className="font-semibold ">GET IN TOUCH</div>
                    <div className="text-[#ABABAB] my-8">Feel free to get in touch with us vai email</div>
                    <div className="font-bold text-xl sm:text-2xl">hello@sleepstiq.com</div>
                    <div className="flex gap-x-4 mt-6">
                        {logos.map((logo, index) => (
                            < Image
                                key={index}
                                src={logo}
                                className="cursor-pointer"
                                alt="logo"
                                width={33}
                                height={33}
                            />
                        ))}
                    </div>
                    <div className="text-[#ABABAB] text-sm mt-12">© 2020@sleepstiq. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
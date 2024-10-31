import Image from "next/image"
import React from "react"

const Mission = () => {
    return (
        <section className="relative -top-14 flex items-center justify-between flex-row-reverse py-36 px-36">
            <div className="w-1/2">
                <Image
                    src={"/images/sleeping-image.png"}
                    alt="sleeping image"
                    className=""
                    width={735}
                    height={550}
                />
            </div>
            <div className="w-[45%]">
                <div className="font-bold text-[36px] text-[#12305B]">Our Mission</div>
                <div className="text-[#21384299] pt-8 w-[90%]">We started Sleepstiq with 1 simple goal: to be your best friend at bedtime. We, just like you, deal with stress, unease, and trouble sleeping from a number of silly things like school, work, screens, numbers, and people. That&apos;s why we created products that aim to -
                    <br /><br /> ✓ Promote Calm
                    <br /> ✓ Support Sleep
                    <br /> ✓ Reduce Stress
                    <br /> ✓ Aid Relaxation</div>
            </div>
        </section>
    )
}

export default Mission
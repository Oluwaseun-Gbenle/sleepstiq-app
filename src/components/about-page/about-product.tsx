import { RouterProps } from "@/interfaces/RouterInterface"
import Image from "next/image"
import React, { FC, useState } from "react"
import { customerReviewsTwo } from "../data"
import Slider from "react-slick"

const AboutProduct: FC<RouterProps> = ({ router }) => {
    const [value, setValue] = useState('');
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        className: "overflow-hidden",
        containerClassName: "w-full max-w-full overflow-hidden",
    };
    return (
        <section className="relative mt-20">
            <div className="relative lg:flex items-center justify-between">
                <div className="lg:w-1/2">
                    <Image
                        src={"/images/Vape-Pen 1.png"}
                        alt="vape-pen"
                        className=""
                        width={775}
                        height={580}
                    />
                </div>
                <div className="lg:w-[45%] w-[90%] mx-auto  text-center lg:text-start lg:mx-16 md:mx-6">
                    <div className="font-bold text-[36px] text-[#12305B]">About Product</div>
                    <div className="text-[#21384299] pt-6 lg:w-[70%]">Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.</div>
                    <div className=" text-[#4D533C] italic mt-4">
                        😊  Promotes calm and relaxation. <br />
                        💤  Inhalation allows for a rapid effect. <br />
                        ✅  100% drug-free, plant-based ingredients. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3rd-party lab tested.
                    </div>
                    <div>
                        <div className="flex gap-10 mt-4 justify-center lg:justify-normal items-center">
                            <div>
                                <div>Price</div>
                                <div className="font-semibold mt-2">USD 50</div>
                            </div>
                            <div>
                                <div>Unit</div>
                                <input type="number" placeholder="0" className="number-input font-semibold mt-1 border rounded-[5px] border-[#12305B] h-[33px] ps-5 py-5 pe-3 min-w-[70px]"
                                onChange={(e)=>{  setValue(e.target.value)}}
                                style={{
                                    width: `${Math.max(value.length, 1) + 5}ch`
                                  }}/>
                            </div>
                        </div>
                        <button onClick={() => { router.push("/shop") }} className="bg-[#FC5959] rounded-md font-semibold text-center text-white mt-8 py-4 w-[40%] text-sm font-opensans">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-[#21384218] me-36 relative mt-16 border-5 " />
            <div className="ps-36 py-24">
                <Slider  {...settings}>
                    {customerReviewsTwo.map((customerReview, index) => (
                        <div key={index} className="bg-[#FBF9F2] text-[#4D533C] p-8 h-[200px]">
                            <div className="leading-6 italic">{customerReview.review}</div>
                            <div className="font-bold mt-5 mb-2">{customerReview.name}</div>
                            <Image
                                src={"/images/review-stars.png"}
                                alt="review stars"
                                width={100}
                                height={12}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default AboutProduct
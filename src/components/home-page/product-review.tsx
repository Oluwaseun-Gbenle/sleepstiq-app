import React from "react"
import Slider from "react-slick"
import { productReviews } from "../data";
import Image from "next/image";

const ProductReview = () => {
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
        pauseOnHover: false,
        centerMode: false,
        responsive: [
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
        <div className="relative">
            <div className="text-[36px] font-bold text-[#4D533C] mb-9 p-6 sm:ps-16 lg:ps-36 text-center lg:text-start">Product Reviews</div>
            <div className="p-6 sm:ps-16 lg:ps-36 -mb-48  product-custom-slider">
                <Slider  {...settings}>
                    {productReviews.map((productReview, index) => (
                        <div key={index} className="bg-white text-[#4D533C]  h-[460px] rounded-lg">
                            <div className="flex justify-center">
                            <Image
                                src={productReview.imageSrc}
                                alt="vape pen"
                                width={306}
                                height={210}
                            />
                            </div>
                            <div className="leading-6 italic mt-6 px-8 ">{productReview.review}</div>
                            <div className="font-bold mt-5 mb-2 px-8">{productReview.name}</div>
                            <Image
                                src={"/images/review-stars.png"}
                                alt="review stars"
                                className="px-8"
                                width={180}
                                height={22}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ProductReview
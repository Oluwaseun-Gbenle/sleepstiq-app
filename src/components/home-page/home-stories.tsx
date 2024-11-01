import { RouterProps } from "@/interfaces/RouterInterface"
import Image from "next/image"
import React, { FC } from "react"
import { customerReviewsOne, customerReviewsTwo } from "../data"
import Slider from "react-slick"

const HomeStories:FC<RouterProps> = ({router}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  const settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable:true,
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
    <section>
    <div className="bg-white px-6 sm:px-16 lg:px-36 pt-48 pb-40">
      <div className="lg:flex justify-between">
        <div className="lg:w-1/2 text-center lg:text-start">
          <div className="text-[#12305B]">
            <div className="text-sm">Our Amazing Story</div>
            <div className="font-bold text-[36px] pt-7 pb-12">
              <span className="relative -top-1">10k+Happ</span>
              <span className="bg-[#FFD7231A] pt-0 pb-3 pe-2">
                <span className="relative -top-1">y Customers</span>
              </span>
            </div>
            <div className="text-[#21384299] lg:w-[80%]">There&apos;s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.</div>
            <div onClick={() => { router.push("/about") }} className="font-bold pt-6 lg:w-fit">
              <div className="flex items-center justify-center lg:justify-normal">
                <Image
                  src={"/svg/arrowleft.svg"}
                  alt="arrowleft"
                  className="relative -bottom-1"
                  width={8}
                  height={8}
                />
                <div className="border-b border-b-[#12305B] ps-2">
                  <span className="relative -bottom-1">More know About us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <div className="bg-[#FBF9F2] w-[85%] px-10 py-14" style={{
            boxShadow: "0px 100px 100px 0px rgba(0, 0, 0, 0.15)"
          }}>
           <Slider {...settings}>
              {customerReviewsOne.map((customerReview, index) => (
              <div key={index}>
                <div className="italic text-[#4D533C] text-2xl leading-[40px]">{customerReview.review}</div>
                <div className="flex mt-24 gap-8 items-center">
                  <Image
                    src={"/images/happy-man-face.png"}
                    alt="profile-image"
                    className="rounded-full"
                    width={84}
                    height={84}
                  />
                  <div>
                    <div className="text-[#4D533C] text-[22px] leading-[33px] font-bold">{customerReview.name}</div>
                    <div className="text-[#152934]">{customerReview.details}</div>
                  </div>
                </div>
              </div>
              ))}
        </Slider>
          </div>
        </div>
      </div>
    </div>
    <div className="px-6 sm:ps-16 lg:ps-36 pb-16 custom-slider ">
    <Slider  {...settings2}>
    {customerReviewsTwo.map((customerReview, index) => (
      <div  key={index} className="bg-[#FBF9F2] text-[#4D533C] p-8 h-[200px]">
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
    <hr className="border-[#21384218] me-36 relative bottom-28"/>
    </div>
    </section>
  )
}

export default HomeStories
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { arrowLeft, arrowRight } from '../../utils/exportImages'

import { testimonials } from "../../utils/testimonials";
import { TestimonialCard } from "./TestmonialCard";

export function Testimonials() {
    return (
        <section className="bg-secondary-700 py-[120px] max-w-screen-xl w-full mx-auto px-[15px] relative">
            <div className="absolute top-0 rounded-full left-0 w-[400px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
            <div className="absolute bottom-0 rounded-full right-0 w-[500px] h-[400px] bg-primary opacity-5 blur-[100px]"></div>
            <div className="mx-auto  max-w-[720px] w-full">
                <h5 className="text-primary-500 text-[20px] font-semibold mb-2 text-center">
                    WHAT THEY SAY
                </h5>
                <h4 className="font-bold text-[40px] text-primary text-center mb-3">
                    Our User Kind Words
                </h4>
                <p className="text-secondary-300 text-[20px] mb-[39px] text-center">
                    Here are some testimonials from our user after using Spend.In to
                    manage their business expenses.
                </p>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
            >
                {testimonials?.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard user={testimonial} />
                    </SwiperSlide>
                ))}
                <div className="flex gap-[20px] max-w-[122px] w-full mx-auto h-[50px] items-center justify-between mt-[64px]">
                    <div className="swiper-button-prev static m-0 after:content-[''] rounded-full bg-primary-500 w-[50px] h-[50px]">
                        <img src={arrowLeft} alt="left arrow" />
                    </div>
                    <div className="swiper-button-next static m-0 after:content-[''] rounded-full bg-primary-500 w-[50px] h-[50px]">
                        <img src={arrowRight} alt="right arrow" />
                    </div>
                </div>
            </Swiper>
        </section>
    )
}
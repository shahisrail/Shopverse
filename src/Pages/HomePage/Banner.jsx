import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-slate-800 ">
          <div className="slide-container max-w-[1200px] mx-auto gap-5">
            <div className="text-content">
              <h1>Nature Scene 1</h1>
              <p>This is a description of the first nature scene.</p>
            </div>
            <div className="image-content">
              <img
                className="pt-28 pb-12"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="Nature 1"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-red-500">
          <div className="slide-container max-w-[1200px] mx-auto gap-5">
            <div className="text-content">
              <h1>Nature Scene 1</h1>
              <p>This is a description of the first nature scene.</p>
            </div>
            <div className="image-content">
              <img
                className="pt-28 pb-12"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="Nature 1"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-gray-100 ">
          <div className="slide-container max-w-[1200px] mx-auto gap-5">
            <div className="text-content">
              <h1>Nature Scene 1</h1>
              <p>This is a description of the first nature scene.</p>
            </div>
            <div className="image-content ">
              <img
                className="pt-28 pb-12"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="Nature 1"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

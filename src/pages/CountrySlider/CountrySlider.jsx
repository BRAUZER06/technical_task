import React from "react";
import "./CountrySlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CountrySlider = () => {
  return (
    <div className="CountrySlider">
      <h1>Сент_Винсент и Гренадины</h1>
      <Swiper
        slidesPerView={3.7}
        spaceBetween={150}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Испания</SwiperSlide>
        <SwiperSlide>Франция</SwiperSlide>
        <SwiperSlide>Сент Винсент и Гренадины</SwiperSlide>
        <SwiperSlide>Португалия</SwiperSlide>
        <SwiperSlide>Саудовская Аравия</SwiperSlide>
      </Swiper>
      <div className="CountrySlider_hr"></div>
      <h2>Мир Breezzor огромный, исследуй его!</h2>
    </div>
  );
};

export default CountrySlider;

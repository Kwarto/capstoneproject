import React from 'react'
import { HeaderSliderWrapper, SliderItem, SliderText, SliderImg } from './HeaderSLiderElement'
import SlidImg1 from '../../images/nine.jpg'
import SlidImg2 from '../../images/image-s4.png'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
function HeaderSlider() {
  return (
     <>
      <HeaderSliderWrapper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className='swiper-slide'>
          <SliderItem>
            <SliderText>
              Helping you find right homes at right prices.
            </SliderText>
          </SliderItem>
          <SliderImg>
            <img src={SlidImg1} alt="" />
          </SliderImg>
        </SwiperSlide>
        <SwiperSlide className='container'>
          <SliderItem>
            <SliderText>
              Helping you find right homes at right prices.
            </SliderText>
          </SliderItem>
          <SliderImg>
            <img src={SlidImg2} alt="" />
          </SliderImg>
        </SwiperSlide>
        <SwiperSlide className='container'>
          <SliderItem>
            <SliderText>
              Helping you find right homes at right prices.
            </SliderText>
          </SliderItem>
          <SliderImg>
            <img src={SlidImg1} alt="" />
          </SliderImg>
        </SwiperSlide>
      </Swiper>
      </HeaderSliderWrapper>
     </>
  )
}

export default HeaderSlider
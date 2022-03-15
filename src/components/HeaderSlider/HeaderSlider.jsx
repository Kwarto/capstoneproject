import React from 'react'
import { HeaderSliderWrapper, SliderMainWrapper, SliderItem, SliderText, SliderImg } from './HeaderSLiderElement'
import SlidImg1 from '../../images/nine.jpg'
function HeaderSlider() {
  return (
     <>
      <HeaderSliderWrapper>
        <SliderMainWrapper className='container'>
          <SliderItem>
            <SliderText>
              Helping you find right homes at right prices.
            </SliderText>
          </SliderItem>
          <SliderImg>
            <img src={SlidImg1} alt="" />
          </SliderImg>
        </SliderMainWrapper>
      </HeaderSliderWrapper>
     </>
  )
}

export default HeaderSlider
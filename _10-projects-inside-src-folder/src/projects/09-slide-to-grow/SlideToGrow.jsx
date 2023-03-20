import React, { useState } from 'react';
import SliderComp from './SliderComp';
import Title from '../components/Title';

export default function SlideToGrow() {
  const [slideValue, setSlideValue] = useState(0);
  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };
  let bgColor;
  let textColor;
  if (slideValue < 25) {
    bgColor = 'red';
    textColor = 'white';
  } else if (slideValue < 50) {
    bgColor = 'blue';
    textColor = 'white';
  } else if (slideValue < 75) {
    bgColor = 'green';
    textColor = 'white';
  } else {
    bgColor = 'orange';
  }
  return (
    <div className=" container text-center">
      <Title text={'Slide to Grow'} />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
}

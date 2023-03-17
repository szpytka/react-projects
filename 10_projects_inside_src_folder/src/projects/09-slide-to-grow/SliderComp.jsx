import React from 'react';

export default function SliderComp({
  setValue,
  handleInput,
  bgColor,
  textColor,
}) {
  const sliderStyle = {
    appearance: 'none',
    width: '80%',
    height: 10,
    background: !bgColor ? 'lightgray' : bgColor,
    cursor: 'pointer',
    opacity: 0.8,
    borderRadius: '100px',
  };
  return (
    <div className="d-flex flex-column">
      <input
        type="range"
        min={0}
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        style={{
          color: !textColor ? 'black' : textColor,
          background: !bgColor ? 'lightgrey' : bgColor,
          height: `calc(30px + ${setValue * 2}px)`,
          width: `calc(30px + ${setValue * 2}px)`,
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          marginTop: '200px',
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
}

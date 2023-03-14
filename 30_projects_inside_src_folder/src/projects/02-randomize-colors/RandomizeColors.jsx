import React, { memo } from 'react';
import Title from '../components/Title';

export default memo(function RandomizeColors() {
  const handleClick = (e) => {
    let body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  return (
    <h1 className="container m-auto text-center">
      <Title text={'Randomize Colors'} classes={'mb-4'} />
      <button className="btn btn-danger" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-success" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-warning" onClick={handleClick}>
        Click Me
      </button>
    </h1>
  );
});

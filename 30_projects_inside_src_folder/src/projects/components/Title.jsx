import React from 'react';

export default function Title({ classes, text }) {
  return (
    <h1 className={!classes ? 'title text-center' : classes}>
      {!text ? 'Title' : text}
    </h1>
  );
}

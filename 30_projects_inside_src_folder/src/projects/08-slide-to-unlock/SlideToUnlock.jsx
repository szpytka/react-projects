import React, { useState, useEffect } from 'react';
import LockSlider from './LockSlider';
import { AiFillUnlock } from 'react-icons/ai';

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: 'Unlock Screen',
    uiColor: '#eee',
    uiBg: `url("https://images.unsplash.com/photo-1678737171914-da88eb1fb7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") center/cover no-repeat`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);
  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
  };

  const lockScreen = () => {
    setShowLockSlider(true);
    setUiProps({
      uiText: 'Unlock Screen',
      uiColor: '#eee',
      uiBg: `url("https://images.unsplash.com/photo-1678737171914-da88eb1fb7fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") center/cover no-repeat`,
    });
    setLockSliderValue(0);
  };

  useEffect(() => {
    document.body.style.background = '#999';
    if (lockSliderValue === '100') {
      setShowLockSlider(false);
      setUiProps({
        uiText: 'Lock Screen',
        uiColor: '#fff',
        uiBg: `url("https://images.unsplash.com/photo-1678737173300-9132f44a5029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=693&q=80") center/cover no-repeat`,
      });
      setLockSliderValue(0);
    }
  }, [lockSliderValue]);

  return (
    <div
      className="container text-center d-flex flex-column border-20 shadow-md"
      style={{
        height: '70vh',
        marginTop: '15vh',
        width: 340,
        border: '4px solid #000',
        background: uiProps.uiBg,
      }}
    >
      <h1
        className="title"
        style={{ color: uiProps.uiColor, fontSize: '3rem' }}
      >
        {' '}
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={'250px'}
          handleInput={handleLockSliderInput}
          value={lockSliderValue}
        />
      ) : (
        <AiFillUnlock className="unlockIcon" onClick={lockScreen} />
      )}
    </div>
  );
}

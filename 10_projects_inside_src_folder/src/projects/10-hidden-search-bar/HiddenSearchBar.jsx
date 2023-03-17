import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
export default function HiddenSearchBar() {
  const [uiProps, setUiProps] = useState({
    bg: 'purple',
    shadow: '',
    transition: 'all 0.3s ease',
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
  });
  let body = document.body.style;
  let inputStyle = {
    margin: '10vh 25vw',
    width: '50%',
    height: '30px',
    padding: '1rem',
    border: 'transparent',
    outline: 'none',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '50px',
    fontSzie: '1.3rem',
    color: '#eee',
    boxShadow: '0px 0px 60px -15px rgba(0,0,0,0.75)',
    opacity: uiProps.opacity,
    transition: 'all 0.3s ease',
  };
  let bsSearchStyle = {
    color: '#fff',
    fontSzie: 50,
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20,
  };
  const inputEl = useRef(null);
  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transition;
      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );
  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchBar: true,
      showSearchIcon: false,
    });
  };
  const handleSearchFocus = () => {
    setUiProps({
      shadow: 'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)',
    });
  };
  const handleSearchBlur = () => {
    setUiProps({
      shadow: 'none',
      opacity: 0,
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: '100vh' }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search..."
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}

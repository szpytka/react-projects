import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import { ThemeContext, themes } from './context/theme-context';

export default function DarkMode() {
  const [theme, setTheme] = useState(themes.dark);
  function changeTheme() {
    if (theme === 'Light') {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  }
  useEffect(() => {
    let docBody = document.body;
    // eslint-disable-next-line default-case
    switch (theme) {
      case themes.light:
        docBody.classList.remove('bg-dark');
        docBody.classList.remove('text-light');
        docBody.classList.add('bg-light');
        docBody.classList.add('text-dark');
        break;
      // eslint-disable-next-line no-duplicate-case
      case themes.dark:
        docBody.classList.remove('bg-light');
        docBody.classList.remove('text-dark');
        docBody.classList.add('bg-dark');
        docBody.classList.add('text-light');
        break;
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}

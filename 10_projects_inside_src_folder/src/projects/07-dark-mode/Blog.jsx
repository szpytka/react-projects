import React, { useContext } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { ThemeContext } from './context/theme-context';

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <div className="container p-1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{ position: 'absolute', top: 10, right: 10 }}>
        <Button
          text={theme === 'Dark' ? 'Light' : 'Dark'}
          btnClass={theme === 'Dark' && 'btn-light'}
          onClick={changeTheme}
        />
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint delectus
        quasi eum quod natus voluptatibus similique, ipsam aliquam fugiat,
        consequuntur enim optio eos autem magni at laborum atque adipisci
        recusandae.
      </p>
    </div>
  );
}

import React from 'react';
import styles from './Button.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ text, to }) => {
  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Попереджуємо стандартну обробку подій
    navigate(to); // Навігуємо до вказаної адреси
    window.scrollTo(0, 0); // Скидання прокрутки до верху сторінки
  };

  return (
    <Link
      to={to}
      className={`${styles.button} ${styles.hero__button} `}
      onClick={handleClick}
    >
      <span className={styles.button__ellipse_left}></span>
      {text}
      <span className={styles.button__ellipse_right}></span>
    </Link>
  );
};

export default Button;

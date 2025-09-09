import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // не виконуємо дефолтну дію
    navigate(to); // переходимо за вказаною адресою
    window.scrollTo(0, 0); // прокрутка вгору
  };

  return (
    <Link
      to={to}
      className={`${styles.button} ${styles.hero__button}`}
      onClick={handleClick}
    >
      <span className={styles.button__ellipse_left}></span>
      {text}
      <span className={styles.button__ellipse_right}></span>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;

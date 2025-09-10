import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.scss';
import aeLogo from '../assets/svg/aetlas.svg';
import btLogo from '../assets/svg/bt.svg';
import czLogo from '../assets/svg/cz.svg';
import easLogo from '../assets/svg/eas.svg';
import nlLogo from '../assets/svg/nl.svg';
import supLogo from '../assets/svg/sup.svg';
import vrLogo from '../assets/svg/vr.svg';
import pdf from '../../public/pdf/CV_Yullia-Shevchenko_2025.pdf';
import PropTypes from 'prop-types';

const Button = ({ text, href, target }) => {
  if (href) {
    return (
      <a
        className={styles.button}
        href={href}
        target={target}
        rel="noopener noreferrer"
      >
        <span className={styles.button__ellipse_left}></span>
        {text}
        <span className={styles.button__ellipse_right}></span>
      </a>
    );
  }
  return null;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={`${styles.about} ${styles.container}`}>
          <h2 className={`${styles.title} ${styles.about__title}`}>About</h2>
          <div className={styles.about__content}>
            <div className={styles.about__left}>
              <h2 className={styles.about__name}>I’m Yuliia Shevchenko</h2>
              <p className={`${styles.about__text} ${styles.text}`}>
                I’m Yuliia Shevchenko, a UI/UX Designer obsessed with crafting
                bold, intuitive, and unforgettable digital experiences. I don’t
                just make things look good—I make them work flawlessly, so users
                never have to think twice. Design, for me, is part creativity,
                part strategy, and part rebellion against the ordinary. I thrive
                on turning messy ideas into clean, functional products that feel
                effortless and fresh.
              </p>
              <p className={`${styles.about__text} ${styles.text}`}>
                From sleek mobile apps to complex platforms, I build experiences
                that grab attention and keep people coming back. I believe every
                click, swipe, and tap should spark a little excitement. If
                you’re looking for design that dares to stand out—I’m already
                one step ahead.
              </p>
              <Button text="View CV" href={pdf} target="_blank" />
            </div>
            <div className={styles.about__right}>
              <img src={btLogo} alt="BlockTrust logo" />
              <img src={easLogo} alt="European Apps Solutions logo" />
              <img src={supLogo} alt="Support Your App logo" />
              <img src={czLogo} alt="Colt CZ Group logo" />
              <img src={nlLogo} alt="No Limits logo" />
              <img src={vrLogo} alt="Village Key logo" />
              <img src={aeLogo} alt="Aetlas logo" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

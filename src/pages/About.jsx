import React from 'react';
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
import pdf from '../../public/pdf/CV_Yuliia.pdf';

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
                I'm a passionate UX/UI designer with over 3 years of expertise
                in crafting digital experiences that leave a mark. Design isn't
                just a profession to me, it's my way of bringing creativity and
                functionality together to have an impact. I do it all : mobile
                apps, desktop apps, web apps, enterprise software, you name it.
                My approach is creating immaculate and modern designs of the
                highest standard. I work well with developers and create designs
                that are user-friendly and easy to build. I provide smart
                products, web and mobile solutions. My human-centered design
                approach lets me empathize with your customers, identify their
                pressure points, and create solutions that enhance their
                experience with your brand or product.
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

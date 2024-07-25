// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkItem from '../components/WorkItem';
import styles from './Portfolio.module.scss';
import vrImage from '../assets/images/vr.png';
import nlImage from '../assets/images/nl.png';
import carImage from '../assets/images/car.png';
import czImage from '../assets/images/cz.png';
import aiImage from '../assets/images/ai.png';
import diImage from '../assets/images/di.png';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={`${styles.works} ${styles.container}`}>
          <h2 className={`${styles.title} ${styles.works__title}`}>Works</h2>
          <div className={styles.works__grid}>
            <div className={styles.works__row}>
              <WorkItem
                image={vrImage}
                title="Village Key"
                description="Brand Identity, Web Platform"
                slug="village"
              />
              <WorkItem
                image={nlImage}
                title="No Limits"
                description="Brand Identity, Website"
                slug="nolimits"
              />
            </div>
            <div className={styles.works__row}>
              <WorkItem
                image={carImage}
                title="Digital Smart Car Key"
                description="Mobile App"
                slug="carkey"
              />

              <WorkItem
                image={czImage}
                title="Colt CZ Group Portal"
                description="Auction Platform"
                slug="cz"
              />
            </div>
            <div className={styles.works__row}>
              <WorkItem
                image={aiImage}
                title="AI Headshot Generator"
                description="Mobile App"
                slug="photo"
              />
              <WorkItem
                image={diImage}
                title="Dynamic Island"
                description="Mobile App"
                slug="dinamicisland"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

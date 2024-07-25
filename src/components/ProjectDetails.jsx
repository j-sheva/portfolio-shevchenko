import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({
  title,
  introduction,
  request,
  solution,
  text,
  link,
  image1,
  image2,
}) => {
  return (
    <div>
      <Header />
      <main className={styles.project}>
        <div className={styles.project__heading}>
          <h2 className={styles.project__title}>{title}</h2>
          <div>
            <h3 className={styles.project__subtitle}>Introduction</h3>
            <p className={styles.project__copy}>{introduction}</p>

            <a target="_blank" rel="noopener noreferrer" href={link}>
              <button className={styles.button}>
                <span className={styles.button__ellipse_left}></span>
                {text}
                <span className={styles.button__ellipse_right}></span>
              </button>
            </a>
          </div>
        </div>
        <img src={image1} alt={`${title} screenshot`} />
        <div className={styles.project__heading}>
          <div>
            <h3 className={styles.project__subtitle}>Request</h3>
            <p className={styles.project__copy}>{request}</p>
          </div>
          <div>
            <h3 className={styles.project__subtitle}>Solution</h3>
            <p className={styles.project__copy}>{solution}</p>
          </div>
        </div>
        <img src={image2} alt={`${title} screenshot`} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;

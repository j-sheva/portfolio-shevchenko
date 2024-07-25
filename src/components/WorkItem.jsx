import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WorkItem.module.scss';

const WorkItem = ({ image, title, description, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${slug}`);
    window.scrollTo(0, 0); // Скролить сторінку до початку після навігації
  };

  return (
    <div className={styles.works__item} onClick={handleClick}>
      <img className={styles.works__img} src={image} alt={`${title} preview`} />
      <div className={styles.works__copy}>
        <h3 className={styles.works__title}>{title}</h3>
        <p className={styles.works__description}>{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;

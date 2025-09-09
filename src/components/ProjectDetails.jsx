import PropTypes from 'prop-types';
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

            {link && (
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <button className={styles.button}>
                  <span className={styles.button__ellipse_left}></span>
                  {text}
                  <span className={styles.button__ellipse_right}></span>
                </button>
              </a>
            )}
          </div>
        </div>

        {image1 && <img src={image1} alt={`${title} screenshot`} />}

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

        {image2 && <img src={image2} alt={`${title} screenshot`} />}
      </main>
      <Footer />
    </div>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
};

export default ProjectDetails;

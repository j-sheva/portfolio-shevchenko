import Header from '../components/Header';
import styles from './Home.module.scss';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__banner}>
            <div className={`${styles.hero__layer} ${styles.hero__background}`}>
              <h2 className={styles.hero__first_text}>Shevchenko</h2>
            </div>
            <div className={`${styles.hero__layer} ${styles.hero__image}`}>
              <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>
                  UX/UI Designer turning visions into user-centric art.
                </h1>
                <p className={styles.hero__text}>
                  Welcome to my portfolio, where you’ll find engaging design
                  experiences and innovative solutions. Discover inviting
                  visuals and impressive projects as we journey through
                  creativity and professionalism together.
                </p>
                <Button text="View Works" to="/portfolio" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

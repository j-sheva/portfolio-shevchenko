import Header from "../components/Header";
import Footer from "../components/Footer";
import collage from "../assets/images/collage.png";
import fig from "../assets/svg/fig.svg";
import vs from "../assets/svg/vs.svg";
import pho from "../assets/svg/pho.svg";
import lot from "../assets/svg/lot.svg";
import ill from "../assets/svg/ill.svg";
import gpt from "../assets/svg/gpt.svg";
import gem from "../assets/svg/gem.svg";
import free from "../assets/svg/free.svg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.about}>
          <h2>About</h2>
          <div className={styles.about__block}>
            <img className={styles.about__left} src={collage} alt="collage" />
            <div className={styles.about__right}>
              <h3>Yuliia Shevchenko</h3>
              <div className={styles.about__bottom}>
                <div className={styles.about__copy_item}>
                  <p className={styles.about__subtitle}>01 The Approach</p>
                  <div className={styles.about__copy}>
                    <p className={styles.about__text}>
                      I’m a UX/UI Designer with 4+ years of experience designing
                      mobile and web products. I focus on simplifying complex
                      user flows, improving usability, and creating interfaces
                      that are clear, intuitive, and easy to navigate.
                    </p>
                    <p className={styles.about__text}>
                      I’ve worked on a range of products, often dealing with
                      complex structures and user scenarios. I enjoy turning
                      that complexity into simple, structured experiences that
                      feel natural to use.
                    </p>
                    <p className={styles.about__text}>
                      I also have experience working with design systems and
                      collaborating closely with developers, which helps me
                      create scalable and technically feasible solutions.
                      Currently, I’m focused on growing as a product designer
                      and building more impactful, user-centered products.
                    </p>
                  </div>
                </div>
                <div className={styles.about__copy_item}>
                  <p className={styles.about__subtitle}>02 Beyond design</p>
                  <div className={styles.about__copy}>
                    <p className={styles.about__text}>
                      Outside of work, I’m a very visual and hands-on person. I
                      enjoy creating not only digital products but also working
                      with physical things — especially customizing and
                      designing clothing.
                    </p>
                    <p className={styles.about__text}>
                      I also love traveling and exploring different cultures —
                      I’ve visited 36 countries so far, and it continues to
                      shape how I see people, behavior, and design.
                    </p>
                    <p className={styles.about__text}>
                      For me, design isn’t just a job — it’s a way of thinking
                      and a way of seeing the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.path}>
          <h3>PATH</h3>
          <div className={styles.path__list}>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2025 – 2026 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — Cobalt Creative Agency
                </p>
                <p className={styles.about__text}>
                  Designing web experiences and improving user flows for digital
                  products.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024 – 2025 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — Evadav Traffic Group
                </p>
                <p className={styles.about__text}>
                  Worked on mobile applications, improving user flows and
                  reducing friction, contributing to better engagement and
                  conversion.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2024 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX designer / Front-End — Startups
                </p>
                <p className={styles.about__text}>
                  Designed and built interfaces for early-stage products,
                  focusing on usability and structure.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2022 – 2024 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>UX Designer — BlockTrust</p>
                <p className={styles.about__text}>
                  Designed Web3 dashboards and worked on design systems for
                  complex products.
                </p>
              </div>
            </div>
            <div className={styles.path__item}>
              <p className={styles.path__year}>2021 – 2022 </p>
              <div className={styles.path__copy}>
                <p className={styles.path__title}>
                  UX/UI Designer — SupportYourApp
                </p>
                <p className={styles.about__text}>
                  Designed and improved internal web tools, worked on brand
                  identity, and marketing materials.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.path}>
          <h3>Toolkit</h3>
          <div className={styles.toolkit}>
            <div className={styles.toolkit__item}>
              <img src={fig} alt="Figma icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Figma</p>
                <p className={styles.about__text}>Design</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={free} alt="Freepik icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Freepik AI</p>
                <p className={styles.about__text}>Images</p>
              </div>
            </div>{" "}
            <div className={styles.toolkit__item}>
              <img src={gpt} alt="Chat GPT icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Chat GPT</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>{" "}
            <div className={styles.toolkit__item}>
              <img src={gem} alt="Gemini icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Gemini</p>
                <p className={styles.about__text}>General</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={ill} alt="Illustrator icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Illustrator</p>
                <p className={styles.about__text}>Vectors</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={pho} alt="Photoshop icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Photoshop</p>
                <p className={styles.about__text}>Photo editing</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={lot} alt="Lottie Files icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>Lottie Files</p>
                <p className={styles.about__text}>Animations</p>
              </div>
            </div>
            <div className={styles.toolkit__item}>
              <img src={vs} alt="Figma icon" />
              <div className={styles.toolkit__copy}>
                <p className={styles.path__year}>VS Code</p>
                <p className={styles.about__text}>Coding</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

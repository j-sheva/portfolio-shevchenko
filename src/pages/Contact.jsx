// import { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import maplibregl from 'maplibre-gl';
// import 'maplibre-gl/dist/maplibre-gl.css';

// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import styles from './Contact.module.scss';
// import ContactModal from '../components/ContactModal';
// import contactImage from '../assets/images/contact_img.png';

// const ButtonContact = ({ text, onClick }) => {
//   return (
//     <button onClick={onClick} className="button">
//       <span className={styles.button__ellipse_left}></span>
//       {text}
//       <span className={styles.button__ellipse_right}></span>
//     </button>
//   );
// };

// ButtonContact.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// const Contact = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     // не ініціалізуємо, поки немає контейнера
//     if (!mapContainer.current || map.current) return;

//     const apiKey = 'T944ELpNw58khu4IAqay';

//     map.current = new maplibregl.Map({
//       container: mapContainer.current,
//       style: `https://api.maptiler.com/maps/275af675-6d02-415c-b353-ca65bfc9faed/style.json?key=${apiKey}`,
//       center: [30.5238, 50.4547],
//       zoom: 11,
//     });

//     map.current.addControl(new maplibregl.NavigationControl());

//     const markerEl = document.createElement('div');
//     markerEl.className = styles['custom-marker'];

//     new maplibregl.Marker(markerEl)
//       .setLngLat([30.5238, 50.4547])
//       .addTo(map.current);

//     return () => {
//       // чисто прибираємо мапу одразу
//       if (map.current) {
//         map.current.remove();
//         map.current = null;
//       }
//     };
//   }, []);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div>
//       <Header />

//       <main>
//         <section className={`${styles.contact} ${styles.container}`}>
//           <div className={styles.contact__left}>
//             <h2 className={`${styles.title} ${styles.contact__title}`}>
//               Contact
//             </h2>
//             <ul className={styles.contact__list}>
//               <li className={styles.contact__item}>
//                 <a
//                   href="https://www.linkedin.com/in/uliia-shevchenko/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//               <li className={styles.contact__item}>
//                 <a
//                   href="https://www.behance.net/yuliiashevche4"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Behance
//                 </a>
//               </li>
//               <li className={styles.contact__item}>
//                 <a
//                   href="mailto:work.uliia@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   work.uliia@gmail.com
//                 </a>
//               </li>
//             </ul>
//             <ButtonContact text="Contact" onClick={openModal} />
//             <ContactModal isOpen={isModalOpen} onClose={closeModal} />
//           </div>

//           <div className={styles.contact__right}>
//             <img src={contactImage} alt="plane window" />
//             <div className={styles.contact__map} ref={mapContainer}></div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Contact.module.scss';
import contactImage from '../assets/images/contact_img.png';

const Contact = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const apiKey = 'T944ELpNw58khu4IAqay';

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/275af675-6d02-415c-b353-ca65bfc9faed/style.json?key=${apiKey}`,
      center: [2.1734, 41.3751],
      zoom: 12, // трішки збільшила для міста
    });

    map.current.addControl(new maplibregl.NavigationControl());

    const markerEl = document.createElement('div');
    markerEl.className = styles['custom-marker'];

    new maplibregl.Marker(markerEl)
      .setLngLat([2.1734, 41.3751])
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div>
      <Header />

      <main>
        <section className={`${styles.contact} ${styles.container}`}>
          <div className={styles.contact__left}>
            <h2 className={`${styles.title} ${styles.contact__title}`}>
              Contact
            </h2>
            <ul className={styles.contact__list}>
              <li className={styles.contact__item}>
                <a
                  href="https://www.linkedin.com/in/uliia-shevchenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className={styles.contact__item}>
                <a
                  href="https://www.behance.net/yuliiashevche4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </li>
              <li className={styles.contact__item}>
                <a href="mailto:work.uliia@gmail.com">work.uliia@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className={styles.contact__right}>
            <img src={contactImage} alt="plane window" />
            <div className={styles.contact__map} ref={mapContainer}></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

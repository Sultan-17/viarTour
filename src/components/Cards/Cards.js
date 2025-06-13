import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cards.module.css';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import image1 from '../../assets/one.png';
import image2 from '../../assets/two.png'; 
import image3 from '../../assets/three.png';
import image4 from '../../assets/four.png';
import image5 from '../../assets/five.png';
import image6 from '../../assets/six.png';
import image7 from '../../assets/seven.png';
import image8 from '../../assets/eyte.png';
import image9 from '../../assets/nine.png';
import image10 from '../../assets/ten.png';
import image11 from '../../assets/eleven.png';
import image12 from '../../assets/twelve.png';
import image13 from '../../assets/thirteen.png';
import image14 from '../../assets/fourteen.png';

const Another = ({ tour }) => {

    const [ t ] = useTranslation();

    const navigate = useNavigate(); 

    const handleBrowseAllClick = () => {
      window.scrollTo(0,0);
      navigate('/contact'); 
    };
  return (  
    <div className={styles.card}>
      <img src={tour.image} alt={tour.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{tour.title}</h2>
        <p className={styles.description}>{tour.description}</p>
        <div className={styles.price}>{tour.price}</div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FaCalendarAlt />
            <span>{t("cards.date")}</span>
          </div>
          <div className={styles.icon}>
            <FaUser />
            <span> {t("cards.guests")}</span>
          </div>
        </div>
        <button className={styles.bookBtn} onClick={handleBrowseAllClick}>{t("cards.bookButton")}</button>
      </div>
    </div>
  );
};
 
const Cards = () => {

  const [ t ] = useTranslation();

  const tours = [
    { image: image1, title: t("cards.Maldives"), description: t("cards.baliDescription"), price: '757 $' },
    { image: image2, title: t("cards.Vietnam"), description: t("cards.parisDescription"), price: '610 $' },
    { image: image3, title: t("cards.Dubai"), description: t("cards.safariDescription"), price: '270 $' },
    { image: image4, title: t("cards.Egypt"), description: t("cards.tokyoDescription"), price: '450 $' },
    { image: image5, title: t("cards.Bali"), description: t("cards.kairDescription"), price: '1200 $' },
    { image: image6, title: t("cards.Jordan"), description: t("cards.dubaiDescription"), price: '600 $' },
    { image: image7, title: t("cards.Sri Lanka"), description: t("cards.romeDescription"), price: '850 $' },
    { image: image8, title: t("cards.Azerbaijan Baku"), description: t("cards.pekinDescription"), price: '566 $' },
    { image: image9, title: t("cards.Georgia Batumi"), description: t("cards.moscowDescription"), price: '533 $' },
    { image: image10, title: t("cards.Malaysia Kuala Lumpur"), description: t("cards.moscowDescription"), price: '1130 $' },
    { image: image11, title: t("cards.Zanzibar"), description: t("cards.moscowDescription"), price: '1485 $' },
    { image: image12, title: t("cards.Montenegro"), description: t("cards.moscowDescription"), price: '750 $' },
    { image: image13, title: t("cards.Türkiye"), description: t("cards.moscowDescription"), price: '650 $' },
    { image: image14, title: t("cards.Antalya"), description: t("cards.moscowDescription"), price: '1033 $' },
  ];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topItem}>
        {tours.map((tour, index) => (
          <Another key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Cards;




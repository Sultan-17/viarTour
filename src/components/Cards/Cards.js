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
            <span>15 {t("cards.guests")}</span>
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
    { image: image1, title: t("cards.bali"), description: t("cards.baliDescription"), price: '$1200' },
    { image: image2, title: t("cards.paris"), description: t("cards.parisDescription"), price: '$1500' },
    { image: image3, title: t("cards.safari"), description: t("cards.safariDescription"), price: '$1400' },
    { image: image4, title: t("cards.tokyo"), description: t("cards.tokyoDescription"), price: '$1400' },
    { image: image5, title: t("cards.kair"), description: t("cards.kairDescription"), price: '$1400' },
    { image: image6, title: t("cards.dubai"), description: t("cards.dubaiDescription"), price: '$1400' },
    { image: image7, title: t("cards.rome"), description: t("cards.romeDescription"), price: '$1400' },
    { image: image8, title: t("cards.pekin"), description: t("cards.pekinDescription"), price: '$1400' },
    { image: image9, title: t("cards.moscow"), description: t("cards.moscowDescription"), price: '$1400' },
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




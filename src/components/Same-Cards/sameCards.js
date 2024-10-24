import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './sameCards.module.css';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/kuala-tower.jpg';
import image2 from '../../assets/paris.jpg';
import image3 from '../../assets/colombia.avif';

const Cards = ({ tour }) => {

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
            <span>{t("sameCards.date")}</span>
          </div>
          <div className={styles.icon}>
            <FaUser />
            <span>{t("sameCards.guests")}</span>
          </div>
        </div>
        <button className={styles.bookBtn} onClick={handleBrowseAllClick}>{t("sameCards.bookButton")}</button>
      </div>
    </div>
  );
};
 
const SameCards = () => {

  const [ t ] = useTranslation();

  const tours = [
    { image: image1, title: t("sameCards.kualaLumpur"), description: t("sameCards.kualaDescription"), price: '$1200' },
    { image: image2, title: t("sameCards.paris"), description: t("sameCards.parisDescription"), price: '$1500' },
    { image: image3, title: t("sameCards.rome"), description: t("sameCards.romeDescription"), price: '$1400' },
  ];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topItem}>
        {tours.map((tour, index) => (
          <Cards key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};



export default SameCards;
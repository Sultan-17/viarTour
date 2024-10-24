import React, { useState, useEffect } from 'react';
import styles from './ReviewCarousel.module.css';
import { useTranslation } from 'react-i18next';

import reviewImage1 from '../../assets/woman.png';
import reviewImage2 from '../../assets/john doe.jpg';
import reviewImage3 from '../../assets/mike.jpg';
 


const ReviewCarousel = () => {

    const [ t ] = useTranslation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide('next');
        }, 5000); // 5 soniya

        return () => clearInterval(interval);
    }, []);

    const changeSlide = (direction) => {
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
            if (direction === 'next') {
                setCurrentIndex((prevIndex) =>
                    prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
                );
            } else if (direction === 'prev') {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
                );
            }
        }, 500); // Yarim soniya davomida yo'qolish animatsiyasi
    };

    const reviews = [  
        { 
            id: 1,
            image: reviewImage1,
            quote: t("reviewCarousel.quote1"),
            text: t("reviewCarousel.text1"),
            username: '@sophie_moore',
        },
        {
            id: 2, 
            image: reviewImage2,
            quote: t("reviewCarousel.quote2"),
            text: t("reviewCarousel.text2"),
            username: '@john_doe', 
        },
        {
            id: 3,
            image: reviewImage3,
            quote: t("reviewCarousel.quote3"), 
            text: t("reviewCarousel.text3"),
            username: '@mike_smith',
        },
    ];

    return (
        <div>
            <div className={styles.mainInfo}>
                <h1 className={styles.mainInfoHeader}>{t("reviewCarousel.infoTitle")}</h1>
                <p className={styles.mainInfoParagraph}>{t("reviewCarousel.infoParagraph")}</p>
                 <div className={styles.line}></div>
            </div>

            <div className={styles.carousel}>
            

                <div 
                    className={`${styles.reviewCard} ${isTransitioning ? styles.fadeOut : styles.fadeIn
                        }`}>
                            
                            <button className={styles.navButton} onClick={() => changeSlide('prev')}>
                                ◀
                            </button>

                     <img
                                src={reviews[currentIndex].image}
                                alt="review"
                                className={styles.reviewImage}
                    />
                    <div className={styles.reviewText}>
                            <p className={styles.quote}>{reviews[currentIndex].quote}</p>
                            <p>{reviews[currentIndex].text}</p>
                            <p className={styles.username}>{reviews[currentIndex].username}</p>
                    </div>
                        <button className={styles.navButton} onClick={() => changeSlide('next')}>
                            ▶
                        </button>
                </div>

               
            </div>
        </div>
    );
};

export default ReviewCarousel;
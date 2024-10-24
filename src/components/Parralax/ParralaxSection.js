import React, { useEffect } from 'react';
import styles from './ParralaxSection.module.css';
import { useNavigate } from 'react-router-dom';
import animationData from '../../assets/travelAnimation.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation } from 'react-i18next';

const ParallaxSection = () => { 
 
  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((parallax, index) => (
        <React.Fragment key={index}>
            {parallax}
            <br />
        </React.Fragment>
    ));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      // Escape special characters in the class name
      const escapedClassName = styles.parallaxSection.replace(/[^\w-]/g, '\\$&');
      const parallaxSection = document.querySelector(`.${escapedClassName}`);
 
      if (parallaxSection) { 
        parallaxSection.style.backgroundPositionY = `${-scrollPosition * 0.4}px`; 
      }
    
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navigate = useNavigate();

  const handleBrowseContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };  

    const handleBrowseTourClick = () => {
      navigate('/Tours');
      window.scrollTo(0, 0);
  };

  return (
    <section className={styles.parallaxSection}>
      <div className={styles.content}>
        <div className={styles.content_left}>
          <h1 className={styles.content_h1}>{renderTextWithLineBreaks(t("parallax.parallaxTitle"))}</h1>
          <div className={styles.btns}>
            <button className={styles.content_btn} onClick={handleBrowseContactClick}>
              {t("parallax.parallaxButton1")}
            </button>
            <div className={styles.content_btn_right} onClick={handleBrowseTourClick}>
              {t("parallax.parallaxButton2")}
            </div>
          </div>
        </div>
        <div className={styles.content_right}>
          <div className={styles.lottieContainer}>
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: 400, width: 400 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParallaxSection;

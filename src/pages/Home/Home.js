import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import styles from './Home.module.css'; 
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/maldiv.jpg';
import image2 from '../../assets/paris.jpg';
import image3 from '../../assets/rome.jpg';
import image4 from '../../assets/samarkand.jpg'; 
import image5 from '../../assets/turkey.jpg';
import image6 from '../../assets/samarkand2.jpg'

import ParallaxSection from '../../components/Parralax/ParralaxSection'; 
import Card from '../../components/Same-Cards/sameCards';
import ChooseUs from '../../components/Choose-us/choose-us';
import DifferentCard from '../../components/Different-card/different-.card';
import FAQ from '../../components/FAQ/Faq';
import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel';

const images = [image1, image2, image3, image4, image5, image6]; 

const Carousel = () => {

  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((homePage, index) => (
        <React.Fragment key={index}>
            {homePage}
            <br />
        </React.Fragment>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3500, 
    arrows: false, 
    pauseOnHover: false
  };
 
  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>

            <img src={image} alt={`slide ${index}`} />
            
            <div className={styles.overlay}>
              <h1>{renderTextWithLineBreaks(t("homePage.carouselTitle"))}</h1>
              <p>{renderTextWithLineBreaks(t("homePage.carouselParagraph"))}</p>
              <div className={styles.buttons}>
                <button>{t("homePage.exploreButton")}</button>
                <button className={styles.right_btn}>{t("homePage.aboutButton")}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Home = () => {

  const [ t ] =  useTranslation();

  return (
    <div className={styles.home}>
      <main className={styles.mainContent}>
        <Carousel />
        <div className={styles.mainInfo}>
            <h1 className={styles.mainInfoHeader}>{t("homePage.infoTitle")}</h1>
            <p className={styles.mainInfoParagraph}>{t("homePage.infoParagraph")}</p>
             <div className={styles.line}></div>
        </div>
        <Card/>
        <ChooseUs/>
        <DifferentCard/>
        {/* <InfoSection /> */}
        <ParallaxSection />
        <FAQ/>
        <ReviewCarousel/>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
};

export default Home;

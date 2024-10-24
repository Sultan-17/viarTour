import React from 'react';
import styles from './Tours.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

import image1 from '../../assets/maldiv.jpg';
import image2 from '../../assets/paris.jpg';
import image3 from '../../assets/rome.jpg';
import image4 from '../../assets/japan.jpg'; 
import image5 from '../../assets/kuala-tower.jpg';
import image6 from '../../assets/rectangle2.jpg';
import Parralax from '../../components/Parralax/ParralaxSection'
import Cards from '../../components/Cards/Cards';

const images = [image1, image2, image3, image4, image5, image6];

const Carousel = () => {

  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((tourPage, index) => (
        <React.Fragment key={index}>
            {tourPage}
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
              <h1>{renderTextWithLineBreaks(t("tourPage.carouselTitle"))}</h1>
              <p>{renderTextWithLineBreaks(t("tourPage.carouselParagraph"))}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Tours = () => {

  const [ t ] = useTranslation();

  return (
    <div className={styles.tours}>
      <Carousel />
      <div className={styles.Header}>
        <p>{t("tourPage.infoTitle")}</p>
        <div className={styles.Subtitle}>
          <p>{t("tourPage.infoSubTitle")}</p>
        </div>
      </div>
      <Cards/>
      <Parralax/>
    </div>
  ); 
};

export default Tours;

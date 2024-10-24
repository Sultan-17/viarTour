import React from 'react';
import styles from './choose-us.module.css';
import trip1 from '../../assets/trip-1.jpg';
import trip2 from '../../assets/trip-2.jpg';
import trip3 from '../../assets/trip-3.jpg';
import trip4 from '../../assets/trip-4.jpg';
import BrowseAll from '../browse-all';
import { useTranslation } from 'react-i18next';

const ChooseUs = () => {

  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((chooseUs, index) => (
        <React.Fragment key={index}>
            {chooseUs}
            <br />
        </React.Fragment>
    ));
  };

  return ( 
    <section className={styles.chooseUsSection}> 
        <BrowseAll/>
      <h1 className={styles.title}>{t("chooseUs.infoSubTitle")}</h1>
      <p className={styles.subtitle}>{renderTextWithLineBreaks(t("chooseUs.infoTitle"))}</p>
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${trip1})` }}
          ></div>
          <div className={styles.overlay}></div>
          <div className={styles.cardContent}>
            <h3>{t("chooseUs.cardTitle1")}</h3>
            <p>{t("chooseUs.cardParagraph1")}</p>
            <i className="icon-class-1"></i>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardSmall}`}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${trip2})` }}
          ></div>
          <div className={styles.overlay}></div>
          <div className={styles.cardContent}>
            <h3>{t("chooseUs.cardTitle2")}</h3>
            <p>{t("chooseUs.cardParagraph2")}</p>
            <i className="icon-class-2"></i>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardSmall}`}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${trip3})` }}
          ></div>
          <div className={styles.overlay}></div>
          <div className={styles.cardContent}>
            <h3>{t("chooseUs.cardTitle3")}</h3>
            <p>{t("chooseUs.cardParagraph3")}</p>
            <i className="icon-class-3"></i>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardLarge}`}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${trip4})` }}
          ></div>
          <div className={styles.overlay}></div>
          <div className={styles.cardContent}>
            <h3>{t("chooseUs.cardTitle4")}</h3>
            <p>{t("chooseUs.cardParagraph4")}</p>
            <i className="icon-class-4"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
import React from 'react';
import styles from './different-card.module.css';
import cityImg from '../../assets/trips1.png';
import buildingImg from '../../assets/trips2.png';
import eiffelImg from '../../assets/trips3.png';
import boatsImg from '../../assets/trips4.png';
import { useTranslation } from 'react-i18next';

const DifferentCard = () => {   

  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((differentCard, index) => (
        <React.Fragment key={index}>
            {differentCard}
            <br />
        </React.Fragment>
    ));
  };

  return (
    <div className={styles.container}>  
      <div className={styles.cardContainer}>
        <img src={cityImg} alt="City" className={`${styles.card} ${styles.largeCard}`} />
        <img src={buildingImg} alt="Building" className={`${styles.card} ${styles.smallCardTop}`} />
        <img src={eiffelImg} alt="Eiffel Tower" className={`${styles.card} ${styles.smallCardBottom}`} />
        <img src={boatsImg} alt="Boats" className={`${styles.card} ${styles.largeCardBottom}`} />
      </div> 
      <div className={styles.infoSection}> 
        <h2>{t("differentCard.infoTitle")}</h2>
        <p>{renderTextWithLineBreaks(t("differentCard.infoParagraph"))}</p>
        <button className={styles.button}>{t("differentCard.moreButton")}</button>
      </div>
    </div>
  );
};

export default DifferentCard;
import React from "react";
import styles from "./resort.module.css";
import image1 from '../../assets/resort1.png';
import image2 from '../../assets/resort2.png';
import image3 from '../../assets/resort3.png';
import vector from "../../assets/Vector.png"
import { useTranslation } from 'react-i18next';

const Resort =() => {

  const [ t ] = useTranslation();

    return(
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <p className={styles.mainInfoParagraph}>{t("resort.infoParagraph")}</p>
                <h1 className={styles.mainInfoHeader}>{t("resort.infoTitle")}</h1>
            </div>

            <div className={styles.cardsContainer}>
                <div className={`${styles.card} ${styles.cardSmall}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${image3})` }}
                    ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                  <div className={styles.icon}><img src={vector} alt=''></img></div>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardSmall}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${image2})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                  <div className={styles.icon}><img src={vector} alt=''></img></div>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardLarge}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${image1})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                  <div className={styles.icon}><img src={vector} alt=''></img></div>
                  </div>
                </div>
            </div>

    </div>
    )
}

export default Resort;
import React from "react";
import styles from "./items.module.css"
import { useTranslation } from 'react-i18next';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';

const Items = () =>{

  const [ t ] = useTranslation();

    return(
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <p className={styles.mainInfoParagraph}>{t("items.infoParagraph")}</p>
                <h1 className={styles.mainInfoHeader}>{t("items.infoTitle1")}</h1>
            </div>

            <div className={styles.cardsContainer}> 
                <div className={`${styles.card} ${styles.cardSmall}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${img1})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                    <i className="icon-class-1"></i>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardLarge}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${img2})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                    <i className="icon-class-2"></i>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardLarge}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${img3})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                    <i className="icon-class-3"></i>
                  </div>
                </div>
                <div className={`${styles.card} ${styles.cardSmall}`}>
                  <div
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${img4})` }}
                  ></div>
                  <div className={styles.overlay}></div>
                  <div className={styles.cardContent}>
                    <span>16+</span>
                    <i className="icon-class-4"></i>
                  </div>
                </div>
            </div>
            <div className={styles.mainInfo}>
            <p className={styles.mainInfoParagraph}>{t("items.infoParagraph")}</p>
            <h1 className={styles.mainInfoHeader}>{t("items.infoTitle2")}</h1>
        </div>

        </div>
    )
}
export default Items;
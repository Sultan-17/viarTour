import React from "react";
import styles from "./line.module.css";
import { useTranslation } from 'react-i18next';

const Line = () => {
    const [t] = useTranslation();

    const renderTextWithLineBreaks = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoSectionLeft}>
                <div className={styles.infoBox}>
                    <h1 className={styles.title}>{t("line.title1")}</h1>
                    <p className={styles.secondInfoParagraph}>{renderTextWithLineBreaks(t("line.infoParagraph1"))}</p>
                </div>
                <div className={styles.infoBox}>
                    <h1 className={styles.title}>{t("line.title2")}</h1>
                    <p className={styles.secondInfoParagraph}>{renderTextWithLineBreaks(t("line.infoParagraph2"))}</p>
                </div>
            </div>

            <div className={styles.lineContainer}>
                <div className={styles.line}></div>
                <div className={styles.circle} style={{ top: '0%' }}></div>
                <div className={styles.circle} style={{ top: '25vh' }}></div>
                <div className={styles.circle} style={{ top: '50vh' }}></div>
                <div className={styles.circle} style={{ top: '75vh' }}></div>
            </div>

            <div className={styles.infoSectionRight}>
                <div className={styles.infoBox}>
                    <h1 className={styles.title}>{renderTextWithLineBreaks(t("line.title3"))}</h1>
                    <p className={styles.secondInfoParagraph}>{renderTextWithLineBreaks(t("line.infoParagraph3"))}</p>
                </div>
                <div className={styles.infoBox}>
                    <h1 className={styles.title}>{renderTextWithLineBreaks(t("line.title4"))}</h1>
                    <p className={styles.secondInfoParagraph}>{renderTextWithLineBreaks(t("line.infoParagraph4"))}</p>
                </div>
            </div>
        </div>
    );
};

export default Line;
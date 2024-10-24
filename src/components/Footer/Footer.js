import React, { useState } from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import image4 from '../../assets/Vector.svg';
import image5 from '../../assets/YouToub.svg';
import image6 from '../../assets/telegramm.svg'; 
import image7 from '../../assets/FaceBook.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {   

  const [ t ] = useTranslation();

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((footer, index) => (
        <React.Fragment key={index}>
            {footer}
            <br />
        </React.Fragment>
    ));
  };

  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {  
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);
  };

  return ( 
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.menu}>
            <h3 className={styles.Menu}>{t("footer.menu")}</h3>
            <Link to="/" className={styles.link} onClick={toggleMenu}>{t("footer.home")}</Link>
            <Link to="/about" className={styles.link} onClick={toggleMenu}>{t("footer.about")}</Link>
            <Link to="/tours" className={styles.link} onClick={toggleMenu}>{t("footer.tours")}</Link>
            <Link to="/contact" className={styles.link} onClick={toggleMenu}>{t("footer.contact")}</Link>
          </div>
          <div className={styles.Popular_Tours}>
            <h1 className={styles.popular}>{t("footer.popular")}</h1>
            <ul className={styles.ul}>
              <li>{t("footer.li1")}</li>
              <li>{t("footer.li2")}</li>  
              <li>{t("footer.li3")}</li>
              <li>{t("footer.li4")}</li>
            </ul> 
          </div>
        </div>

        <div className={styles.contacts}>
          <h3>{renderTextWithLineBreaks(t("footer.location"))}</h3>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/viartour.uz/profilecard/?igsh=MXJjeXlrejdyem5hNA==" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image4} alt='Instagram' />
            </a>
            <a href="https://youtube.com/@viartour?si=IZwXq25_XI7Fi5jw" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image5} alt='YouTube' />
            </a>
            <a href="https://telegram.org/@Viar_Tours" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image6} alt='Telegram' />
            </a>
            <a href="https://www.facebook.com/share/17utKtzmdx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image7} alt='Facebook' />
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.line} />

      <ul className={styles.ull}>
        <li>{t("footer.ull")}</li>
        <li>{t("footer.rights")}</li>
      </ul>
    </footer>
  );
};

export default Footer;
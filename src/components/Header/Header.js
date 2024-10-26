import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/Viar logo TB.png'; 
import { useTranslation } from 'react-i18next';
import RU from '../../assets/russia.png';
import UZ from '../../assets/uzbekistan.png';
import EN from '../../assets/usa.png';

const Header = () => {
  const [t, i18n] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);  
  const [isLangOpen1, setIsLangOpen1] = useState(false); 
  const [isLangOpen2, setIsLangOpen2] = useState(false); 
  const langDropdownRef1 = useRef(null); // Реф для первого languageDropdown
  const langDropdownRef2 = useRef(null); // Реф для второго languageDropdown

  const changeLanguage = (lng) => { 
    i18n.changeLanguage(lng);
    setIsLangOpen1(false); // Закрываем меню после выбора языка
    setIsLangOpen2(false); // Закрываем меню после выбора языка
  };
 
  const toggleMenu = () => {   
    setIsOpen(!isOpen); 
  };  
   
  const toggleLangMenu1 = () => { 
    setIsLangOpen1(!isLangOpen1);
    setIsLangOpen2(false); // Закрываем второе меню при открытии первого
  };

  const toggleLangMenu2 = () => { 
    setIsLangOpen2(!isLangOpen2);
    setIsLangOpen1(false); // Закрываем первое меню при открытии второго
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Прокрутка к верхней части страницы
    setIsOpen(false); // Закрытие меню при клике
  };

  const handleClickOutside = (event) => {
    if (langDropdownRef1.current && !langDropdownRef1.current.contains(event.target)) {
      setIsLangOpen1(false); // Закрытие первого меню при клике вне его
    }
    if (langDropdownRef2.current && !langDropdownRef2.current.contains(event.target)) {
      setIsLangOpen2(false); // Закрытие второго меню при клике вне его
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" onClick={handleLinkClick}>
      <img src={logo} alt="Tourism Logo" className={styles.logo} />
      </Link>
      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
        <Link to="/" onClick={handleLinkClick}>{t("header.home")}</Link>
        <Link to="/about" onClick={handleLinkClick}>{t("header.about")}</Link>
        <Link to="/tours" onClick={handleLinkClick}>{t("header.tours")}</Link>
        <Link to="/contact" onClick={handleLinkClick}>{t("header.contact")}</Link>
        
        <div className={styles.languageDropdown} ref={langDropdownRef1}>
          <button onClick={toggleLangMenu1} className={styles.langButton}>
            {t("header.language")} ▼
          </button>
          {isLangOpen1 && (
            <div className={styles.langOptions}>
              <button onClick={() => changeLanguage("uz")}><img src={UZ}/><p>UZ</p></button>
              <button onClick={() => changeLanguage("ru")}><img src={RU}/><p>RU</p></button>
              <button onClick={() => changeLanguage("en")}><img src={EN}/><p>EN</p></button>
            </div>
          )}
        </div>
  

        <Link to="/contact" className={styles.getStartedButton} onClick={handleLinkClick}>
          {t("header.getStartedButton")}
        </Link>
      </nav>
      
      

      <div className={`${styles.hidden}`} style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.languageDropdowns} ref={langDropdownRef2}>
          <button onClick={toggleLangMenu2} className={styles.langButton}>
            {t("header.language")} ▼
          </button>
          {isLangOpen2 && (
            <div className={styles.langOptions}>
              <button onClick={() => changeLanguage("uz")}>UZ</button>
              <button onClick={() => changeLanguage("ru")}>RU</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
          )}
        </div>

        <div className={`${styles.burger} ${isOpen ? styles.toggle : ''}`} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;










// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';
// import logo from '../../assets/Viar logo TB.png'; 
// import { useTranslation } from 'react-i18next';

// const Header = () => {
//   const [ t, i18n ] = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);  
//   const [isLangOpen, setIsLangOpen] = useState(false); 
//   const langDropdownRef = useRef(null); // Реф для languageDropdown

//   const changeLanguage = (lng) => { 
//     i18n.changeLanguage(lng);
//   };
 
//   const toggleMenu = () => {   
//     setIsOpen(!isOpen); 
//   };  
   
//   const toggleLangMenu = () => { 
//     setIsLangOpen(!isLangOpen);
//   };

//   const handleLinkClick = () => {
//     window.scrollTo(0, 0); // Прокрутка к верхней части страницы
//     setIsOpen(false); // Закрытие меню при клике
//   };

//   const handleClickOutside = (event) => {
//     if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
//       setIsLangOpen(false); // Закрытие выпадающего меню языка при клике вне его
//     }
//   };

//   useEffect(() => {
//     // Добавляем обработчик клика на документ при открытии меню языка
//     if (isLangOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     // Удаляем обработчик при размонтировании компонента
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isLangOpen]);

//   return (
//     <header className={styles.header}>
//       <img src={logo} alt="Tourism Logo" className={styles.logo} />
//       <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
//         <Link to="/" onClick={handleLinkClick}>{t("header.home")}</Link>
//         <Link to="/about" onClick={handleLinkClick}>{t("header.about")}</Link>
//         <Link to="/tours" onClick={handleLinkClick}>{t("header.tours")}</Link>
//         <Link to="/contact" onClick={handleLinkClick}>{t("header.contact")}</Link>
        
//         <div  className={styles.languageDropdown} ref={langDropdownRef}>
//           <button onClick={toggleLangMenu} className={styles.langButton}>
//           {t("header.language")} ▼
//           </button>
//           {isLangOpen && (
//             <div className={styles.langOptions}>
//               <button onClick={() => changeLanguage("uz")}>UZ</button>
//               <button onClick={() => changeLanguage("ru")}>RU</button>
//               <button onClick={() => changeLanguage("en")}>EN</button>
//             </div>
//           )}
//         </div>
        
//         <Link to="/contact" className={styles.getStartedButton} onClick={handleLinkClick}>
//           {t("header.getStartedButton")}
//         </Link>
//       </nav>
//       {/* <div style={{display:"flex", alignItems:"center"}} >
//         <div className={styles.languageDropdowns} ref={langDropdownRef}>
//             <button onClick={toggleLangMenu} className={styles.langButton}>
//             {t("header.language")} ▼
//             </button>
//             {isLangOpen && (
//               <div className={styles.langOptions}>
//                 <button onClick={() => changeLanguage("uz")}>UZ</button>
//                 <button onClick={() => changeLanguage("ru")}>RU</button>
//                 <button onClick={() => changeLanguage("en")}>EN</button>
//               </div>
//             )}
//         </div>
//         <div className={`${styles.burger} ${isOpen ? styles.toggle : ''}`} onClick={toggleMenu}>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//           <div className={styles.line}></div>
//         </div>
//       </div> */}
//       <div className={`${styles.hidden}`} style={{display: "flex", alignItems: "center"}}>
//     <div className={styles.languageDropdowns} ref={langDropdownRef}>
//         <button onClick={toggleLangMenu} className={styles.langButton}>
//             {t("header.language")} ▼
//         </button>
//         {isLangOpen && (
//             <div className={styles.langOptions}>
//                 <button onClick={() => changeLanguage("uz")}>UZ</button>
//                 <button onClick={() => changeLanguage("ru")}>RU</button>
//                 <button onClick={() => changeLanguage("en")}>EN</button>
//             </div>
//         )}
//     </div>
//     <div className={`${styles.burger} ${isOpen ? styles.toggle : ''}`} onClick={toggleMenu}>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//     </div>
// </div>

//     </header>
//   );
// };

// export default Header;



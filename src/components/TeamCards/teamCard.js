import React from 'react';
import styles from './teamCard.module.css';
import image4 from '../../assets/Vector.svg';
import image5 from '../../assets/telegramm.svg'
import image6 from '../../assets/YouToub.svg'
import image7 from '../../assets/facebook-app-symbol.png'
import { useTranslation } from 'react-i18next';

import Human1 from '../../assets/human1 (1).png';
import Human2 from '../../assets/human2.png';
import Human3 from '../../assets/human3.png'; 

const TeamCard = ({ man }) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.card}>
            <img src={man.image} alt={man.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.title}>{man.title}</h2>
                <div className={styles.price}>{man.price}</div>
            <div className={styles.icons}>
            <a href="https://www.instagram.com/viartour.uz/profilecard/?igsh=MXJjeXlrejdyem5hNA==" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image4} alt='Instagram' />
            </a>
            <a href="https://www.telegram.org/a/@Viar_Tours" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image5} alt='Telegram' />
            </a>
            <a href="https://youtube.com/@viartour?si=IZwXq25_XI7Fi5jw" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image6} alt='YouTube' />
            </a>
            <a href="https://www.facebook.com/share/17utKtzmdx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className={styles.icon}>
              <img src={image7} alt='Facebook' />
            </a>
            </div>
            </div>
        </div>
        </div>
    );
};

const Teamcard = () => {
    
    const [ t ] = useTranslation();

    const Teams = [
        { image: Human1,  title: t("teamCards.name1"), price: t("teamCards.price1") },
        { image: Human2, title: t("teamCards.name2"),  price: t("teamCards.price2") }, 
        { image: Human3, title: t("teamCards.name3"),  price: t("teamCards.price3") },
    ]; 

    return (
        <div className={styles.cardContainer}>
            {Teams.map((man, index) => (
                <TeamCard key={index} man={man} />
            ))}
        </div>
    );
};

export default Teamcard;

































































// import React from 'react';
// import styles from './tesamCard.module.css';

// import Human1 from '../../assets/human1 (1).png';
// import Human2 from '../../assets/human2.png';
// import Human3 from '../../assets/human3.png';

// const Teams = [
//     { image: Human1,  title: 'Kuala Lumpur',  price: '$1200' },
//     { image: Human2, title: 'Paris',  price: '$1500' },
//     { image: Human3, title: 'Rome',  price: '$1400' },
//   ];

//   const TeamCards = ({ man }) => {
//     return ( 
//       <div className={styles.card}>
//         <img src={man.image} alt={man.title} className={styles.cardImage} />
//         <div className={styles.cardContent}>
//           <h2 className={styles.title}>{man.title}</h2>
//           <div className={styles.price}>{man.price}</div>
//           <div className={styles.icons}>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const teamCard = () => {
//     return (
//       <div className={styles.cardContainer}>
//         {Teams.map((man, index) => (
//           <TeamCards key={index} man={man} />
//         ))}
//       </div>
//     );
//   };

// export default teamCard;
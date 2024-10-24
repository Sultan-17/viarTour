import React, { useState } from 'react';
import styles from './Faq.module.css'; // Предположим, что стили будут подключены
import { useTranslation } from 'react-i18next';

const FAQ = () => {

  const [ t ] = useTranslation(); 

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }; 

  const questionsLeft = [ 
    { question: t("faq.leftQuestion1"), answer: t("faq.leftAnswer1") },
    { question: t("faq.leftQuestion2"), answer: t("faq.leftAnswer2") },
    { question: t("faq.leftQuestion3"), answer: t("faq.leftAnswer3") },
  ];

  const questionsRight = [
    { question: t("faq.rightQuestion1"), answer: t("faq.rightAnswer1") },
    { question: t("faq.rightQuestion2"), answer: t("faq.rightAnswer2") },
    { question: t("faq.rightQuestion3"), answer: t("faq.rightAnswer3") },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainInfo}>
        <h1 className={styles.title}>{t("faq.fAQ")}</h1>
        <p className={styles.mainInfoParagraph}> 
          {t("faq.fAQParagraph")}
        </p>
        <div className={styles.line}></div>
      </div>

      <div className={styles.gridContainer}>
        {/* Левая колонка */}
        <div className={styles.column}>
          {questionsLeft.map((item, index) => (
            <div className={styles.accordionItem} key={index}>
              <button
                className={styles.accordionButton}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className={styles.icon}>
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {activeIndex === index && (
                <div className={styles.accordionContent}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
 
        {/* Правая колонка */}
        <div className={styles.column}>
          {questionsRight.map((item, index) => (
            <div className={styles.accordionItem} key={index + questionsLeft.length}>
              <button
              className={`${styles.accordionButton} ${activeIndex === index + questionsLeft.length ? styles.accordionButtonActive : ''}`}
              onClick={() => toggleAccordion(index + questionsLeft.length)}
            >
              {item.question}
              <span className={styles.icon}>
                {activeIndex === index + questionsLeft.length ? '▲' : '▼'}
              </span>
            </button>

              {activeIndex === index + questionsLeft.length && (
                <div className={styles.accordionContent}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

























// import React, { useState } from 'react';
// import styles from './Faq.module.css';

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
 
//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index); // Open only one accordion at a time
//   }; 
 
//   const questions = [ 
//     { question: "How can I book a tour?", answer: "You can book a tour directly through our website or by contacting our support team via email or phone." },
//     { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and bank transfers." },
//     { question: "Can I customize my tour package?", answer: "Yes, we offer customizable tour packages to fit your specific preferences and needs." },
//     { question: "What is your cancellation policy?", answer: "You can cancel up to 7 days before the tour for a full refund. Cancellations made within 7 days are subject to a 50% fee." },
//     { question: "Do you offer group discounts?", answer: "Yes, we offer special discounts for groups of 5 or more. Please contact us for more details." },
//     { question: "Is travel insurance included in the package?", answer: "No, travel insurance is not included. However, we highly recommend purchasing travel insurance before your trip." },
//   ];

//   return (
//     <div className={styles.container}> 


//           <div className={styles.mainInfo}>
//             <h1 className={styles.title}>FAQ</h1>
//             <p className={styles.mainInfoParagraph}>Have questions? Our FAQ section provides answers to some of the <br/> most common inquiries about our trips.</p>
//             <div className={styles.line}></div>
//           </div>
      

//       <div className={styles.accordionGrid}>
//         {questions.map((item, index) => (
//           <div className={styles.accordionItem} key={index}>
//             <button 
//               className={styles.accordionButton} 
//               onClick={() => toggleAccordion(index)}
//             >
//               {item.question}
//               <span className={styles.icon}>{activeIndex === index ? '▲' : '▼'}</span>
//             </button>
//             <div 
//               className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ''}`}
//               style={{ 
//                 maxHeight: activeIndex === index ? '200px' : '0px', // Set height limit based on active state
//                 overflow: 'hidden'  // Ensure no overflow
//               }} 
//             >
//               <p>{item.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

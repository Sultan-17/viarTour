import React from 'react';
import styles from './Modal.module.css';
import { useTranslation } from 'react-i18next';

const Modal = ({ onClose }) => {

  const [ t ] = useTranslation();

  return (
    <>
      <div className={styles.backdrop} onClick={onClose}></div>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.modalContent}>
          <h2>{t("modal.infoTitle")}</h2>
          <p>{t("modal.infoParagraph")}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React, { useState } from 'react';
import styles from './Contact.module.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import image from '../../assets/Bouth.png';
import image2 from '../../assets/mingcute_phone-fill.png';
import image3 from '../../assets/Vector2.png';
import payme from '../../assets/Payme.png';
import click from '../../assets/click..png';
import Modal from '../../components/Modal/Modal'; // Modalni import qilish
import { useTranslation } from 'react-i18next';

// Leaflet marker icon setup
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const [ t ] = useTranslation();
  const [position] = useState([41.3223262, 69.2727744]); // Office coordinates
  const [isModalOpen, setModalOpen] = useState(false); // Modal holati
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Xato xabari
  const [validationErrors, setValidationErrors] = useState({ name: false, phone: false, destination: false }); // Validation states

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((contactPage, index) => (
        <React.Fragment key={index}>
            {contactPage}
            <br />
        </React.Fragment>
    ));
  };

  // Modalni ochish/yopish funksiyasi
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // Formni tekshirish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault(); // Formni yuborishni to'xtatish
    const errors = { name: !name, phone: !phone, destination: !destination }; // Check for errors
    setValidationErrors(errors);

    if (Object.values(errors).some(error => error)) {
      setErrorMessage(t("contactPage.fillAlert")); // Xato xabari
      return;
    }

    setErrorMessage(''); // Xato xabarini tozalash
    setModalOpen(true); // Modalni ochish
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <img src={image} alt="Sample" className={styles.image} />
        </div>
        <div className={styles.rightSide}>
          <h2 className={styles.title}>{t("contactPage.title")}</h2>
          <p className={styles.description}>{t("contactPage.description")}</p>
          <form onSubmit={handleSubmit}> {/* Form yaratish */}
            <input 
              type="text" 
              placeholder={t("contactPage.nameInput")} 
              className={`${styles.input} ${validationErrors.name ? styles.errorInput : ''}`} // Conditional styling for error
              value={name}
              onChange={(e) => setName(e.target.value)} // Inputni boshqarish
            />
            <input 
              type="text" 
              placeholder={t("contactPage.phoneInput")}
              className={`${styles.input} ${validationErrors.phone ? styles.errorInput : ''}`} // Conditional styling for error
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Inputni boshqarish
            />
            <input 
              type="text" 
              placeholder={t("contactPage.placeInput")}
              className={`${styles.input} ${validationErrors.destination ? styles.errorInput : ''}`} // Conditional styling for error
              value={destination}
              onChange={(e) => setDestination(e.target.value)} // Inputni boshqarish
            />
            <button type="submit" className={styles.button}>{t("contactPage.submitButton")}</button>
          </form>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Xato xabari */}
        </div>
      </div>

      {/* Modal ochilgan bo'lsa, uni ko'rsatadi */}
      {isModalOpen && <Modal onClose={toggleModal} />}

      <div className={styles.Payment}>
        <h2 className={styles.infoTitle}>{renderTextWithLineBreaks(t("contactPage.paymentTitle"))}</h2>
        <p className={styles.paragraph}>{renderTextWithLineBreaks(t("contactPage.paymentParagraph"))}</p>
        <div className={styles.Cards}>
          <div className={styles.leftCard}>
            <img src={payme} alt="PayMe" className={styles.img} />
            <button className={styles.button}>{t("contactPage.paymentButton")}</button>
          </div>
          <div className={styles.rightCard}>
            <img src={click} alt="Click" className={styles.imge} />
            <button className={styles.button}>{t("contactPage.paymentButton")}</button>
          </div>
        </div>
      </div>

      <div className={styles.mainInfo}>
        <p className={styles.paragraph}>{t("contactPage.locationTitle")}</p>
        <h2 className={styles.infoTitle}>{t("contactPage.locationParagraph")}</h2>
      </div>
      <div className={styles.secondContent}>
        <div className={styles.left}>
          <div className={styles.numberedItems}>
            <p className={styles.mainP}>{renderTextWithLineBreaks(t("contactPage.locationName"))}</p>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={image2} alt="Phone Icon" />
              </div>
              <div className={styles.Info}>
                <p className={styles.first}>{t("contactPage.emailTitle")}</p>
                <p className={styles.second}>example@example.com</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={image3} alt="Phone Icon" />
              </div>
              <div className={styles.Info}>
                <p className={styles.first}>{t("contactPage.phoneTitle")}</p>
                <p className={styles.second}>+998911234567</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <MapContainer center={position} zoom={13} className={styles.map} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {t("contactPage.locationPopup")}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
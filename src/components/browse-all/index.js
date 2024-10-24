import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BrowseAll = () => {

    const [ t ] = useTranslation();

    const navigate = useNavigate();
    const handleBrowseAllClick = () => {
        window.scrollTo(0, 960);
        navigate('/tours'); // Переход на страницу Tours
    };
    return (
        <>
            <div className={styles.bottomItem}>
                <div className={styles.BrowseAll} onClick={handleBrowseAllClick}>{t("browseAll.browseButton")}</div>
            </div> 
        </>
    )
}
export default BrowseAll;
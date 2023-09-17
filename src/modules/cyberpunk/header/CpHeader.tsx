import styles from './styles.module.scss'; // Import the SCSS modul
import logo from "../../../assets/cyberpunk/images/logo.png";

export const CpHeader = () => {
    return <div className={styles.container}>
           <img src={logo}/>
    </div>
}
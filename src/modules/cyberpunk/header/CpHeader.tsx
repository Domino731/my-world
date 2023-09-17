import styles from './styles.module.scss'; // Import the SCSS modul
import logo from "../../../assets/cyberpunk/images/logo.png";
import {headerOptions} from "../../app/sections/Header";
import {HeaderOption} from "../../app/sections/Header/header.types.ts";

export const CpHeader = () => {
    return <div className={styles.container}>
           <img src={logo}/>
        <nav>
            <ul className={styles.list}>
                {headerOptions.map(({label}: HeaderOption) => <li className={styles.listItem}>
                    <a className={styles.link}>{label}</a>
                </li>)}

                <li className={styles.listItem}>
                    <a className={styles.link}>CONTACT</a>
                </li>
            </ul>
        </nav>
    </div>
}
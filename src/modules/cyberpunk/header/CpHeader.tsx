import styles from './styles.module.scss'; // Import the SCSS modul
import logo from "../../../assets/cyberpunk/images/logo.png";
import {headerOptions} from "../../app/sections/Header";
import {HeaderOption} from "../../app/sections/Header/header.types.ts";
import {useMemo} from "react";

export const CpHeader = () => {

    const options = useMemo(() => {
       const data = [...headerOptions];
        data.pop();
        data.shift();

        return data;
    }, []);

    return <div className={styles.container}>
           <img src={logo}/>
         <nav>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a className={`${styles.link} ${styles.linkFirstItem}`}>{headerOptions[0].label}</a>
                </li>
                {options.map(({label}: HeaderOption) => <li className={styles.listItem}>
                    <a className={styles.link}>{label}</a>
                </li>)}

                <li className={styles.listItem}>
                    <a className={`${styles.link} ${styles.linkLastItem}`}>{headerOptions[headerOptions.length - 1].label}</a>
                </li>
            </ul>
        </nav>
    </div>
}
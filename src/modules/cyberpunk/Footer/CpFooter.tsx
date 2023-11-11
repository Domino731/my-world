import styles from './styles.module.scss';
import {FOOTER_LINKS} from "../../app/sections/Footer/Footer.const.tsx";

export const CpFooter = () => {
    return <div className={styles.container}>
        <ul className={styles.content}>
            {FOOTER_LINKS.map(({icon, title, link}, index) => <li className={styles.listItem}>
                <a href={link} title={title}>
                    <div className={styles.listItemContent} key={`footer-cp-list-item-${index}`}>
                        {icon}
                    </div>
                </a>
            </li>)}
        </ul>
    </div>
}
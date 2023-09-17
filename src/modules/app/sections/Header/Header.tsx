import {CpHeader} from "../../../cyberpunk/header/CpHeader.tsx";
import styles from './styles.module.scss';

export const Header = () => {
    return <header className={styles.header}>
        <CpHeader/>
    </header>
}
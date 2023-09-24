import {CpHeader} from "../../../cyberpunk/header/CpHeader.tsx";
import styles from './styles.module.scss';
import {SwitchButton} from "../../SwitchStyle/SwitchButton";
import {APP_SECTIONS} from "../../App.types.ts";

export const Header = () => {
    return <header className={styles.header}>
        <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
        <CpHeader/>
        <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
    </header>
}
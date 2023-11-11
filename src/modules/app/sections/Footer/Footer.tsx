import styles from './styles.module.scss';
import {CpFooter} from "../../../cyberpunk/Footer";
import {APP_SECTIONS} from "../../App.types.ts";
import {SwitchButton} from "../../SwitchStyle/SwitchButton";

export const Footer = () => <section className={styles.container}>
   <CpFooter/>
    <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
    <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>
import {CpContact} from "../../../cyberpunk/contact";
import styles from './styles.module.scss';
import {APP_SECTIONS} from "../../App.types.ts";
import {SwitchButton} from "../../SwitchStyle/SwitchButton";

export const Contact = () => <section className={styles.container}>
    <CpContact/>
    <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
    <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>
import {CpAboutMe} from "../../../cyberpunk/aboutMe";
import styles from './styles.module.scss';
import {APP_SECTIONS} from "../../App.types.ts";
import {SwitchButton} from "../../SwitchStyle/SwitchButton";

export const AboutMe = () => <section id="about" className={styles.container}>
    <CpAboutMe/>
    <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
    <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>
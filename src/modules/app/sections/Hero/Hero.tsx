import {CpHero} from "../../../cyberpunk/hero";
import styles from './styles.module.scss';
import {APP_SECTIONS} from "../../App.types.ts";
import {SwitchButton} from "../../SwitchStyle/SwitchButton";

export const Hero = () => <section className={styles.container}>
    <CpHero/>
    <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
    <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>
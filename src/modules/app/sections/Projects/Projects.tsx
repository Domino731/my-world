import {CpProjects} from "../../../cyberpunk/projects";
import styles from './styles.module.scss';
import {SwitchButton} from "../../SwitchStyle/SwitchButton";
import {APP_SECTIONS} from "../../App.types.ts";

export const Projects = () => <section className={styles.container}>
    <CpProjects/>
    <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
    <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>
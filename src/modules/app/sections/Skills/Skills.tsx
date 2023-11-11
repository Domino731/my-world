import {CpSkills} from "../../../cyberpunk/skills";
import {SwitchButton} from "../../SwitchStyle/SwitchButton";
import {APP_SECTIONS} from "../../App.types.ts";
import styles from './styles.module.scss';

export const Skills = () => <section className={styles.container}>
      <CpSkills/>
      <SwitchButton isRight={false} appSection={APP_SECTIONS.CP}/>
      <SwitchButton isRight appSection={APP_SECTIONS.CP}/>
</section>

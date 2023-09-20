import styles from "./styles.module.scss";
import {SectionTitle} from "../components/SectionTitle";
import {cpStyles} from "../styles/variables.ts";
import {Title} from "../components/Title";

export const CpProjects = () => {
    return <section className={styles.container}>
        <span className={styles.divider}></span>
        <SectionTitle title="PROJECTS" color={cpStyles.black}/>
        <Title title="PROJECTS"/>
    </section>
}
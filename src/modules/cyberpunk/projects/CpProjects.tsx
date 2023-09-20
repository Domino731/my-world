import styles from "./styles.module.scss";
import {SectionTitle} from "../components/SectionTitle";
import {cpStyles} from "../styles/variables.ts";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle/SubTitle.tsx";

export const CpProjects = () => {
    return <section className={styles.container}>
        <span className={styles.divider}></span>
        <SectionTitle title="PROJECTS" color={cpStyles.black}/>
        <Title title="PROJECTS"/>
        <SubTitle title="The most important part of being a programmer. I put my heart into it, and user experience at first place."/>
        <div className={styles.content}>
            <div className={styles.projectsList}>
                <h3 className={`${styles.projectsListTitle} ${styles.projectsListTitleCommercial}`}>
                    COMMERCIAL
                    <span/>
                    <span/>
                </h3>
                <ul className={`${styles.list} ${styles.projectsListCommercial}`}>
                    <li className={styles.projectsListItem}>
                               <div className={styles.projectsListItemContent}></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}
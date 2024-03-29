import styles from "./styles.module.scss";
import {SectionTitle} from "../components/SectionTitle";
import {cpStyles} from "../styles/variables.ts";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle/SubTitle.tsx";
import {DataHeader} from "../components/DataHeader";
import {commercialProjects} from "../../app/sections/Projects/Projects.const.ts";

export const CpProjects = () => {
    return <div className={styles.container}>
        <div className={styles.divider}>
            <span/>
            <span/>
        </div>
        <SectionTitle title="PROJECTS" color={cpStyles.black}/>
        <Title title="PROJECTS"/>
        <SubTitle title="The most important part of being a programmer. I put my heart into it, and user experience at first place."/>
        <div className={styles.content}>
            {/* COMMERCIAL PROJECTS */}
            <div className={styles.commercialProjects}>
            <div className={styles.projectsList}>
                <h3 className={`${styles.projectsListTitle} ${styles.projectsListTitleCommercial}`}>
                    COMMERCIAL
                    <span/>
                    <span/>
                </h3>
                <ul className={`${styles.list} ${styles.projectsListCommercial}`}>
                    {commercialProjects.map(({title, description, linkTitle}) =>                     <li className={styles.projectsListItem}>
                        <div className={styles.projectsListItemContent}>
                            <DataHeader title="_PROJECT_TITLE"/>
                            <p className={`${styles.projectText} ${styles.projectTitle}`}>{title}</p>
                            <DataHeader title="_PROJECT_DESCRIPTION"/>
                            <p className={`${styles.projectText} ${styles.projectDescription}`}> {description}</p>
                            <DataHeader title="_PROJECT_LINK"/>
                            <p className={`${styles.projectText} ${styles.projectDescription}`}>{linkTitle}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
            </div>
            {/* OWN PROJECTS */}
            <div className={styles.ownProjects}>
                <div className={styles.projectsList}>
                    <h3 className={`${styles.projectsListTitle} ${styles.projectsListTitleOwn}`}>
                        OWN
                    </h3>
                    <ul className={`${styles.list} ${styles.projectsListCommercial}`}>
                        {commercialProjects.map(({title, description, linkTitle}) => <li className={`${styles.projectsListItem} ${styles.projectsListItemOwn}`}>
                            <div className={styles.projectsListItemContent}>
                                <DataHeader title="_PROJECT_TITLE"/>
                                <p className={`${styles.projectText} ${styles.projectTitle}`}>{title}</p>
                                <DataHeader title="_PROJECT_DESCRIPTION"/>
                                <p className={`${styles.projectText} ${styles.projectDescription}`}> {description}</p>
                                <DataHeader title="_PROJECT_LINK"/>
                                <p className={`${styles.projectText} ${styles.projectDescription} ${styles.ownProjectLink}`}>{linkTitle}</p>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
import {SectionTitle} from "../components/SectionTitle";
import styles from "./styles.module.scss";
import {cpStyles} from "../styles/variables.ts";
import {SKILLS_DATA, SOFT_SKILLS_DATA} from "../../app/sections/Skills";
// TODO: maybe want to learn box
export const CpSkills = () => {
    return <div className={styles.container}>
        <SectionTitle title="MODULE_SKILLS" color={cpStyles.black}/>
        <h2 className={styles.title}>SKILLS</h2>
        <p className={styles.subTitle}>My both soft and hard skills allow me to create dynamic and functional websites that not only grab attention but also provide an excellent user experience.</p>
        <div className={styles.skillsContainer}>

            <div className={styles.skillsColumn}>
                <h3 className={styles.columnTitle}>
                    HARD
                </h3>
                <div className={styles.skillsBoxWrapper}>
                    <div className={styles.skillsBox}>
                        <div>
                            {SKILLS_DATA.map(({icon, title}) => <div className={styles.hardSkillRow}>
                                <div className={styles.iconBox}>
                                    <div className={styles.hardSkillIconWrapper}>
                                        <img src={icon} alt={title} className={styles.hardSkillIcon}/>
                                    </div>
                                </div>
                                <p className={styles.hardSkillTitle}>
                                    _{title}
                                </p>
                                <p className={styles.hardSkillExp}>
                                    {/*TODO: EXP FROM ARRAY*/}
                                    REGULAR
                                </p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.skillsColumn}>
                <h3 className={styles.columnTitle}>
                    SOFT
                </h3>
                <div className={`${styles.skillsBoxWrapper} ${styles.softSkillsBoxWrapper}`}>
                    <div className={`${styles.skillsBox} ${styles.softSkillsBox}`}>
                        {SOFT_SKILLS_DATA.map(skill =>       <div className={`${styles.hardSkillRow} ${styles.softSkillRow}`}>
                            <span className={styles.softSkillIcon}/>
                            <p className={`${styles.hardSkillTitle} ${styles.softSkillTitle}`}>{skill}</p>
                        </div>)}
                    </div>
                </div>
            </div>

        </div>
    </div>
}
import styles from './styles.module.scss';
import cpClassStyles from "../styles/styles.module.scss";
import {SectionTitle} from "../components/SectionTitle";
import judyImg from '../../../assets/cyberpunk/images/judy.jpg'
import {cpStyles} from "../styles/variables.ts";

export const CpAboutMe = () => {
    return <div className={styles.container}>
        <SectionTitle title="MODULE_ABOUT" color={cpStyles.lightBlue}/>
        <div className={styles.content}>
            <section>
                <div>
                    <p className={styles.boxTitle}>_IMAGE</p>
                    <div className={styles.profileWrapper}>
                        <div className={styles.profile}>
                            <img src={judyImg} className={styles.profileImage} alt="Profile"/>
                        </div>
                    </div>
                </div>

                <section>
                    <p className={styles.dataText}>NAME_SURNAME: DOMINIK ORZECHOWSKI</p>
                    <p className={styles.dataText}>PROFESSION: FULL - STACK </p>
                </section>
            </section>

            <section className={styles.articleSection}>
                     <p className={styles.boxTitle}>_DATA</p>
                <div className={styles.article}>
                    <h3 className={styles.articleTitle}>OVERVIEW_</h3>
                    <p className={styles.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequatur deleniti doloribus labore laborum mollitia nisi obcaecati quae reiciendis.</p>
                    <span className={styles.articleBottomLine}/>
                </div>
                <div className={styles.article}>
                    <h3 className={styles.articleTitle}>HOW I WORK_?_</h3>
                    <p className={styles.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequatur deleniti doloribus labore laborum mollitia nisi obcaecati quae reiciendis.</p>
                    <span className={styles.articleBottomLine}/>
                </div>
                <div className={styles.article}>
                    <h3 className={styles.articleTitle}>HOBBY_</h3>
                    <p className={styles.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequatur deleniti doloribus labore laborum mollitia nisi obcaecati quae reiciendis.</p>
                    <span className={styles.articleBottomLine}/>
                </div>
            </section>
        </div>
        <span className={cpClassStyles.razorYellow}/>
    </div>
}
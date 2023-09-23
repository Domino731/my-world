import styles from "./style.module.scss"
import {SectionTitle} from "../components/SectionTitle";
import {cpStyles} from "../styles/variables.ts";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle/SubTitle.tsx";
import {Formik} from "formik";
export const CpContact = () => {
    return <div className={styles.container}>
        <span className={styles.dividerBg}/>
        <span className={styles.divider}/>
        <SectionTitle title="Contact" color={cpStyles.black}/>
        <Title title="CONTACT" color={cpStyles.black}/>
        <SubTitle title="Wanna cooperate? Leave a message" color={cpStyles.black}/>
        <Formik initialValues={{}} onSubmit={() => {}}>
            <div className={styles.form}>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputContainer}>
                        <input className={styles.input}/>
                        <label className={styles.label}>Enter your e-mail</label>
                    </div>
                    <div className={`${styles.inputContainer} ${styles.inputContainerTextarea}`}>
                        <textarea className={`${styles.input} ${styles.inputTextarea}`}/>
                        <label className={styles.label}>Leave a message</label>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type="submit">SUBMIT</button>
                </div>
            </div>
        </Formik>
    </div>
}
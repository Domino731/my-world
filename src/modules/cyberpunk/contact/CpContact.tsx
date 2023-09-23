import styles from "./style.module.scss"
import {SectionTitle} from "../components/SectionTitle";
import {cpStyles} from "../styles/variables.ts";
import {Title} from "../components/Title";
import {SubTitle} from "../components/SubTitle/SubTitle.tsx";
import {Formik} from "formik";
import {ContactFormInitialValues, ContactFormOnSubmit, ContactFormValidationSchema} from "../../app/sections/Contact";
export const CpContact = () => {
    return <div className={styles.container}>
        <span className={styles.dividerBg}/>
        <span className={styles.divider}/>
        <SectionTitle title="Contact" color={cpStyles.black}/>
        <Title title="CONTACT" color={cpStyles.black}/>
        <SubTitle title="Wanna cooperate? Leave a message" color={cpStyles.black}/>
        <Formik initialValues={ContactFormInitialValues} onSubmit={ContactFormOnSubmit} validationSchema={ContactFormValidationSchema} validateOnMount>
            {({values, handleChange, handleBlur, handleSubmit, isValid, errors, touched}) =>             <div className={styles.form}>
                <div className={styles.inputsWrapper}>
                    <div className={styles.inputContainer}>
                        <input className={styles.input} name="email" type="email" value={values.email} onBlur={handleBlur} onChange={handleChange}/>
                        <label className={`${styles.label} ${values.email && styles.labelActive}`}>
                            {(touched.email && errors.email)  ? errors.email : 'Enter your e-mail'}
                        </label>
                    </div>
                    <div className={`${styles.inputContainer} ${styles.inputContainerTextarea}`}>
                        <textarea className={`${styles.input} ${styles.inputTextarea}`} name="massage" onBlur={handleBlur} value={values.massage} onChange={handleChange}/>
                        <label className={`${styles.label} ${values.massage && styles.labelActive}`}>
                            {(touched.massage && errors.massage) ? errors.massage : 'Leave a message'}
                        </label>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type="submit" onClick={() => handleSubmit()} disabled={!isValid}>SUBMIT</button>
                </div>
            </div>}
        </Formik>
    </div>
}
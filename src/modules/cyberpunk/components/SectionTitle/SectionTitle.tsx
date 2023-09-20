import {SectionTitleProps} from "./SectionTitle.types.ts";
import styles from "./styles.module.scss"

export const SectionTitle = ({title, color}: SectionTitleProps) => {
    return <h2 className={styles.title} style={{color}}>/// SYSTEM: {title}</h2>
}
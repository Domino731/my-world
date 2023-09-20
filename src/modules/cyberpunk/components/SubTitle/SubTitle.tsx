import styles from "./styles.module.scss"
import {SubTitleProps} from "./SubTitle.types.ts";
export const SubTitle = ({title}: SubTitleProps) => <p className={styles.subTitle}>
    {title}
</p>
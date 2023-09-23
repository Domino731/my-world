import styles from "./styles.module.scss"
import {SubTitleProps} from "./SubTitle.types.ts";
import {cpStyles} from "../../styles/variables.ts";
export const SubTitle = ({title, color}: SubTitleProps) => <p className={styles.subTitle} style={{color: color ?? cpStyles.black}}>
    {title}
</p>
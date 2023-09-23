import {TitleProps} from "./Title.types.ts";
import styles from "./styles.module.scss";
import {cpStyles} from "../../styles/variables.ts";

export const Title = ({title, color}: TitleProps) => <h2 className={styles.title} style={{color: color ?? cpStyles.black}}>
    {title}
</h2>
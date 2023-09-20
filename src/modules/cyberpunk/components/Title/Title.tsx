import {TitleProps} from "./Title.types.ts";
import styles from "./styles.module.scss";

export const Title = ({title}: TitleProps) => <h2 className={styles.title}>
    {title}
</h2>
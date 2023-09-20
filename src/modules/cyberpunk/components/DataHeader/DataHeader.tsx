import {DataHeaderProps} from "./DataHeader.types.ts";
import styles from "./styles.module.scss"

export const DataHeader = ({title}: DataHeaderProps) => <p className={styles.dataHeader}>
    {title}
</p>
import styles from "./styles.module.scss";
import {SwitchButtonProps} from "./SwitchButton.types.ts";
import * as classNames from "classnames";
import {APP_SECTIONS} from "../../App.types.ts";

export const SwitchButton = ({isRight, appSection}: SwitchButtonProps) => {

    const isCp =  appSection === APP_SECTIONS.CP

    const className = classNames(styles.button, {
        // GENERAL STYLES
        [styles.left]: !isRight,
        [styles.right]: isRight,
        // CYBERPUNK STYLES
        [styles.cpButton]: isCp,
        [styles.cpLeft]: !isRight && isCp,
        [styles.cpRight]: isRight && isCp,
    })

    return <button className={className}>
        {isCp && !isRight && <i className="fa-solid fa-chevron-left"></i> }
        {isCp && isRight && <i className="fa-solid fa-chevron-right"></i> }
    </button>
}
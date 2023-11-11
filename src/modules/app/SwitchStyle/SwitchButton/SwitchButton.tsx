import styles from "./styles.module.scss";
import {SwitchButtonProps} from "./SwitchButton.types.ts";
import * as classNames from "classnames";
import {APP_SECTIONS} from "../../App.types.ts";
import {useMemo} from "react";

export const SwitchButton = ({isRight, appSection}: SwitchButtonProps) => {

    const isCp = appSection === APP_SECTIONS.CP

    const className = classNames(styles.button, {
        // GENERAL STYLES
        [styles.left]: !isRight,
        [styles.right]: isRight,
        // CYBERPUNK STYLES
        [styles.cpButton]: isCp,
        [styles.cpLeft]: !isRight && isCp,
        [styles.cpRight]: isRight && isCp,
    });

    const title = useMemo(() => {
        if (isRight) return "Switch to next section";
        return "Switch to previous section";
    }, [isRight])

    return <button className={className} title={title}>
        {isCp && !isRight && <i className="fa-solid fa-chevron-left"></i>}
        {isCp && isRight && <i className="fa-solid fa-chevron-right"></i>}
    </button>
}
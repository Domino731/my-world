import styles from './styles.module.scss';
import nameImg from '../../../assets/cyberpunk/images/name.png';
import cpClassStyles from "../styles/styles.module.scss";
import {Slider} from "./Slider.tsx";

export const CpHero = () => <div className={styles.container}>
        {/*TODO: ADD AI IMAGE */}
        <img src={nameImg} className={styles.image} alt="Dominik Orzechowski"/>
    <div className={styles.titleWrapper}>
        <Slider/>
        <h1 className={styles.title}>

        </h1>
    </div>
       <span className={cpClassStyles.razorBlack}/>
</div>
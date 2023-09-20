import styles from './styles.module.scss';
import nameImg from '../../../assets/cyberpunk/images/name.png';
import cpClassStyles from "../styles/styles.module.scss";

export const CpHero = () => <div className={styles.container}>
        {/*TODO: ADD AI IMAGE */}
        <img src={nameImg} className={styles.image} alt="Dominik Orzechowski"/>
          <h1 className={styles.title}>FULL-STACK DEVELOPER</h1>
       <span className={cpClassStyles.razorBlack}/>
</div>
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from "./sliderStyles.module.scss";
import ambitiousImg from "../../../assets/cyberpunk/images/ambitious.png";
import creativeImg from "../../../assets/cyberpunk/images/creative.png";
import responsibleImg from "../../../assets/cyberpunk/images/responsible.png";
import teamPlayerImg from "../../../assets/cyberpunk/images/team-player.png";
import confidentImg from "../../../assets/cyberpunk/images/confident.png"

export const Slider = () => {

    let data = [{
        title: "Ambitious",
        img: ambitiousImg
    },
        {
            title: 'Creative',
            img: creativeImg
        },
        {
            title: 'Responsible',
            img: responsibleImg
        },
        {
            title: 'Team Player',
            img: teamPlayerImg
        },
        {
            title: 'Confident',
            img: confidentImg
        }
    ];

    return (
        <div className={styles.container}>
        <Carousel
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={false}
            axis='vertical'
        >
                {data.map((word, index) => (
                    <div key={index} className={styles.sliderItem}>
                       <div className={styles.title}>
                           {word.title}
                       <img src={word.img}/>
                       </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
};
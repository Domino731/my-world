import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from "./sliderStyles.module.scss";
import ambitiousImg from "../../../assets/cyberpunk/images/ambitious.png";
import creativeImg from "../../../assets/cyberpunk/images/creative.png";

export const Slider = () => {

    let data = [{
        title: "Ambitious",
        img: ambitiousImg
    },
        {
            title: 'Creative',
            img: creativeImg
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
                    <div key={index}><img src={word.img} className={styles.image}/></div>
                ))}
            </Carousel>
        </div>
    )
};
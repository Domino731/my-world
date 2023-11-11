import {Header} from "./sections/Header";
import {Hero} from "./sections/Hero/Hero.tsx";
import {AboutMe} from "./sections/AboutMe";
import {Skills} from "./sections/Skills";
import {Projects} from "./sections/Projects";
import {Contact} from "./sections/Contact";
import {Footer} from "./sections/Footer";

export const App = () => {
    return <>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
}
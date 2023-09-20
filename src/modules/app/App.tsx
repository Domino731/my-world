import {Header} from "./sections/Header";
import {Hero} from "./sections/Hero/Hero.tsx";
import {AboutMe} from "./sections/AboutMe";
import {Skills} from "./sections/Skills";
import {Projects} from "./sections/Projects";

export const App = () => {
    return <>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
    </>
}
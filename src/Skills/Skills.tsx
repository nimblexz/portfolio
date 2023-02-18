import s from './Skills.module.scss'
import {SkillsComponent} from "./SkillsComponent/SkillsComponent";
import react from './../assets/image/react.jpg'
import redux from './../assets/image/redux.gif'
import js from './../assets/image/js.jpg'
import {Title} from "../components/Title/Title";
import {Slide} from "react-awesome-reveal";

export function Skills() {
    return (
        <div className={s.skills} id='skills'>
            <div className={s.skillsCont}>
                <Title title={'My Skills'}/>
                <Slide className={s.slide}>
                <div className={s.skillsComponentCont}>

                        <SkillsComponent title={'REACT'} description={'react'} img={react}/>
                        <SkillsComponent title={'REDUX'}
                                         description={'1111111111111111111111111111111111111111111111111111111111111'}
                                         img={redux}/>
                        <SkillsComponent title={'JS'} description={'js'} img={js}/><SkillsComponent title={'REACT'}
                                                                                                    description={'react'}
                                                                                                    img={react}/>
                        <SkillsComponent title={'REDUX'}
                                         description={'1111111111111111111111111111111111111111111111111111111111111'}
                                         img={redux}/>
                        <SkillsComponent title={'JS'} description={'js'} img={js}/>
                </div>
                </Slide>
            </div>
        </div>
    )
}
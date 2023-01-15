import s from './Skills.module.scss'
import {SkillsComponent} from "./SkillsComponent/SkillsComponent";
import react from './../assets/image/react.jpg'
import redux from './../assets/image/redux1.gif'
import js from './../assets/image/js.jpg'
export function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.skillsCont}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skillsComponentCont}>
                    <SkillsComponent title={'REACT'} description={'react'} img={react}/>
                    <SkillsComponent title={'REDUX'} description={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={redux}/>
                    <SkillsComponent title={'JS'} description={'js'} img={js}/>
                </div>
            </div>
        </div>
    )
}
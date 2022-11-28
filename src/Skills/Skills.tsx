import s from './Skills.module.css'
import {SkillsComponent} from "./SkillsComponent/SkillsComponent";

export function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.skillsCont}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skillsComponentCont}>
                    <SkillsComponent title={'React'} description={'1'}/>
                    <SkillsComponent title={'Redux'} description={'2пппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппп'}/>
                    <SkillsComponent title={'JS'} description={'3'}/>
                </div>
            </div>
        </div>
    )
}
import s from './Skills.module.css'
import {SkillsComponent} from "./SkillsComponent/SkillsComponent";

export function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.skillsCont}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skillsComponentCont}>
                    <SkillsComponent title={'React'} description={'1'} img={'https://img4.goodfon.ru/original/1440x900/5/a5/react-framework-logo.jpg'}/>
                    <SkillsComponent title={'Redux'} description={'2пппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппп'} img={'https://i.ytimg.com/vi/agYjjsOeRMM/maxresdefault.jpg'}/>
                    <SkillsComponent title={'JS'} description={'3'} img={'https://deadlylaugh.ru/group/id-111111163/photo/w/5dffa45fdb931e050b89894e830204fe.jpg'}/>
                </div>
            </div>
        </div>
    )
}
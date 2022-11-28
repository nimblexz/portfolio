
import s from "./Projects.module.css";
import {ProjectComponent} from "./ProjectsComponent/ProjectComponent";


export function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.projectsCont}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projectsCompCont}>
                    <ProjectComponent title={'Todolist'} details={'pew-pew'} img={'https://miro.medium.com/max/1200/1*odW0CyTVxMVt5s3yhjjOhw.png'}/>
                    <ProjectComponent title={'Social-Network'} details={'puff-puff'} img={'https://i.morioh.com/e193bd0218.png'}/>
                </div>
            </div>
        </div>
    )
}
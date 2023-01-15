import todolist from './../assets/image/todolist.jpg'
import social_network from './../assets/image/socialnetwork.jpg'
import s from "./Projects.module.scss";
import {ProjectComponent} from "./ProjectsComponent/ProjectComponent";


export function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.projectsCont}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projectsCompCont}>
                    <ProjectComponent title={'TODOLIST'} details={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={todolist}/>
                    <ProjectComponent title={'SOCIAL-NETWORK'} details={'1111111111111111111111111111111111111111111111111111111'} img={social_network}/>
                </div>
            </div>
        </div>
    )
}
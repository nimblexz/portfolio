import todolist from './../assets/image/todolist.jpg'
import social_network from './../assets/image/socialnetwork.jpg'
import s from "./Projects.module.scss";
import {ProjectComponent} from "./ProjectsComponent/ProjectComponent";
import {Title} from "../Title/Title";


export function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.projectsCont}>
                <Title title={'Projects'}/>
                <div className={s.projectsCompCont}>
                    <ProjectComponent title={'TODOLIST'} details={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={todolist}/>
                    <ProjectComponent title={'SOCIAL-NETWORK'} details={'1111111111111111111111111111111111111111111111111111111'} img={social_network}/><ProjectComponent title={'TODOLIST'} details={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={todolist}/>
                    <ProjectComponent title={'SOCIAL-NETWORK'} details={'1111111111111111111111111111111111111111111111111111111'} img={social_network}/>
                </div>
            </div>
        </div>
    )
}
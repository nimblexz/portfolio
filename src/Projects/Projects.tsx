import todolist from './../assets/image/todolist.jpg'
import social_network from './../assets/image/socialnetwork.jpg'
import s from "./Projects.module.scss";
import {ProjectComponent} from "./ProjectsComponent/ProjectComponent";
import {Title} from "../components/Title/Title";
import {Slide} from "react-awesome-reveal";



export function Projects() {
    return (
        <div className={s.projects} id='projects'>
            <div className={s.projectsCont}>
                <Title title={'Projects'}/>
                <Slide direction={"right"} className={s.slide}>
                <div className={s.projectsCompCont}>
                    <ProjectComponent title={'TODOLIST'} details={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={todolist}/>
                    <ProjectComponent title={'SOCIAL-NETWORK'} details={'1111111111111111111111111111111111111111111111111111111'} img={social_network}/><ProjectComponent title={'TODOLIST'} details={'111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'} img={todolist}/>
                    <ProjectComponent title={'SOCIAL-NETWORK'} details={'1111111111111111111111111111111111111111111111111111111'} img={social_network}/>
                </div>
                </Slide>
            </div>
        </div>
    )
}
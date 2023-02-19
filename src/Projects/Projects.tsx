import todolist from './../assets/image/todolist.jpg'
import social_network from './../assets/image/socialnetwork.jpg'
import cards from './../assets/image/cards.jpg'
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
                        <ProjectComponent title={'TODOLIST'} details={'Used technologies:React/Redux/Redux-Toolkit/React-router-dom v6/Jest(Unit-Tests)/Storybook/Axios /Formik/Material UI. Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow,unit-tests and etc.'}
                                          href={'https://nimblexz.github.io/todolist/'} img={todolist}/>
                        <ProjectComponent title={'SOCIAL NETWORK'}
                                          details={'Used technologies:React/Redux/TypeScript/Redux-thunk/React-router-dom v6/React-hook-' +
                                              'form/Axios/Jest.' +
                                              ' Social network app with using react hooks, routing, lazy loading, working with REST api, login/logout flow, pagination, form and validation/file uploading using unit-tests for code workability check.'}
                                          href={'https://nimblexz.github.io/social-network/'} img={social_network}/>
                        <ProjectComponent title={'CARDS APP'}
                                          details={"Used technologies:React/Redux-Toolkit/TypeScript/React-router-dom v6/Axios/Material UI/Formik/SCSS/Git, Github. Creating learning app in team with using git, work with\n" +
                                              "axios(CRUD)."}
                                          href={'https://nimblexz.github.io/cards/#/login'} img={cards}/>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
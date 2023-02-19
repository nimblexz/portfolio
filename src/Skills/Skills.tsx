import s from './Skills.module.scss'
import {SkillsComponent} from "./SkillsComponent/SkillsComponent";
import react from './../assets/image/react.jpg'
import redux from './../assets/image/redux.gif'
import sass from  './../assets/image/sass.png'
import js from './../assets/image/js.jpg'
import html from './../assets/image/html.jpg'
import storybook from './../assets/image/storybook.png'
import jest from './../assets/image/jest-logo.png'
import reacthookform from './../assets/image/react-hook-form.jpg'
import git from './../assets/image/git.jpeg'
import postman from './../assets/image/postman.jpg'
import {Title} from "../components/Title/Title";
import {Slide} from "react-awesome-reveal";

export function Skills() {
    return (
        <div className={s.skills} id='skills'>
            <div className={s.skillsCont}>
                <Title title={'My Skills'}/>
                <Slide className={s.slide}>
                    <div className={s.skillsComponentCont}>

                        <SkillsComponent title={'JS/TS'}
                                         description={'Native JS: classes, functions, working with arrays and objects, Promises, REST Api; TS: as type, generics, infer.'} backgroundSize={'140%'}
                                         img={js}/>
                        <SkillsComponent title={'REACT'}
                                         description={'Class and functional components, components life-cycle methods, props, hooks, HOC.'} backgroundSize={'90%'}
                                         img={react}/>
                        <SkillsComponent title={'REDUX'} description={'FLUX-conception data flow, reducer, dispatch, redux-thunk, redux-toolkit.'} img={redux} backgroundSize={'250%'}/>
                        <SkillsComponent title={'SASS/SCSS'}
                                         description={'Common CSS, variables, mixins, functions, pseudo-classes, pseudo-elements, media queries.'}
                                         img={sass}/>
                        <SkillsComponent title={'HTML5'}
                                         description={'Responsive design, flex, links, headers, images and etc.'}
                                         img={html}/>
                        <SkillsComponent title={'STORYBOOK'} description={'Testing components and modules, decorators.'} img={storybook} backgroundSize={'100%'}/>
                        <SkillsComponent title={'JEST'} description={'Testing chosen modules and the whole applications workability.'} img={jest} backgroundSize={'130%'}/>
                        <SkillsComponent title={'REACT-HOOK-FORM'} description={'Forms, validations, submitting with servers responding.'} img={reacthookform} backgroundSize={'100%'}/>
                        <SkillsComponent title={'GIT'} description={'Creating new repositories, push- and pull-requests, merge, repos cloning.'} img={git} backgroundSize={'100%'}/>
                        <SkillsComponent title={'POSTMAN'} description={'Using get, post, put, delete requests to the server, processing results and errors.'} img={postman} backgroundSize={'100%'}/>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
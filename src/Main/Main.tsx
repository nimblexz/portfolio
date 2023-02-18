import s from './Main.module.scss'
import photo from './../photo/photo_2022-06-15_15-43-19 (2).jpg'
import {ParticlesComponent} from "../components/ParticlesComponent/ParticlesComponent";
import {JackInTheBox} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';

export function Main() {
    return (<JackInTheBox>
            <div className={s.main}>
                <ParticlesComponent/>

                <div className={s.mainCont}>
                    <div className={s.hello}>
                    <span className={s.helloIAm}>Hello
                        <span className={s.point}>.</span>
                    </span>
                        <span className={s.helloIAm}>I am
                            <span className={s.frontend}><ReactTypingEffect text={'Frontend Developer'}/></span>
                    </span>
                        <span className={s.helloIAm}>Emil</span>
                    </div>
                        <Tilt className={s.tilt} tiltMaxAngleX={10} tiltMaxAngleY={10} >
                            <img src={photo} className={s.photo} alt='avatar'/>
                        </Tilt>

                </div>

            </div>
        </JackInTheBox>
    )
}
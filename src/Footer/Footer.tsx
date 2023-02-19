import s from "./Footer.module.scss";
import telegramicon from './../assets/image/telegram.svg'
import linkedinicon from './../assets/image/linkedin.svg'
import githubicon from './../assets/image/github.svg'
import codewarsicon from './../assets/image/codewars.svg'
import {Title} from "../components/Title/Title";
export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerCont}>
                <Title title={'Emil Khayrulin'}/>
                <div className={s.footerDiv}>
                    <div className={s.div}>
                        <a href='https://t.me/nimblexz' target={'_blank'}>
                            <img src={telegramicon} className={s.icon} alt='telegram'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://www.linkedin.com/in/nimblexz/' target={'_blank'}>
                            <img src={linkedinicon} className={s.icon} alt='linkedin'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://github.com/nimblexz' target={'_blank'}>
                            <img className={s.icon} src={githubicon} alt='github'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://www.codewars.com/users/nimblexz' target={'_blank'}>
                            <img src={codewarsicon} className={s.icon} alt='codewars'/>
                        </a>
                    </div>

                </div>
                <h2 className={s.foot}>©️
                    2023 All rights reserved </h2>
            </div>
        </div>
    )
}
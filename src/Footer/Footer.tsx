import s from "./Footer.module.scss";
import telegramicon from './../assets/image/telegram.svg'
import linkedinicon from './../assets/image/linkedin.svg'
import githubicon from './../assets/image/github.svg'
import codewarsicon from './../assets/image/codewars.svg'
export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerCont}>
                <h2 className={s.title}>Emil Khayrulin</h2>
                <div className={s.footerDiv}>
                    <div className={s.div}>
                        <a href='https://t.me/nimblexz'>
                            <img src={telegramicon} className={s.icon} alt='telegram'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://www.linkedin.com/in/nimblexz/'>
                            <img src={linkedinicon} className={s.icon} alt='linkedin'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://github.com/nimblexz'>
                            <img className={s.icon} src={githubicon} alt='github'/>
                        </a>
                    </div>
                    <div className={s.div}>
                        <a href='https://www.codewars.com/users/nimblexz'>
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
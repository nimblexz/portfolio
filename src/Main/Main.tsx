import s from './Main.module.scss'
import photo from './../photo/photo_2022-06-15_15-43-19 (2).jpg'
export function Main() {
    return (
        <div className={s.main}>
            <div className={s.mainCont}>
                <div className={s.hello}>
                    <span className={s.helloIAm}>Hello
                        <span className={s.point}>.</span>
                    </span>
                    <span className={s.helloIAm}>I am
                        <span className={s.frontend}>Front-end Developer</span>
                    </span>
                    <span className={s.helloIAm}>Emil</span>
                </div>
                <img src={photo} className={s.photo}/>
            </div>
        </div>
    )
}
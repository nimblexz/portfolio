import s from './Main.module.css'

export function Main() {
    return (
        <div className={s.main}>
            <div className={s.mainCont}>
                <div className={s.hello}>
                    <span>Hi There</span>
                    <h2>I am Emil Khayrulin</h2>
                    <span>Frontend developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}
import s from "./Hiring.module.css";

export function Hiring() {
    return (
        <div className={s.hiring}>
            <div className={s.hiringCont}>
                <h2 className={s.title}>I am considering options for remote work</h2>
                <a href={''} className={s.foot}>recruit me</a>
            </div>
        </div>
    )
}
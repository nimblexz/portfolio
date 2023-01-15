import s from "./Hiring.module.scss";

export function Hiring() {
    return (
        <div className={s.hiring}>
            <div className={s.hiringCont}>
                <h2 className={s.title}>I am available for Freelance</h2>
                <a href={''} className={s.foot}>recruit me</a>
            </div>
        </div>
    )
}
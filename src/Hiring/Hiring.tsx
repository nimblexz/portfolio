import s from "./Hiring.module.scss";
import {Title} from "../Title/Title";

export function Hiring() {
    return (
        <div className={s.hiring}>
            <div className={s.hiringCont}>
                <Title title={'I am available for Freelance'}/>
                <a href={''} className={s.foot}>recruit me</a>
            </div>
        </div>
    )
}
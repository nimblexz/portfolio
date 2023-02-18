import s from "./Hiring.module.scss";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Slide} from "react-awesome-reveal";


export function Hiring() {
    return (
        <div className={s.hiring}>
            <div className={s.hiringCont}>
                <Slide>
                <Title title={'I am available for Freelance'}/>
                <Button title={'Hire me'} backgroundColor={'#111111'}/>
                </Slide>
            </div>
        </div>
    )
}
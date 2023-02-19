import s from "./Hiring.module.scss";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Slide} from "react-awesome-reveal";


export function Hiring() {
    return (
        <div className={s.hiring}>
            <Slide className={s.slide}>
                <div className={s.hiringCont}>
                    <Title title={'I am available for work'}/>
                    <Button  title={'Hire me'} backgroundColor={'#111111'} isbutton={false}/>
                </div>
            </Slide>
        </div>
    )
}
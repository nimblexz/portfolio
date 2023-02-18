import s from "./Contacts.module.scss";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Slide} from "react-awesome-reveal";

export function Contacts() {
    return (
        <div className={s.contacts} id='contacts'>
            <div className={s.contactsCont}>
                <Title title={'Contacts'}/>
                <Slide className={s.slide} direction={"right"}>
                    <form className={s.form}>
                        <input placeholder={'name'} className={s.input}/>
                        <input placeholder={'e-mail'} className={s.input}/>
                        <textarea placeholder={'message'} className={s.textarea}/>
                    </form>
                </Slide>
                <Button title={'Send'} backgroundColor={'#0b0b0b'}/>

            </div>
        </div>
    )
}
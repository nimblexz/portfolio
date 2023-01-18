import s from "./Contacts.module.scss";
import {Title} from "../Title/Title";

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.contactsCont}>
                <Title title={'Contacts'}/>
                <form className={s.form}>
                    <input value={'input'} className={s.input}/>
                    <input value={'input'} className={s.input}/>
                    <textarea value={'taxtarea'} className={s.textarea}/>
                </form>
                <a href={'e'} className={s.send}>Send</a>

            </div>
        </div>
    )
}
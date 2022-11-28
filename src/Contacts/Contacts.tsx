import s from "./Contacts.module.css";

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.contactsCont}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input value={'input'} className={s.input}/>
                    <input value={'input'} className={s.input}/>
                    <textarea value={'taxtarea'} className={s.textarea}/>
                </form>
                <h2 className={s.send}>Send</h2>

            </div>
        </div>
    )
}
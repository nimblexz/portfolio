import s from "./Contacts.module.scss";
import {Title} from "../components/Title/Title";
import {Button} from "../components/Button/Button";
import {Slide} from "react-awesome-reveal";
import {useForm} from "react-hook-form";
import axios from "axios";

type FormData = {
    name: string
    eMail: string
    message: string
};

export function Contacts() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormData>(
        {
            defaultValues: {
                name: '',
                eMail: '',
                message: ''
            }
        }
    );
    const onSubmit = (data: FormData) => {
        axios.post('https://gmail-6gf19icax-hhfvbkm1973-gmailcom.vercel.app/send',data).then(()=>console.log('213')).catch((err)=>(console.log(err)))
        reset()
    }


    return (
        <div className={s.contacts} id='contacts'>
            <div className={s.contactsCont}>
                <Title title={'Contacts'}/>
                <Slide className={s.slide} direction={"right"}>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} className={s.input} placeholder={'name'}/>
                        <input {...register("eMail")} placeholder={'e-mail'} className={s.input}/>
                        <textarea {...register("message")} placeholder={'message'} className={s.textarea}/>
                        <Button title={'Send'} backgroundColor={'#0b0b0b'} isbutton={true}/>
                    </form>
                </Slide>


            </div>
        </div>
    )
}
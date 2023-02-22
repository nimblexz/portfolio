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
    const {register, handleSubmit, reset, formState: {errors,isValid}} = useForm<FormData>(
        {
            mode:"onBlur",
            defaultValues: {
                name: '',
                eMail: '',
                message: ''
            }
        }
    );
    const onSubmit = (data: FormData) => {
        axios.post('https://gmail-6gf19icax-hhfvbkm1973-gmailcom.vercel.app/send', data).then(() => {}).catch((err) => (console.log(err)))
        reset()
    }


    return (
        <div className={s.contacts} id='contacts'>
            <div className={s.contactsCont}>
                <Title title={'Contacts'}/>
                <Slide className={s.slide} direction={"right"}>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", {setValueAs:value => value.trim(),required: 'Name required',minLength:{value:3,message:'Minimum of 3 symbols'}})} className={s.input}
                               placeholder={'name'} />
                        <div style={{
                            height: 30,
                            color: 'red',
                        }}>{errors?.name && <>{errors?.name?.message || 'error'}</>}</div>
                        <input {...register("eMail", {pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,required: 'E-mail required',})} placeholder={'e-mail'}
                               className={s.input} />
                        <div style={{
                            height: 30,
                            color: 'red'
                        }}>{errors?.eMail && <>{errors?.eMail?.message || 'Incorrect E-mail'}</>}</div>
                        <textarea {...register("message",{required: 'Message required',setValueAs:value => value.trim(),minLength:{value:10,message:'Minimum of 10 symbols'}})} placeholder={'message'}
                                  className={s.textarea}/>
                        <div style={{
                            height: 30,
                            color: 'red'
                        }}>{errors?.message && <>{errors?.message?.message || 'error'}</>}</div>

                        <Button title={'Send'} backgroundColor={'#0b0b0b'} isbutton={true} disabled={!isValid}/>
                    </form>
                </Slide>


            </div>
        </div>
    )
}
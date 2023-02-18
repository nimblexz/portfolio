import s from './Button.module.scss'

type ButtonProps ={
    title:string
    backgroundColor:string
}
export function Button(props:ButtonProps){
    return <button type={"submit"} style={{backgroundColor:props.backgroundColor}} className={s.button}>{props.title}</button>
}
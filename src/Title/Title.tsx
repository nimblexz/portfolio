import s from './Title.module.scss'

type TitleProps={
    title:string
}
export function Title(props:TitleProps){
    return <h2 className={s.title}>{props.title}</h2>
}
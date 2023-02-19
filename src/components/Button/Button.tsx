import s from './Button.module.scss'

type ButtonProps = {
    title: string
    backgroundColor: string
}

export function Button(props: ButtonProps) {
    return <div className={s.Button}>
        <button type="submit" style={{backgroundColor: props.backgroundColor}}
                className={s.button}>{props.title}</button>
    </div>
}
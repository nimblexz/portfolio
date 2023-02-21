import s from './Button.module.scss'
import {Link} from "react-scroll";
import React from "react";

type ButtonProps = {
    title: string
    backgroundColor: string
    isbutton:boolean
    disabled?:any
}

export function Button(props: ButtonProps) {
    return <div className={s.Button}>
        {props.isbutton ? <button  disabled={props.disabled} type="submit" style={{backgroundColor: props.backgroundColor,opacity:props.disabled?0.5:1}}
                className={s.button}>{props.title}</button>: <Link className={s.button} href='' to='contacts' activeClass={s.active} spy={true} smooth={true} offset={1} duration={500}>Hire me</Link>}
    </div>
}
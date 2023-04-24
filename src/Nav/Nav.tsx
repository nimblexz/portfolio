import React from "react";
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export function Nav() {
    return (
        <div className={s.nav}>
            <a  href={'https://drive.google.com/file/d/1WAnOFOZBqYd-YQzQWcCrMIREjsrjEABS/view?usp=share_link'} target={'_blank'}>My CV</a>
            <Link href='' to='home' activeClass={s.active} spy={true} smooth={true} offset={1} duration={500}>Home</Link>
            <Link href='' to='skills' activeClass={s.active} spy={true} smooth={true} offset={1} duration={500}>Skills</Link>
            <Link href='' to='projects' activeClass={s.active} spy={true} smooth={true} offset={1} duration={500}>Projects</Link>
            <Link href='' to='contacts' activeClass={s.active} spy={true} smooth={true} offset={1} duration={500}>Contacts</Link>
        </div>
    )
}
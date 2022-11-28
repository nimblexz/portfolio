import s from "./Footer.module.css";

export function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerCont}>
                <h2 className={s.title}>Emil Khayrulin</h2>
                <div className={s.footerDiv}>
                    <div className={s.div}></div>
                    <div className={s.div}></div>
                    <div className={s.div}></div>
                    <div className={s.div}></div>

                </div>
                <h2 className={s.foot}>©️
                    2022 All rights reserved </h2>
            </div>
        </div>
    )
}
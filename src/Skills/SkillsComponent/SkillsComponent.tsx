import s from './SkillsComponent.module.scss'

type SkillsComponentPropsType = {
    title: string
    description: string
    img: string
}

export function SkillsComponent(props: SkillsComponentPropsType) {
    return (
        <div className={s.skillsComponent}>
            <div className={s.imageTitle} style={{backgroundImage: `url(${props.img})`}}>
                <div className={s.image}></div>
            </div>
            <div className={s.skillData}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    )
}
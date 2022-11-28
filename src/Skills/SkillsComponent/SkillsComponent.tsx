import s from './SkillsComponent.module.css'

type SkillsComponentPropsType = {
    title: string
    description: string
}

export function SkillsComponent(props: SkillsComponentPropsType) {
    return (
        <div className={s.skillsComponent}>
            <div className={s.imageTitle}>
                <div className={s.image}></div>
                <h3 className={s.title}>{props.title}</h3>
            </div>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}
import s from "./ProjectsComponent.module.scss";
type ProjectComponentPropsType={
    title:string
    details:string
    img:string
}
export function ProjectComponent(props:ProjectComponentPropsType) {
    return (
        <div className={s.projectComponent}>
            <div className={s.projectImg} style={{backgroundImage:`url(${props.img})`}}>
                <a href={''} className={s.view}>View</a>
            </div>
            <div className={s.projectData}>
                <h3 className={s.name}>{props.title}</h3>
                <span className={s.description}>{props.details}</span>
            </div>
        </div>
    )
}
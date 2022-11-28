import s from "./ProjectsComponent.module.css";
type ProjectComponentPropsType={
    title:string
    details:string
    img:string
}
export function ProjectComponent(props:ProjectComponentPropsType) {
    return (
        <div className={s.projectComponent}>
            <div className={s.projectImg} style={{backgroundImage:`url(${props.img})`}}>
                <span className={s.view}>view</span>
            </div>
            <div className={s.projectData}>
                <h3 className={s.name}>{props.title}</h3>
                <span className={s.description}>{props.details}</span>
            </div>
        </div>
    )
}
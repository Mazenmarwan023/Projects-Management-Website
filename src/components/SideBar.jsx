export default function SideBar({projectsList,handleClick,onSelectProject,selectedProject,selectingProject}){

    return(
        <aside className="side-bar">
            <div>
                <h2>Your Projects</h2>
                <button id="add-button" onClick={handleClick}>+ Add Project</button>
            </div>
            <ul className="projects-list">
                {projectsList.map((project)=>{

                    return<li key={project.id}><a className={(selectingProject&&selectedProject!==undefined && project.id===selectedProject.id)? 'highlight' : undefined} onClick={()=>onSelectProject(project.id)}>{project.title}</a></li>
                })}
            </ul>
        </aside>
    )
}
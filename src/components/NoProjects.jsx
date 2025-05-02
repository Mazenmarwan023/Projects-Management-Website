import logo from '../assets/no-projects.png'

export default function NoProjectSection({handleCreateProject}){
    return(
        <section className="no-project-section">
            <img src={logo} alt="logo-image" />
            <h1>No Project Selected</h1>
            <p>Select a project or get started with a new one</p>
            <button onClick={handleCreateProject}>Create new project</button>
        </section>
    )
}
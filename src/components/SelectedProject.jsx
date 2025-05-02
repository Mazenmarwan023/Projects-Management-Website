import Tasks from "./Tasks"

export default function({onDelete,selectedProject,onAddTask, onDeleteTask,tasks}){
    const formattedDate=new Date(selectedProject.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })

    return (
        <section className="selected-project">
            <header>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h1>{selectedProject.title}</h1>
                    <button id="redHover" onClick={()=>onDelete(selectedProject.id)}>Delete</button>
                </div>
                <p>{formattedDate}</p>
                <p style={{whiteSpace:'pre-wrap'}}><span style={{fontWeight:'bold'}}>Description:</span> {selectedProject.description}</p>
            </header>
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} projectId={selectedProject.id} />
        </section>
    )
}
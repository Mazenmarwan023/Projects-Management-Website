import { useState,useRef } from "react";
import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSection from "./components/NoProjects";
import SelectedProject from "./components/SelectedProject";



function App() {
  const [addOrSelectProject,setAddOrSelectProject]= useState("cancelProject") // cancel or add or the id of the selected project

  // const [project,setProject]= useState({title:'',description:'',date:''}) i used refs instead of using that approach but i prefer states
  // and we used refs as we only want the values of the inputs only when we click save button and we don't want their values while typing but using state is correct as well,
  // but to decrease the number of states and to practise refs.

  const [projectsState,setProjectsState]=useState({projects:[],tasks:[]}) // array of objects 

  const selectedProject=useRef() // here i used ref as i don't want to use state to decrease number of states and i can't use 
  // a variable as it will not save the value in it all time like ref

  // function handleChangeInput(event,type){
  //     setProject(oldProject=>{
  //         return {...oldProject,[type]:event.target.value}
  //     })
  // }


  function handleSave(newProject){
      const addedProject={...newProject,id:Math.random()} // we do destructuring of the newProject as we want to add id key for every project
      
      setProjectsState(oldState=>{
        return {...oldState,projects:[...oldState.projects,addedProject]}
      })
      
      setAddOrSelectProject("cancelProject")
  }

  function onAddProject(){
    setAddOrSelectProject("addProject")
  }

  function cancelProject(){
    setAddOrSelectProject("cancelProject")
  }

  function handleSelectProject(id){

    selectedProject.current=projectsState.projects.find((project)=> project.id===id)
    
    setAddOrSelectProject(id)
  }

  function deleteProject(id){

    setProjectsState(oldState=>{
      let newProjects=[...oldState.projects].filter((project=>{
        if(project.id !== id){
          return true
        }
        else{
          return false
        }

      }))

      return {...oldState,projects:newProjects}
    })

    setAddOrSelectProject("cancelProject")

  }



  function handleAddTask(task){
    const addedTask={text:task, id:Math.random(),projectId:selectedProject.current.id}
    setProjectsState(oldState=>{
      return {...oldState,tasks:[addedTask,...oldState.tasks]}
    })

  }

  function handleDeleteTask(id){
    const newTasks=projectsState.tasks.filter((task)=> task.id != id)
    console.log(`the new tasks are ${newTasks}`)

    setProjectsState(oldState=>{
      return {...oldState,tasks:newTasks}
    })
    
  }


  return (
    <main style={{display:'flex', height:'100vh'}}>
      <SideBar projectsList={projectsState.projects} selectingProject={addOrSelectProject!=='cancelProject' && addOrSelectProject!=='addProject'} handleClick={onAddProject} onSelectProject={handleSelectProject} selectedProject={selectedProject.current} />
      {addOrSelectProject==="cancelProject"? <NoProjectSection handleCreateProject={onAddProject} /> :addOrSelectProject==="addProject"? <NewProject onCancel={cancelProject} onSave={handleSave}/> : <SelectedProject  onDelete={deleteProject} selectedProject={selectedProject.current} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>}
    </main>
  );
}

export default App;

import { useRef, useState } from 'react'
import { styled } from 'styled-components'

const StyledDiv=styled.div`
        &{
        display:flex;
        align-items:center;
        }

        & button{
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2rem ;
        }
    `


export default function Tasks({tasks,onAdd,onDelete, projectId}){

    const [enteredTask,setEnteredTask]=useState([])

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        onAdd(enteredTask)
        setEnteredTask('')

    }

    const tasksOfThisProject=tasks.filter((task)=> task.projectId===projectId)
    
    
    return(
        <section className='tasks'>
            <h2>Tasks</h2>
            <StyledDiv >
                <input value={enteredTask} onChange={handleChange} type="text" />
                <button onClick={handleClick}>Add task</button>
            </StyledDiv>
            {tasksOfThisProject.length===0&& <p>This project has no tasks yet</p>}
            {tasksOfThisProject.length>0&&<ul>
                    {tasksOfThisProject.map((task)=>{
                        return <li key={task.id}>
                            <span>{task.text}</span>
                            <button id='redHover' onClick={()=> {onDelete(task.id)}}>Clear</button>
                        </li>
                    })}
                </ul> }
            
        </section>
    )
}
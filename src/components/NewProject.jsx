import { useRef, useState } from "react"
import Input from "./Input"
import Modal from "./Modal"

export default function NewProject({onCancel,onSave}){

    const title=useRef()
    const description=useRef()
    const dueDate=useRef()
    const modal=useRef()

    function handleSave(){
        const enteredTitle=title.current.value
        const enteredDescription=description.current.value
        const enteredDueDate=dueDate.current.value

        //the trim() function to remove excess white space at the beginning and end of the string.
        if (enteredTitle.trim()==='' || enteredDescription.trim()==='' || enteredDueDate.trim()===''){
            modal.current.open()
            return;
        }


        onSave({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })


    }
   


    return(
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2>Invalid inputs</h2>
                <p>Oops...Looks like you forgot to enter a vlaue.</p>
                <p>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <form onSubmit={(event)=>{event.preventDefault()}}>

                <div className="form-buttons">
                    <button id="cancel" onClick={onCancel}>Cancel</button>
                    <button id="save" onClick={handleSave}>Save</button>
                </div>

                <Input ref={title} label="Title" type="text"  />

                <Input ref={description} label="Description" istextarea   />
                
                <Input ref={dueDate} label="Due Date" type="date"   />
            </form>
        </>
    )
}
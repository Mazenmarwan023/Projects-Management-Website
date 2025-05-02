import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

// this will be a reusable Modal component to show any message not only Error messages.
export default function Modal({ref,buttonCaption,children}){
    const dialog=useRef()

    useImperativeHandle(ref,()=>{
        return{
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} style={{margin:'auto'}} >
            {children}
            <form method="dialog">
                <button>{buttonCaption}</button>
            </form>
        </dialog>,document.getElementById('modal-root')
    )
}
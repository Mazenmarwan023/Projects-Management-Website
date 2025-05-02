export default function Input({label,istextarea,...props}){
    return(
        <div className="input-group">
            <label>{label}</label>
            {istextarea? <textarea {...props}/> : <input  {...props} />}
        </div>
    )
}
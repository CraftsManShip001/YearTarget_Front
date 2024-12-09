import '../styles/Createmoon.css';
function Input({content,type,style,textstyle,id}){
    return(
        <div className="inputcontainer">
            <h2 className="inputext" style = {textstyle}>{content}</h2>
            <input type={type} id = {id} style = {style}></input>
        </div>
    )
}

export default Input;
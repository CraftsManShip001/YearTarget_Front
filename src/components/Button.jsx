import '../styles/Button.css';

function Button ({content,onClick,margin,width,height,fontSize,float,left}) {
    return(
        <button className='Button' style={{ margin:margin,width:width,height:height,fontSize:fontSize,float:float,marginLeft:left }} onClick={onClick} >
            {content}
        </button>
    )  
}
export default Button;
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Other(){
    let navigate = useNavigate();
    return(
        <div className='container'>
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 style = {{fontSize:'5rem'}}className='YearTarget tracking-in-expand'>{'니어 타겟\n'}</h1>
                    <h1 style = {{fontSize:'2rem'}}className='YearTarget text-focus-in'>{'이상한 짓 하지 말아주세요!!\n'}</h1>
                </div>
            </div>
            <Button
                    content = {"지구로 추락하기"}
                    onClick = {()=>{
                        navigate('/');
                    }}
                    margin = {"40vh auto"}
                />
        </div>
    )
}

export default Other;
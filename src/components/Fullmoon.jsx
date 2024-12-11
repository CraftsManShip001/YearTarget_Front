import '../styles/Fullmoon.css';
import fullmoon from '../assets/fullmoon.png';
import Button from "./Button.jsx";
import { useNavigate } from 'react-router-dom';


function Fullmoon({person,writers,nowriter,setNowriter}){
    let navigate = useNavigate();
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textconatiner">
                    <h1 className='YearTarget' style={{marginTop:'35%'}}>{'착륙자\n'}</h1>
                </div>
            </div>
            <img src = {fullmoon} className='fullmoon' style={{width:'90%'}}></img>
            <div className='wishcontainer'>
                <h2 className='writer'>작성자 : {writers[nowriter]}</h2>
                <div className='wish'><p style={{marginLeft:'3%', marginTop:'3%'}}>무슨 내용일까요? 1월 1일에 확인해보세요!</p></div>
                <div className='wishbutton'>
                    <Button
                        content = {"이전으로"}
                        onClick = {()=>{
                            if(0 === nowriter){
                                alert('첫번째 순서입니다!');
                            }
                            else{
                                setNowriter(nowriter-1);
                            }
                        }}
                        margin={'2vh 0.5rem'}
                        width={'8rem'}
                        height={'2.5rem'}
                        fontSize={'1.3rem'}
                        float={'left'}
                        marginLeft={'1rem'}
                    />
                    <Button
                        content = {"다음으로"}
                        onClick = {()=>{
                            if(nowriter === (person - 1)){
                                alert('마지막 순서입니다!');
                            }
                            else{
                                setNowriter(nowriter + 1);
                            }
                        }}
                        margin={'2vh 1rem'}
                        width={'8rem'}
                        height={'2.5rem'}
                        fontSize={'1.3rem'}
                        float={'left'}
                        marginLeft={'1rem'}
                    />
                </div>
            </div>
            <div className='buttoncontainer' style={{marginTop:'25%',paddingBottom:"75%"}}>
                <Button
                    content = {"지구로 추락하기"}
                    onClick = {()=>{
                        navigate('/');
                    }}
                    margin = {"3vh auto"}
                />
            </div>
        </div>
    )
}

export default Fullmoon;
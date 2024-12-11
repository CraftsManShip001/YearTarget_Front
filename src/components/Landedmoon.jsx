import '../styles/Createdmoon.css';
import { useNavigate } from 'react-router-dom';
import fullmoon from '../assets/fullmoon.png';
import Button from './Button';
import { useEffect, useRef } from 'react';

function Landedmoon({user_name,moonid,writer}){
    let navigate = useNavigate();
    const hasAlerted = useRef(false);
    useEffect(() => {
        if (writer === '' || user_name === '' || moonid === '') {
            if (!hasAlerted.current){
                alert('이상한 짓 하지 마세요');
                hasAlerted.current = true;
                navigate('/');
            }
        }
    }, [writer,user_name,moonid,navigate]);
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'달 착륙\n'}</h1>
                    <h5 className='showtext text-focus-in' style = {{fontSize: '1.1rem'}}>{`${user_name}님의 달에 착률했습니다!\n달에 ${user_name}님의 새해 목표를 추천해봅시다!`}</h5>
                </div>
            </div>
            <img src = {fullmoon} className='fullmoon'></img>
            <div className='buttoncontainer' style={{paddingBottom:"40%"}}>
                <Button
                    content = {"목표 작성하기"}
                    onClick = {()=>{
                        navigate('writing');
                    }}
                    margin = {"3vh auto"}
                />
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
export default Landedmoon;
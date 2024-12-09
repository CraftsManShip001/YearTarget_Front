import '../styles/Createdmoon.css';
import { useNavigate } from 'react-router-dom';
import fullmoon from '../assets/fullmoon.png';
import Button from './Button';
import { useEffect, useRef } from 'react';

function Mypagemoon({person,user_name}){
    let navigate = useNavigate();
    let today = new Date();
    let d_day = 31 - today.getDate();
    const hasAlerted = useRef(false);
    useEffect(() => {
        if (person === 0 || user_name === '') {
            if (!hasAlerted.current){
                alert('이상한 짓 하지 마세요');
                hasAlerted.current = true;
                navigate('/');
            }
        }
    }, [person, user_name, navigate]);
    
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget' style = {{marginTop:"7%"}}>{'마이페이지\n'}</h1>
                    <h4 className='showtext text-focus-in' style={{fontSize:'1.6rem'}}>{`새해까지 D-${d_day}`}</h4>
                    <h5 className='showtext text-focus-in' style={{fontSize:'1.2rem'}}>{`${user_name}님의 달이 떠올라 있습니다\n추천받은 목표는 새해가 되면 확인해봅시다!`}</h5>
                </div>
            </div>
            <img src = {fullmoon} className='fullmoon'></img>
            <div className='textcontainer' style={{marginTop:"55%"}}>
                <h3 className='text-focus-in' style={{color:'white', fontSize:'1.2rem'}}>현재까지 달 착륙 소원 : {person}개</h3>
            </div>
            <div className='buttoncontainer' style={{marginTop:'10%'}}>
                <Button
                    content = {"착륙자 확인하기"}
                    onClick = {()=>{
                        navigate('fullmoon');
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
export default Mypagemoon;
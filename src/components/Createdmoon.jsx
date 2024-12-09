import '../styles/Createdmoon.css';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fullmoon from '../assets/fullmoon.png';
import Button from './Button';

function Createdmoon({user_name,moonid}){
    let navigate = useNavigate();
    const hasAlerted = useRef(false);
    useEffect(() => {
        if (user_name === '' || moonid === '') {
            if (!hasAlerted.current){
                alert('이상한 짓 하지 마세요');
                hasAlerted.current = true;
                navigate('/');
            }
        }
    }, [user_name,moonid,navigate]);
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'달 생성\n'}</h1>
                    <h4 className='showtext text-focus-in' style={{fontSize:'1.4rem'}}>{`달 코드 : ${moonid}`}</h4>
                    <h5 className='showtext text-focus-in'>{`${user_name}님의 달이 떠올랐습니다!\n이제 목표를 작성해줄 친구들에게 달 소식을 전해보세요!`}</h5>
                </div>
            </div>
            <img src = {fullmoon} className='fullmoon'></img>
            <div className='buttoncontainer'>
                <Button
                    content = {"소식 전하기"}
                    onClick = {async()=>{
                        try {
                            await navigator.clipboard.writeText(moonid);
                            alert("클립보드에 복사되었습니다!");
                        } catch (error) {
                            alert("복사 실패! 브라우저 설정을 확인하세요.");
                        }
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
export default Createdmoon;
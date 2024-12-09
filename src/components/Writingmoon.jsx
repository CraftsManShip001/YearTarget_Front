import '../styles/Createdmoon.css';
import { useNavigate } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import fullmoon from '../assets/fullmoon.png';
import Input from './Input.jsx';
import Button from './Button';
import axios from 'axios';

const write = async (name,moonid,wish) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/moon/write`, {
            name:name,
            moonid:moonid,
            wish:wish
        });
        return response.data;
    } catch (error) {
        console.log('실패');
        return null;
    }
}

function Writingmoon({writer,moonid,user_name}){
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
    }, [moonid,writer,user_name,navigate]);
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'목표 작성\n'}</h1>
                </div>
            </div>
            <img src = {fullmoon} className='fullmoon'></img>
            <div className="fade-in-top" style={{marginTop:'70%'}}>
                <Input content={`${user_name}님의 2025년 추천 목표는?`} id = {"wish"} type = {"text"} textstyle = {{fontSize:'100%',marginBottom:'2%'}} style = {{width:'80%',height: '3em'}}/>
            </div>
            <div className='buttoncontainer' style={{marginTop:'20%'}}>
                <Button
                    content = {"소원 빌어주기"}
                    onClick = {async ()=>{
                        let user_wish = document.getElementById('wish').value;
                        if(user_wish === ''){
                            alert('소원없는 소원은 소원으로 인정되지 않습니다 적어주세요!');
                            navigate('/landmoon');
                        }
                        else{ 
                            let result = await write(writer,moonid,user_wish);
                            try{
                                if(result === 'Wish saved successfully'){
                                    alert('당신의 대신 빌어준 소원은 달에게 전달 되었습니다!');
                                    navigate('/');
                                }
                                else{
                                    alert('저런, 혹시 중복된 소원을 쓰셨나요? 당신의 소원을 전달하는데 실패했어요!');
                                    navigate('/landmoon');
                                }
                            }
                            catch(err){
                                alert('예기치 못한 오류가 발생했습니다');
                                navigate('/');
                            }
                            }}
                        }
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
export default Writingmoon;
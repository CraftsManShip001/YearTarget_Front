import '../styles/Createmoon.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Input from './Input.jsx';
import axios from 'axios';


const create = async (name,password,password_check) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/moon/newmoon`, {
            name: name,
            password: password,
            password_check:password_check
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

function Createmoon({setUser_name,setMoonid}){
    let navigate = useNavigate();
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'니어 타겟\n'}</h1>
                </div>
            </div>
            <div className="fade-in-top" style={{marginTop:'15%'}}>
                <Input content={'당신의 이름을 입력해주세요'} id = {"user_name"} type = {"text"} style = {{width:'80%',height: '1.75em'}}/>
                <Input content={'비밀번호를 입력해주세요'} id = {"user_password"} type = {"password"} style = {{width:'80%',height: '1.75em'}}/>
                <Input content={'비밀번호를 확인해주세요'} id = {"check_password"} type = {"password"} style = {{width:'80%',height: '1.75em'}}/>
                <div style={{marginTop:'40%', paddingBottom:'60%'}}>
                    <Button
                        content = {"새로운 달 생성하기"}
                        onClick = {async()=>{
                            let name = document.getElementById('user_name').value;
                            let password = document.getElementById('user_password').value;
                            let check_password = document.getElementById('check_password').value;
                            const id = await create(name,password,check_password);
                            if(id === 'Password is incorrect'){
                                alert('비밀번호가 일치하지 않습니다');
                                window.location.reload();
                            }
                            else if(id){
                                setMoonid(id);
                                setUser_name(name);
                                navigate('/createdmoon');
                            }
                            else{
                                alert('예기치 못한 오류가 발생했습니다');
                                window.location.reload();
                            }
                            
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Createmoon;
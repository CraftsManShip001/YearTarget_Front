import '../styles/Createmoon.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Input from './Input.jsx';
import axios from 'axios';

const mypage = async (moonid,password) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/moon/count`, {
            moonid:moonid,
            password:password
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

const getWriter = async (moonid,password) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/moon/person`, {
            moonid:moonid,
            password:password
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

function Mypage({setPerson,setUser_name,setWriters}){
    let navigate = useNavigate();
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'니어 타겟\n'}</h1>
                </div>
            </div>
            <div className="fade-in-top" style={{marginTop:'15%'}}>
                <Input content={'당신의 달 코드를 입력해주세요'} id = {"moonid"} type = {"text"} style = {{width:'80%',height: '1.75em'}}/>
                <Input content={'비밀번호를 입력해주세요'} id = {"password"} type = {"password"} style = {{width:'80%',height: '1.75em'}}/>
                <div style={{marginTop:'60%', paddingBottom:"40%"}}>
                    <Button
                        content = {"달 보러가기"}
                        onClick = {async()=>{
                            let moonid = document.getElementById('moonid').value;
                            let user_password = document.getElementById('password').value;
                            const result = await mypage(moonid,user_password);
                            const names = await getWriter(moonid,user_password);
                            if(result[1] === 401){
                                alert('비밀번호가 잘못된 것 같아요!');
                                window.location.reload();
                            }
                            else if(result[1] === 500){
                                alert("알 수 없는 에러가 발생했습니다! 혹시 달 코드를 이상하게 입력하셨나요?");
                                window.location.reload();
                            }
                            else{
                                try{
                                    setUser_name(result.name[0]);
                                    setPerson(result.person[0]);
                                    setWriters(names.names);
                                    navigate('mypagemoon');
                                }
                                catch(err){
                                    alert('예기치 못한 에러가 발생했습니다');
                                    navigate('/');
                                }
                            }
                            
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Mypage;
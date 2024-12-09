import '../styles/Createmoon.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Input from './Input.jsx';
import axios from 'axios';

const view = async (moonid) =>{
    const server = process.env.REACT_APP_SERVER;
    try {
        const response = await axios.post(`${server}/moon/view`, {
            moonid:moonid
        });
        return response.data;
    } catch (error) {
        return null;
    }
}

function Landmoon({setUser_name,setMoonid,setWriter}){
    let navigate = useNavigate();
    return(
        <div className="container">
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'니어 타겟\n'}</h1>
                </div>
            </div>
            <div className="fade-in-top" style={{marginTop:'15%'}}>
                <Input content={'당신의 이름을 입력해주세요'} id = {'user_name'} type = {"text"} style = {{width:'80%',height: '1.75em'}}/>
                <Input content={'착륙할 달 코드를 입력해주세요'} id = {'user_moonid'} type = {"text"} style = {{width:'80%',height: '1.75em'}}/>
                <div style={{marginTop:'60%'}}>
                    <Button
                        content = {"달 착륙하러 가기"}
                        onClick = { async ()=>{
                            let name = document.getElementById('user_name').value;
                            let moonid = document.getElementById('user_moonid').value;
                            let moon_name = await view(moonid);
                            setMoonid(moonid);
                            setWriter(name);
                            setUser_name(moon_name);
                            try{
                                if(moon_name[0] === "Moon ID not found"){
                                    alert("그런 달은 존재하지 않습니다");
                                    window.location.reload();
                                }
                                else if(moon_name){
                                    navigate('landedmoon');
                                }
                            }
                            catch(err){
                                alert("입력이 올바르지 않습니다");
                                window.location.reload();
                            }
                            
                        }}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Landmoon;
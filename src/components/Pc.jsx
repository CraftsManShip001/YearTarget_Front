import '../styles/Pc.css';
import { useState } from 'react';
import { useEffect } from 'react';

function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}



function Pc(){
    let [days,setDays] = useState(0);
    let [hours,setHours] = useState(0);
    let [mins,setMins] = useState(0);
    let [seconds,setSeconds] = useState(0);

    useEffect(() => {
        const updateCountdown = () => {
            const newYear = new Date(2025, 0, 1);
            const current = new Date();

            const diffTime = Math.abs(newYear - current);

            setDays(formatTime(Math.floor(diffTime / (1000 * 3600 * 24))));
            setHours(formatTime(Math.floor((diffTime / (1000 * 3600)) % 24)));
            setMins(formatTime(Math.floor((diffTime / (1000 * 60)) % 60)));
            setSeconds(formatTime(Math.floor((diffTime / 1000) % 60)));
        };
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const preventScroll = (event) => {
        event.preventDefault();
    };
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
    return(
        <div className='scroll'>
            <div className='container'>
                <div className="maincontainer">
                        <div className="timertext" style={{marginLeft:"12%"}}>
                            <p className="timer" id="day">{days}</p>
                            <span>days</span>
                        </div>

                        <div className="timertext">
                            <p className="timer" id="hours">{hours}</p>
                            <span>hours</span>
                        </div>

                        <div className="timertext">
                            <p className="timer" id="mins">{mins}</p>
                            <span>mins</span>
                        </div>

                        <div className="timertext">
                            <p className="timer" id="seconds">{seconds}</p>
                            <span>seconds</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Pc;
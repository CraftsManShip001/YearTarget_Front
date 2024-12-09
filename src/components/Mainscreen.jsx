import '../styles/Mainscreen.css';
import { useNavigate } from 'react-router-dom';
import moon from '../assets/moon.png';
import Button from './Button.jsx';

function Mainscreen(){
    let navigate = useNavigate();
    const preventScroll = (event) => {
        event.preventDefault();
    };
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
    return(
        <div className='scroll'>
            <div className='container'>
            <div className='maincontainer'>
                <div className='textcontainer'>
                    <h1 className='YearTarget tracking-in-expand'>{'니어 타겟\n'}</h1>
                    <h4 className='shorttext text-focus-in'>{'친구들의\n새해 목표를 정해주세요!'}</h4>
                </div>
                <div className='buttonContainer'>
                    <Button
                        content = {"START"}
                        onClick = {()=>{
                            navigate('/Mainmenu');
                        }}
                    />
                </div>
                <img src = {moon} className='mainmoon'></img>
            </div>
        </div>
        </div>
        
    )
}
export default Mainscreen;
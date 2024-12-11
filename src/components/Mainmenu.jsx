import '../styles/Mainmenu.css';
import circle from '../assets/Ellipse 1.png';
import { useNavigate } from 'react-router-dom';

function Mainmenu(){
    let navigate = useNavigate();
    return(
        <div className="container" style={{height:"100vh"}}>
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 className='YearTarget'>{'니어 타겟\n'}</h1>
                </div>
            </div>
            <div className='menucontainer roll-in-blurred-bottom'>
                <img src = {circle} className='menumoon'></img>
                <div className='textcontainer menu'>
                    <h2 className='text' onClick={()=>{
                        navigate('/createmoon');
                    }}>달 만들기</h2>
                    <h2 className='text' onClick={()=>{
                        navigate('/landmoon');
                    }}>달 착륙하기</h2>
                    <h2 className='text' onClick={()=>{
                        navigate('/mypage');
                    }}>마이페이지</h2>
                </div>
            </div>
            
        
        </div>
    )
}
export default Mainmenu;
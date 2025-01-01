import "../styles/App.css"
import {useState } from "react";
import {Routes,Route} from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import Mainscreen from './Mainscreen.jsx';
import Mainmenu from "./Mainmenu.jsx";
import Createmoon from "./Createmoon.jsx";
import Landmoon from "./Landmoon.jsx";
import Mypage from "./Mypage.jsx";
import Createdmoon from "./Createdmoon.jsx";
import Landedmoon from "./Landedmoon.jsx";
import Mypagemoon from "./Mypagemoon.jsx";
import Writingmoon from "./Writingmoon.jsx";
import Fullmoon from "./Fullmoon.jsx";
import Pc from './Pc.jsx';
import Other from "./Other.jsx";
import Aftermainmenu from "./Aftermainmenu.jsx";
import Aftermypage from "./Aftermypage.jsx";
import Aftermypages from "./Aftermypages.jsx";
import Afterfullmoon from "./Afterfullmoon.jsx";

const isPc = () => {
  const user = navigator.userAgent;
  if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
    	return 0;
  }else{
      return 1;
  }
}

function App() {
  const [moonid,setMoonid] = useState('');
  const [user_name,setUser_name] = useState('');
  const [writer,setWriter] = useState('');
  const [person,setPerson] = useState(0);
  const [writers,setWriters]  =useState([]);
  const [nowriter,setNowriter] = useState(0);
  const [wishes,setWishes] = useState('');
  let isAfter = 0;
  let today = new Date();
  if(isPc()){
    return <Pc></Pc>
  }
  if(today.getFullYear() === 2025) isAfter = 1;
  else isAfter = 0;

  return (
    <CSSTransition>
      <Routes> 
        <Route path = "/" element = {<Mainscreen></Mainscreen>}></Route>
        <Route path = "/mainmenu" element = {isAfter ? <Aftermainmenu></Aftermainmenu> : <Mainmenu></Mainmenu>}></Route>
        <Route path = "/createmoon" element = {<Createmoon setUser_name = {setUser_name} setMoonid = {setMoonid} ></Createmoon>}></Route>
        <Route path = "/landmoon" element = {<Landmoon setUser_name = {setUser_name} setMoonid = {setMoonid} setWriter = {setWriter} ></Landmoon>}></Route>
        <Route path = "/mypage" element = {<Mypage setPerson = {setPerson} setUser_name={setUser_name} setWriters = {setWriters}></Mypage>}></Route>
        <Route path = "/aftermypages" element = {<Aftermypages setPerson = {setPerson} setUser_name={setUser_name} setWriters = {setWriters} setWishes={setWishes}></Aftermypages>}></Route>
        <Route path = "/createdmoon" element = {<Createdmoon user_name = {user_name} moonid = {moonid}></Createdmoon>}></Route>
        <Route path = "/landmoon/landedmoon" element = {<Landedmoon user_name = {user_name} moonid = {moonid} writter = {writer} ></Landedmoon>}></Route>
        <Route path = "/mypage/mypagemoon" element = {<Mypagemoon person = {person} user_name={user_name}></Mypagemoon>}></Route>
        <Route path = "/landmoon/landedmoon/writing" element = {<Writingmoon writer = {writer} moonid={moonid} user_name={user_name}></Writingmoon>}></Route>
        <Route path = "/mypage/mypagemoon/fullmoon" element = {<Fullmoon person = {person} writers = {writers} nowriter = {nowriter} setNowriter = {setNowriter}></Fullmoon>}></Route>
        <Route path = "/aftermypages/aftermypage/afterfullmoon" element = {<Afterfullmoon person = {person} writers = {writers} nowriter = {nowriter} setNowriter = {setNowriter} wishes = {wishes}></Afterfullmoon>}></Route>
        <Route path = "/aftermypages/aftermypage" element = {<Aftermypage person = {person} user_name={user_name}></Aftermypage>}></Route>
        <Route path = "*" element = {<Other></Other>}></Route>
      </Routes>
    </CSSTransition>
    
  );
}

export default App;

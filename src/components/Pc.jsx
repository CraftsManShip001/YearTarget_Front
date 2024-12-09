import pc from '../assets/pc.png';

function Pc(){
    return(
        <div className='container'>
            <div className="maincontainer">
                <div className="textcontainer">
                    <h1 style = {{fontSize:'5rem'}}className='YearTarget tracking-in-expand'>{'니어 타겟\n'}</h1>
                    <h1 style = {{fontSize:'3rem'}}className='YearTarget text-focus-in'>{'모바일로 접속해주세요!\n'}</h1>
                </div>
            </div>
        </div>
    )
}

export default Pc;
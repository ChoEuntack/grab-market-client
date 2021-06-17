import React from "react";

function TimerComponent(){
    const [time, setTime] = React.useState(0);
    console.log("컴포넌트 업데이트");
        React.useEffect(function (){
            setTime(time +1)}, []);
    
    return (
        <div>
            <h>{time}초</h>
            <button>1번씩 올려주세요</button>
        </div>
    );
}

export default TimerComponent;
import React,{ useState, useEffect } from "react";


function Counter() {
    //변수를 만든다 
    //특별한 형태로 만들어야 한다 
    //cons [변수명, 변수에 값을 입력할 함수명] = useState(초기화값); 
    const [count, setCount] = useState(0);

    const increase= ()=>{
        setCount(count+1);
        console.log( count );
        
    }
    const decrease=()=>{
        setCount(count-1);
    }

    useEffect(() => { 
        console.log("데이터 불러오기");
        setCount(10);
    }, []);



    return (
      <div >
        <div>현재카운트 {count}</div>
        <button type="button" onClick={decrease}>감소</button>
        <button type="button" onClick={increase}>증가</button>
      </div>
    );
  }
  
export default Counter;
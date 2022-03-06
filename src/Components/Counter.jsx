
import {useState} from 'react'

 function Counter(props){

  const [counter,setCounter]= useState(props.value)

return (
<div className={props.className}>

<h1>The count is:{counter}</h1>

<button  onClick={()=>{setCounter((prev)=>{prev+1})}}>+1</button>
<button onClick={()=>{counter>0?setCounter(counter-1):setCounter(0)}}>-1</button>
<button onClick={()=>{setCounter(counter*2)}}>DoubleIt</button>

</div>


)



}



export default Counter
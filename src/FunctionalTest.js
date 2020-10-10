import React, { useState,useEffect } from 'react';

function FunctionalTest(props){
    const [count,setCount ] = useState(0);//useState=>example of hooks
    useEffect(()=>{
        alert("Mounted");

        return ()=>{
            alert("Unmount");//componentWillUnMount
        }
    },[props.title]);

    return(<div>
        <h1>{props.title}</h1>
        <p>Count : {count} </p>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>);
}


// class FunctionalTest extends React.Component {
//     state={
//         count:0
//     }

// render(){
//     return (<div>
//         <p>Count : {this.state.count}</p>
//         <button onClick={()=>setState({count:this.state.count+1})}>Click</button>
//     </div>);
//   }
// }
export default FunctionalTest;


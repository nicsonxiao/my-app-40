import React,{Fragment} from 'react'


const list=["apple","banana","pear","watermalen"];
function App() {
    return (
      <Fragment>
        {list.map((v,index)=>{
          return (<h1 key={index}>{v}={index}</h1>)
        })}
      </Fragment>
    );
  }
  
  export default App;
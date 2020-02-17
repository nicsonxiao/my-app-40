import React from 'react'

const prop={
    className:"demo",
    "data-index":1
}


function App() {
    return (
    <div>
        <div {...prop} style={{backgroundColor:"red"}}>展开标签属性值</div>
      </div>
    )
  }
  
  export default App;
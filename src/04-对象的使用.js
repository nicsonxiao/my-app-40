import React from 'react'


const person={
    name:"jack",
    age:19,
    gender:"男"
}
function App() {
    return (
      <div>
        <div>姓名：{person.name}</div>
        <div>年龄：{person.age}</div>
        <div>性别：{person.gender}</div>
      </div>
    );
  }
  
  export default App;
import './App.css';
import { useState } from 'react'
const App = () => {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />  
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      {
        toDos.map((value) => {
          return (
            <div className="todos">
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(value);
                    setToDos(toDos.filter(obj => {
                      if (obj.id === value.id) {
                        obj.status = e.target.checked
                      }
                      return obj
                    }))
                  }} value={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    setToDos(toDos.filter(obj2 => {
                      return obj2.id !== value.id
                    }))
                  }} className="fas fa-times"></i>

                </div>
              </div>
            </div>
          )
        })
      }
      {toDos.map((value) => {
        if (value.status) {
          return (<h1>{value.text}</h1>)
        }
        return null
      })}

    </div>
  );
}

export default App;

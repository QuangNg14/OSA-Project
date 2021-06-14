import React, { useState } from 'react'
import TasksList from './components/TasksList'
import Title from './components/Title'

const App = () => {
  // const [clicks, setClicks] = useState(0)
  // const [clicks2, setClicks2] = useState(0)
  //const function_a = () => {setClicks(1)}
  // console.log(clicks)
  // console.log(clicks2)
  // const combine = () => {
  //   setClicks(clicks + 1)
  //   setClicks2(clicks2 + 2)
  // }

  return (
    <div className="App">

      <TasksList/>

      {/* <Title name='Will' name2 = 'Andy'/>

      <h1>{clicks}</h1>
      <h1>{clicks2}</h1>

      <button onClick={() => setClicks(clicks + 1)}>
        +
      </button>

      <button onClick={() => setClicks(clicks - 1)}>-</button>

      <button onClick={combine}>Combine</button> */}

      {/* <button onClick={ () =>  {setClicks(clicks + 1); setClicks2(clicks2 + 2)}}>Combine</button> */}
      
    </div>
  );
}

export default App;

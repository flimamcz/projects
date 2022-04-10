import { useState } from 'react'
import useLocalStorage from './useLocalStorage'
function App() {
  const [produto, setProduto] = useLocalStorage('Produto', '')
  
  function handleClick({target}){
    setProduto(target.innerText)
  }

  return (
    <div>
      <p>Produto Preferido: {produto}</p>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  )
}

export default App

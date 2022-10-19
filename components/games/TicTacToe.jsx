import { useState } from "react"

export default function TicTacToe() {
  let R = 3, C = 3
  let [state, setState] = useState(() => 
    Array(R).fill().map(() => Array(C).fill('-'))) 

  console.log(state)

  return <div className="h-80 w-80 border-2">
    <h1>TicTacToe</h1> 
  </div>
}
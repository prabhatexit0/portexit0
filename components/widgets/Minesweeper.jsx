import {useState, useRef} from "react";
import Image from 'next/image'

let getBlock = (function blockMaker() {
  blockMaker.id = 0
  return function block(isBomb, isClicked, bombsAround) {
    return {
      isBomb: isBomb,
      isClicked: isClicked,
      bombsAround: bombsAround,
      id: ++blockMaker.id
    }
  }
})()

const getBoard = (size) => {
  let board = Array(size).fill(null)
    .map(() => Array(size).fill(null)
      .map(() => getBlock(getRandomIndex() % 5 === 0, false, 0)))

  let dir = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      let bombCount = 0
      for(let d of dir) {
        let newI = i + d[0], newJ = j + d[1]
        if(newI < size && newI >= 0 && newJ >= 0 && newJ < size) {
          if(board[newI][newJ].isBomb) bombCount++
        }
      }
      board[i][j].bombsAround = bombCount
    }
  }

  return board
}

let getRandomIndex = () => Math.floor(Math.random() * 100)

export default function Minesweeper() {
  const size = 8
  const [blocksMatrix, setBlocksMatrix] = useState(() => getBoard(size))
  const numberOfMoves = useRef(0)
  const isGameOver = useRef(false)

  const firstClick = (x, y, mutableBlocksMatrix) => {
    let dir = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]

    let queue = [[x, y]]
    let randomNumber = getRandomIndex() % Math.floor(size*size/2)

    while(queue.length > 0) {
      if(randomNumber === 0) break
      let [i, j] = queue.shift()
      mutableBlocksMatrix[i][j].isClicked = true
      randomNumber--
      for(let d of dir) {
        let newI = i + d[0]
        let newJ = j + d[1]
        if(newI >= 0 && newI < size && newJ >= 0 && newJ < size) {
          queue.push([newI, newJ])
        }
      }
    }
    setBlocksMatrix([...mutableBlocksMatrix])
  }

  const blockClick = (blockId) => {
    console.log(isGameOver.current)
    if(isGameOver.current) return

    let x = 0, y = 0
    let mutableBlocksMatrix = [...blocksMatrix]

    for(let i = 0; i < size; i++) {
      for(let j = 0; j < size; j++) {
        if(mutableBlocksMatrix[i][j].id === blockId) {
          x = i
          y = j
          break
        }
      }
    }

    if(blocksMatrix[x][y].isBomb) {
      isGameOver.current = true
    }

    if(!numberOfMoves.current) {
      firstClick(x, y, mutableBlocksMatrix)
      numberOfMoves.current++
      return
    }

    if(!mutableBlocksMatrix[x][y].isClicked) {
      mutableBlocksMatrix[x][y].isClicked = true
      setBlocksMatrix(mutableBlocksMatrix)
      numberOfMoves.current++
    }
  }

  const resetBoard = () => {
    isGameOver.current = false
    numberOfMoves.current = 0
    setBlocksMatrix(getBoard(size))
  }

  return <div className="w-full">
    <h1 className="text-2xl font-bold">Colorful Minesweeper</h1>
    <p className="text-sm">under construction!</p>
    <div className="w-full flex justify-center mt-2 mb-2">
      <div className="flex flex-col gap-1 tablet:gap-1.5 w-max">
        {
          blocksMatrix.map((blocksRow, idx) =>
            <div className="flex gap-1 tablet:gap-1.5" key={idx} >
              {blocksRow.map(block =>
                <Block block={block} blockClick={blockClick} key={block.id}/>)}
            </div>
          )
        }
      </div>
    </div>
    <div className="flex justify-end font-bold">
      <button onClick={resetBoard} className="bg-red-500 p-1">Reset Board</button>
    </div>
  </div>
}

const Block = ({block, blockClick}) => {
  const { isBomb, bombsAround, id, isClicked } = block

  const handleClick = () => {
    blockClick(id)
  }

  let colors = ["bg-green-400", "bg-pink-400", "bg-blue-400", "bg-red-400", "bg-purple-400"]

  return <div onClick={handleClick} className={`h-8 w-8 p-0.5 tablet:h-10 tablet:w-10 
    flex justify-center items-center font-bold ${colors[id % 5]}`}>
    {
      isClicked && (isBomb ?
        <Image src='/bomb.png' height={40} width={40} alt="bomb image"/> : bombsAround)
    }
  </div>
}

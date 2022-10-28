import {useState, useRef} from "react";
import Image from 'next/image'

const getBlock = (function blockMaker() {
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

const DIRECTIONS = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
const isValidCoordinate = (i, j, size) => {
  return i >= 0 && i < size && j >= 0 && j < size
}

const getBoard = (size) => {
  const board = Array(size).fill(null)
    .map(() => Array(size).fill(null)
      .map(() => getBlock(getRandomIndex() % 5 === 0, false, 0)))

  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      let bombCount = 0
      for(let d of DIRECTIONS) {
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

const getCoordinates = (blockId, blocksMatrix) => {
  const size = blocksMatrix.length
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      if(blocksMatrix[i][j].id === blockId) {
        return [i, j]
      }
    }
  }
}

let getRandomIndex = () => Math.floor(Math.random() * 100)

export default function Minesweeper() {
  const size = 8
  const [blocksMatrix, setBlocksMatrix] = useState(() => getBoard(size))
  const numberOfMoves = useRef(0)
  const isGameOver = useRef(false)

  const blockClick = (blockId) => {
    const [x, y] = getCoordinates(blockId, blocksMatrix)
    if(isGameOver.current || blocksMatrix[x][y].isClicked) return
    if(blocksMatrix[x][y].isBomb) {
      isGameOver.current = true
      return
    }

    const mutableBlocksMatrix = [...blocksMatrix]
    mutableBlocksMatrix[x][y].isClicked = true

    if(!numberOfMoves.current) {
      for(let [i, j] of DIRECTIONS) {
        let newI = x+i, newJ = y+j
        if(isValidCoordinate(newI, newJ, size) && !mutableBlocksMatrix[newI][newJ].isBomb) {
          mutableBlocksMatrix[newI][newJ].isClicked = true
          if(mutableBlocksMatrix[newI][newJ].bombsAround === 0)
            dfs(newI, newJ, mutableBlocksMatrix)
        }
      }
    }

    setBlocksMatrix(mutableBlocksMatrix)
    numberOfMoves.current++
  }

  let vis = Array(size).fill(null).map(() => Array(size).fill(false))
  const dfs = (i, j, mutableBlocksMatrix) => {
    if(mutableBlocksMatrix[i][j].bombsAround !== 0 || vis[i][j]) return
    vis[i][j] = true
    for(let [x, y] of DIRECTIONS) {
      let newI = x+i, newJ = y+j
      if(isValidCoordinate(newI, newJ, mutableBlocksMatrix.length)) {
        mutableBlocksMatrix[newI][newJ].isClicked = true
        dfs(newI, newJ, mutableBlocksMatrix)
      }
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

  return <div onClick={handleClick} className={`h-8 w-8 tablet:h-10 tablet:w-10 
    flex justify-center items-center font-bold ${bombsAround === 0 && isClicked ? "bg-zinc-400" : colors[id % 5]}`}>
    {
      isClicked ? (isBomb ?
        <Image src='/bomb.png' height={32} width={32} alt="bomb image"/> : bombsAround !== 0 && bombsAround) :
        <div className="bg-zinc-300 h-full w-full"></div>
    }
  </div>
}

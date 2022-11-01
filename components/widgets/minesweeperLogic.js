import { useState, useRef } from "react";

const Directions = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
let getRandomIndex = () => Math.floor(Math.random() * 100)

export const GAME_STATE = Object.freeze({
  NOT_STARTED: 0,
  ONGOING: 1,
  GAME_OVER: 2
})

const getBoard = (m, n) => {
  const getBlock = (function blockMaker() {
    let blockId = 0
    return function block(isBomb, isClicked, bombsAround) {
      return {
        isBomb: isBomb,
        isClicked: isClicked,
        bombsAround: bombsAround,
        id: ++blockId
      }
    }
  })()

  const board = Array(m).fill(null)
    .map(() => Array(n).fill(null)
      .map(() => getBlock(getRandomIndex() % 5 === 0, false, 0)))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let bombCount = 0
      for (let d of Directions) {
        let newI = i + d[0], newJ = j + d[1]
        if (newI < m && newI >= 0 && newJ >= 0 && newJ < n) {
          if (board[newI][newJ].isBomb) bombCount++
        }
      }
      board[i][j].bombsAround = bombCount
    }
  }

  return board
}


export const useMinesweeper = (m, n) => {
  const [board, setBoard] = useState(() => getBoard(m, n))
  const numberOfMoves = useRef(0)
  const [gameState, setGameState] = useState(GAME_STATE.NOT_STARTED)

  const isValidCoordinate = (i, j) => i >= 0 && i < m && j >= 0 && j < n

  const getCoordinates = (blockId, blocksMatrix=board) => {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (blocksMatrix[i][j].id === blockId) {
          return [i, j]
        }
      }
    }
  }

  const blockClick = (blockId) => {
    const [x, y] = getCoordinates(blockId)
    if (gameState === GAME_STATE.GAME_OVER || board[x][y].isClicked) return

    const mutableBoard = [...board]
    mutableBoard[x][y].isClicked = true

    if (board[x][y].isBomb) {
      setGameState(GAME_STATE.GAME_OVER)
    }

    if (!numberOfMoves.current) {
      for (let [i, j] of Directions) {
        let newI = x + i, newJ = y + j
        if (isValidCoordinate(newI, newJ) && !mutableBoard[newI][newJ].isBomb) {
          mutableBoard[newI][newJ].isClicked = true
          if (mutableBoard[newI][newJ].bombsAround === 0)
            dfs(newI, newJ, mutableBoard)
        }
      }
    }

    if (mutableBoard[x][y].bombsAround === 0)
      dfs(x, y, mutableBoard)

    setBoard(mutableBoard)
    numberOfMoves.current++
  }

  let vis = Array(m).fill(null).map(() => Array(n).fill(false))
  const dfs = (i, j, mutableBoard) => {
    if (mutableBoard[i][j].bombsAround !== 0 || vis[i][j]) return
    vis[i][j] = true
    for (let [x, y] of Directions) {
      let newI = x + i, newJ = y + j
      if (isValidCoordinate(newI, newJ, mutableBoard.length)) {
        mutableBoard[newI][newJ].isClicked = true
        dfs(newI, newJ, mutableBoard)
      }
    }
  }

  const resetBoard = () => {
    setGameState(GAME_STATE.NOT_STARTED)
    setBoard(getBoard(m, n))
    numberOfMoves.current = 0
  }

  return { board, blockClick, resetBoard, gameState }
}

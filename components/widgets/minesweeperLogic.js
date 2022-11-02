import { useState, useRef } from "react"

const Directions = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
let getRandomInteger = () => Math.floor(Math.random() * 100)

export const GAME_STATE = Object.freeze({
  NOT_STARTED: 0, STARTED: 1, GAME_OVER: 2
})

const getBoard = (rows, columns) => {
  const getBlock = (function blockMaker() {
    let blockId = 0
    return function block(isBomb, isClicked, bombsAround) {
      return {
        isBomb: isBomb, isClicked: isClicked, bombsAround: bombsAround, id: ++blockId
      }
    }
  })()

  return Array(rows).fill(null)
    .map(() => Array(columns).fill(null)
      .map(() => getBlock(false, false, 0)))
}

const isValidCoordinate = (i, j, board) => i >= 0 && i < board.length && j >= 0 && j < board[0].length

const addBombsAndMark = (x, y, board) => {
  const mutableBoard = [...board]
  let m = mutableBoard.length, n = mutableBoard[0].length

  for (let i = 0; i < mutableBoard.length; i++) {
    for (let j = 0; j < mutableBoard[0].length; j++) {
      if(i != x || j != y)
        mutableBoard[i][j].isBomb = getRandomInteger() % 5 == 0
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let bombCount = 0
      for (let d of Directions) {
        let newI = i + d[0], newJ = j + d[1]
        if (newI < m && newI >= 0 && newJ >= 0 && newJ < n) {
          if (mutableBoard[newI][newJ].isBomb) bombCount++
        }
      }
      mutableBoard[i][j].bombsAround = bombCount
    }
  }

  return mutableBoard
}

const getCoordinates = (blockId, board) => {
  let rows = board.length, columns = board[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j].id === blockId) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}

const revealAroundZero = (mutableBoard, i, j) => {
  let rows = mutableBoard.length, columns = mutableBoard[0].length
  let vis = Array(rows).fill(null).map(() => Array(columns).fill(false))

  function dfs(i, j) {
    if (mutableBoard[i][j].bombsAround !== 0 || vis[i][j]) return
    vis[i][j] = true
    for (let [x, y] of Directions) {
      let newI = x + i, newJ = y + j
      if (isValidCoordinate(newI, newJ, mutableBoard)) {
        mutableBoard[newI][newJ].isClicked = true
        dfs(newI, newJ, mutableBoard)
      }
    }
  }

  dfs(i, j)
}

const revealAllBombs = (mutableBoard) => {
  let rows = mutableBoard.length, columns = mutableBoard[0].length
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      if(mutableBoard[i][j].isBomb)
        mutableBoard[i][j].isClicked = true
    }
  }
}

export const useMinesweeper = (rows, columns) => {
  const [board, setBoard] = useState(() => getBoard(rows, columns))
  const [gameState, setGameState] = useState(GAME_STATE.NOT_STARTED)
  const mutableBoard = useRef([...board])

  const blockClick = (blockId) => {
    if(gameState == GAME_STATE.GAME_OVER) return
    const [x, y] = getCoordinates(blockId, board)

    switch(gameState) {
      case GAME_STATE.NOT_STARTED:
        mutableBoard.current = addBombsAndMark(x, y, board)
        for(let d of Directions) {
          let newI = x + d[0], newJ = y + d[1]
          if(isValidCoordinate(newI, newJ, mutableBoard.current)) {
            if(mutableBoard.current[newI][newJ].isBomb == false) {
              mutableBoard.current[newI][newJ].isClicked = true
              revealAroundZero(mutableBoard.current, newI, newJ)
            }
          }
        }

        setGameState(GAME_STATE.STARTED)
        setBoard([...mutableBoard.current])
        break

      case GAME_STATE.STARTED:
        if(board[x][y].isBomb) {
          revealAllBombs(mutableBoard.current)
          setGameState(GAME_STATE.GAME_OVER)
        } else {
          mutableBoard.current[x][y].isClicked = true
          if(mutableBoard.current[x][y].bombsAround == 0)
            revealAroundZero(mutableBoard.current, x, y)
        }
        break
    }

    setBoard([...mutableBoard.current])
  }

  const resetBoard = () => {
    setGameState(GAME_STATE.NOT_STARTED)
    setBoard(getBoard(rows, columns))
  }

  return {board, blockClick, resetBoard, gameState}
}

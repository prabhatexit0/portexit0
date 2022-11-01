import { useRef, useState } from "react"

const Directions = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
let getRandomInteger = () => Math.floor(Math.random() * 100)

export const GAME_STATE = Object.freeze({
  NOT_STARTED: 0, ONGOING: 1, GAME_OVER: 2
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

const addBombsAndMark = (mutableBoard) => {
  let m = mutableBoard.length, n = mutableBoard[0].length

  for (let i = 0; i < mutableBoard.length; i++) {
    for (let j = 0; j < mutableBoard[0].length; j++) {
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

const createRevealAroundZero = (mutableBoard) => {
  let rows = mutableBoard.length, columns = mutableBoard[0].length
  let vis = Array(rows).fill(null).map(() => Array(columns).fill(false))

  return function dfs(i, j) {
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
}

export const useMinesweeper = (rows, columns) => {
  const [board, setBoard] = useState(() => getBoard(rows, columns))
  const numberOfMoves = useRef(0)
  const gameState = useRef(GAME_STATE.NOT_STARTED)


  const blockClick = (blockId) => {
    const [x, y] = getCoordinates(blockId, board)
    if (gameState.current === GAME_STATE.GAME_OVER || board[x][y].isClicked) return

    let mutableBoard = [...board]
    mutableBoard[x][y].isClicked = true
    const revealAroundZero = createRevealAroundZero(mutableBoard)

    if (board[x][y].isBomb) {
      gameState.current = GAME_STATE.GAME_OVER
    }

    if (gameState.current == GAME_STATE.NOT_STARTED) {
      mutableBoard = addBombsAndMark(mutableBoard)
      for (let [i, j] of Directions) {
        let newI = x + i, newJ = y + j
        if (isValidCoordinate(newI, newJ, mutableBoard) && !mutableBoard[newI][newJ].isBomb) {
          mutableBoard[newI][newJ].isClicked = true
          if (mutableBoard[newI][newJ].bombsAround === 0) revealAroundZero(newI, newJ)
        }
      }
    }

    if (mutableBoard[x][y].bombsAround === 0) revealAroundZero(x, y)

    setBoard(mutableBoard)
    numberOfMoves.current++
  }

  const resetBoard = () => {
    gameState.current = GAME_STATE.NOT_STARTED
    setBoard(getBoard(rows, columns))
    numberOfMoves.current = 0
  }

  return {board, blockClick, resetBoard, gameState: gameState.current}
}

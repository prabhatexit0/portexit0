import Image from 'next/image'
import { useMinesweeper, GAME_STATE } from "./minesweeperLogic";

export default function Minesweeper() {
  let {board, blockClick, resetBoard, gameState} = useMinesweeper(8, 8)

  return <div className="w-full">
    <h1 className="text-2xl font-bold">Minesweeper</h1>
    <p className="text-sm">under construction!</p>
    <div className="flex justify-center p-1 mt-2 mb-2 relative">
      <div className="flex flex-col gap-1 tablet:gap-1.5 w-max">
        {
          board.map((blocksRow, idx) =>
            <div className="flex gap-1 tablet:gap-1.5" key={ idx }>
              { blocksRow.map(block =>
                <Block block={ block } blockClick={ blockClick } key={ block.id }/>) }
            </div>
          )
        }
      </div>
      {
        gameState === GAME_STATE.GAME_OVER &&
        <div className="w-full h-full absolute flex
          justify-center items-center z-10">
          <div className="bg-red-800 text-xl font-bold p-2 shadow-xl animate-bounce">
            <h1>Game Over</h1>
          </div>
        </div>
      }
    </div>
    <div className="flex justify-end font-bold">
      <button onClick={ resetBoard } className="bg-red-500 p-1">Reset Board</button>
    </div>
  </div>
}

const Block = ({block, blockClick}) => {
  const {isBomb, bombsAround, id, isClicked} = block

  const handleClick = () => {
    blockClick(id)
  }

  let colors = ["bg-red-500", "bg-blue-500", "bg-emerald-500", "bg-purple-500", "bg-rose-500"]

  return <div onClick={ handleClick } className={ `h-8 w-8 tablet:h-10 tablet:w-10 
    flex justify-center items-center font-bold 
    ${ bombsAround === 0 && isClicked ? "bg-zinc-400" : colors[bombsAround % colors.length] }` }>
    {
      isClicked ? (isBomb ?
          <Image src='/bomb.png' height={ 32 } width={ 32 } alt="bomb image"/> : bombsAround !== 0 && bombsAround) :
        <div className="bg-zinc-300 h-full w-full"></div>
    }
  </div>
}

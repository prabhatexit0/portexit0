import { useState } from 'react'
import ReactCodeMirror, { basicSetup } from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { xcodeDark } from '@uiw/codemirror-themes-all'
import { vim } from '@replit/codemirror-vim'

const URL = process.env.NEXT_PUBLIC_BACKEND_API

export default function Executor() {
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [codeString, setCodeString] = useState('')
  const [isVim, setIsVim] = useState(false)
  const [codeExtensions, setCodeExtensions] = useState([
    javascript(),
    basicSetup({
      autocompletion: true,
      foldGutter: true,
    }),
  ])
  const [codeError, setCodeError] = useState(false)

  const handleFileCreation = async () => {
    setIsLoading(true)
    let responseData = await (
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ code: codeString }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
    setIsLoading(false)

    if (responseData.result !== undefined) {
      setResult(responseData.result)
      setCodeError(false)
    } else {
      setCodeError(true)
      setResult('ERROR!!')
    }
  }

  const handleVimToggle = () => {
    if (isVim) setCodeExtensions(codeExtensions.slice(1))
    else setCodeExtensions([vim(), ...codeExtensions])
    setIsVim(c => !c)
  }

  return (
    <div className="font-mono flex flex-col gap-2 executor relative">
      <button
        onClick={handleVimToggle}
        className={`px-2 font-bold w-max 
      ${isVim ? 'bg-yellow-300 text-black' : 'bg-gray-700 text-white'} 
      text-white absolute right-0 top-0`}
      >
        Vim
      </button>
      <h1 className="font-bold text-2xl">Execute JS</h1>
      <div className="relative">
        <ReactCodeMirror
          value={codeString}
          onChange={value => setCodeString(value)}
          className="text-black max-h-92 overflow-auto"
          options={{
            mode: 'js',
          }}
          theme={xcodeDark}
          height="250px"
          extensions={codeExtensions}
        />
        <button
          onClick={handleFileCreation}
          className="p-1 px-2 font-bold w-max bg-[#295]
        text-white absolute bottom-0 right-0 m-2"
        >
          Run
        </button>
      </div>
      <div className="max-h-28 overflow-auto font-bold">
        Result:{' '}
        {!isLoading ? (
          <pre
            className={`font-normal ${result && 'p-1'} bg-[#252533] ${
              codeError ? 'text-red-500' : 'text-white'
            }`}
          >
            {result}
          </pre>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  )
}

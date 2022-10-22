import { useState } from "react"
import { useRef } from "react"

const URL = 'https://rocky-dawn-53721.herokuapp.com/run'

export default function Executor() {
  const preRef = useRef()
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleFileCreation = async () => {
    setIsLoading(true)
    let codeString = preRef.current.innerText
    let responseData = await (await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ "code": codeString }),
      headers: {
        'Content-Type': 'application/json'
      },
    })).json()
    setIsLoading(false)

    if (responseData.result !== undefined) {
      setResult(responseData.result)
    }
  }

  return <div className="font-mono flex flex-col gap-2 executor">
    <h1 className="font-bold text-3xl">Execute JS</h1>
    <div className="relative">
      <pre ref={preRef} className="h-40 w-full border-2 focus:outline-none p-2" spellCheck="false" contentEditable>{"// Work in progress, might not work"}</pre>
      <button onClick={handleFileCreation} className="p-2 font-bold w-max bg-black absolute top-0 right-0 m-2">Run</button>
    </div>
    <div className="max-h-28 overflow-auto">Result: {!isLoading ? <pre>{result}</pre> : "Loading..."} </div>
  </div>
}
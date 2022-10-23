import { useState, useRef } from "react"
import ReactCodeMirror, { basicSetup } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {dracula} from "@uiw/codemirror-themes-all";

const URL = 'https://rocky-dawn-53721.herokuapp.com/run'

export default function Executor() {
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [codeString, setCodeString] = useState("// Work in progress, might not work!")

  const handleFileCreation = async () => {
    setIsLoading(true)
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
      <ReactCodeMirror
        value={codeString}
        onChange={value => setCodeString(value)}
        className="text-black max-h-40 overflow-auto"
        options={{
          mode: "jsx",
        }}
        theme={dracula}
        height="200px"
        extensions={[
          javascript(),
          basicSetup({
            autocompletion: true,
            foldGutter: true
          })
        ]}
      />
      <button onClick={handleFileCreation} className="p-2 font-bold w-max bg-[#295]
        text-white absolute bottom-0 right-0 m-2">Run</button>
    </div>
    <div className="max-h-28 overflow-auto font-bold">Result: {!isLoading ? <pre className="font-normal">{result}</pre> : "Loading..."} </div>
  </div>
}
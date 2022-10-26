function getQuestionsData(data) {
  const keys = ["matchedUser", "submitStats", "acSubmissionNum"]
  let result = data
  for(let key of keys) {
    if(result[key] === undefined) return undefined
    result = result[key]
  }
  return result
}

export default function Leetcode({ data }) {
  const [all, easy, medium, hard] = getQuestionsData(data) ?? []
  const NOT_AVAILABLE = "N/A"

  return <LeetcodeContainer>
    <h1 className="text-2xl font-bold text-white">Leetcode</h1>
      <div className="flex justify-between tablet:justify-evenly items-center w-full mt-2">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">{all?.count ?? NOT_AVAILABLE}</h1>
          <p className="text-lg">solved</p>
        </div>

        <div className="w-32 flex flex-col">
          <SmallContainer textColor="text-green-400">
            <p className="text-white">Easy</p>
            <p className="text-2xl font-bold">{easy?.count ?? NOT_AVAILABLE}</p>
          </SmallContainer>
          <SmallContainer textColor="text-yellow-400">
            <p className="text-white">Medium</p>
            <p className="text-2xl font-bold">{medium?.count ?? NOT_AVAILABLE}</p>
          </SmallContainer>
          <SmallContainer textColor="text-red-400">
            <p className="text-white">Hard</p>
            <p className="text-2xl font-bold">{hard?.count ?? NOT_AVAILABLE}</p>
          </SmallContainer>
      </div>
    </div>

    <a href="https://leetcode.com/prabhatexit0" rel="noreferrer" target="_blank"
      className="bg-yellow-500 hover:bg-green-500 text-black font-bold w-max p-1 absolute top-0 right-0 cursor-pointer select-none">prabhatexit0</a>
  </LeetcodeContainer>
}

const LeetcodeContainer = ({ children }) =>
  <div className="font-mono flex text-sm flex-col relative">{children}</div>

const SmallContainer = ({children, textColor}) => <div className={`flex w-full justify-between items-center ${textColor}`}>{children}</div>

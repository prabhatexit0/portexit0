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
  const difficultyColor = ["text-green", "text-yellow", "text-red-300"]
  const NOT_AVAILABLE = "N/A"

  let problemCountObjects = [easy, medium, hard].map((x, idx) => {
    x.color = difficultyColor[idx]
    return x
  })

  return <LeetcodeContainer>
    <h1 className="text-2xl font-bold text-pink">LeetCode</h1>
      <div className="flex justify-between tablet:justify-evenly items-center w-full mt-2">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-purple">{all?.count ?? NOT_AVAILABLE}</h1>
          <p className="text-lg text-purple">solved</p>
        </div>

        <div className="w-32 flex flex-col ">
          {
            problemCountObjects?.map((ele, idx) => <SmallContainer key={idx} textColor={ele.color}>
              <p className="text-white">{ele?.difficulty}</p>
              <p className="text-2xl font-bold">{ele?.count ?? NOT_AVAILABLE}</p>
            </SmallContainer>)
          }
      </div>
    </div>

    <a href="https://leetcode.com/prabhatexit0" rel="noreferrer" target="_blank"
      className="font-bold border-[1px] px-1 rounded-md hover:bg-darklight px-1 py-0.5
      absolute top-0 right-0 cursor-pointer select-none text-md text-green border-green">
      prabhatexit0
    </a>
  </LeetcodeContainer>
}

const LeetcodeContainer = ({ children }) =>
  <div className="font-mono flex text-sm flex-col relative text-gray-300">{children}</div>

const SmallContainer = ({children, textColor}) =>
  <div className={`flex w-full justify-between items-center ${textColor}`}>{children}</div>

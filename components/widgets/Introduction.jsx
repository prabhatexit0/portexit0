const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK

export default function Introduction() {
  return (
    <AboutContainer>
      <h1 className="text-3xl font-bold text-white font-mono text-gray-300">Prabhat Sachdeva</h1>
      <p>Final year undergraduate student with expertise in JavaScript, TypeScript, React.js and related frameworks.
        I have experience in solving LeetCode problems and have an interest in WebAssembly and Compiler Design.
        For more information, please refer to my <a className="font-bold cursor-pointer border-[1px] px-1 border-gray-700 rounded-md hover:bg-gray-900" href={RESUME_LINK}>resume</a>.</p>
    </AboutContainer>
  )
}

const AboutContainer = ({children}) =>
  <div className="flex text-gray-400 flex-col relative about-stuff gap-3">{ children }</div>



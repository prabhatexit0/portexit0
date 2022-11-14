const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK

export default function About() {
  let dateUpdatedOn = "November 15, 2022"
  return (
    <AboutContainer>
      <h1 className="text-3xl font-bold text-white font-mono">Prabhat Sachdeva</h1>
      <p>🎭 Final Year <LitText text="BCA Undergrad" />, who loves to write code. Know more: <a className="text-yellow-400 hover:text-emerald-400" href={RESUME_LINK} target="blank" rel="noreferrer">Resume</a>
      </p>
      <p>🎪 I solve <LitText text="LeetCode"/> problems using JavaScript</p>
      <p>🧷 Working with: <LitText text="JavaScript, TypeScript, React.js"/> and frameworks/libraries around it </p>
      <p>✨ Interested in <LitText text="WebAssembly, Functional Programming and Compiler Design"/></p>
      <p className="text-end text-neutral-300">Updated: {dateUpdatedOn}</p>
    </AboutContainer>
  )
}

const AboutContainer = ({children}) =>
  <div className="flex text-sm text-neutral-400 flex-col relative about-stuff">{ children }</div>

const LitText = ({text}) => <span className="text-neutral-300">{text}</span>


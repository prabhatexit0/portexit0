const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK

export default function Introduction() {
  return (
    <AboutContainer>
      <h1 className="text-2xl font-bold font-mono text-gray-300 text-pink">
        Prabhat Sachdeva
      </h1>
      <p>
        Hey there, I’m <b className="text-purple">prabhatexit0</b> on the internet.
      </p>
      <p>I write code, mostly in <span className="text-purple">C++</span> and <span className="text-purple">TypeScript</span>. I love learning about Programming Languages and Compilers.</p>
      <p>
        For more information, please refer to my{" "}
        <a
          target="_blank"
          className="font-bold cursor-pointer border-[1px] px-2 border-gray-700 rounded-md hover:bg-gray-900 text-green border-green"
          href={RESUME_LINK}
          rel="noreferrer"
        >
          resume
        </a>
        .
      </p>
    </AboutContainer>
  )
}

const AboutContainer = ({ children }) => (
  <div className="flex flex-col relative about-stuff gap-3 text-light">
    {children}
  </div>
)

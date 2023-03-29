const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK

export default function Introduction() {
  return (
    <AboutContainer>
      <h1 className="text-2xl font-bold font-mono text-gray-300">
        Prabhat Sachdeva
      </h1>
      <p>Web Development and Compilers. TypeScript, C and C++.</p>
      <p>
        For more information, please refer to my{" "}
        <a
          target="_blank"
          className="font-bold cursor-pointer border-[1px] px-1 border-gray-700 rounded-md hover:bg-gray-900 text-gray-300"
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
  <div className="flex text-gray-400 flex-col relative about-stuff gap-3">
    {children}
  </div>
)

import { Navbar } from "../components";
import Contact from '../components/Contact'
import Head from 'next/head'

export default function Layout({ children }) {
  let bgColors = ["bg-blue-900", "bg-[#151523]", "bg-neutral-900"]
  return (
    <LayoutContainer>
      <Head>
        <title>exit0</title>
      </Head>
      <Navbar />
      <ChildrenContainer>
        {
          children && children.map((child, idx) =>
            <ChildWrapper key={idx} bg={bgColors[idx]}>{child}</ChildWrapper>
          )
        }
      </ChildrenContainer>
      <div className="sticky bottom-0 w-full">
        <Contact />
      </div>
    </LayoutContainer>
  );
}

const LayoutContainer = ({ children }) =>
  <div className="font-mono h-screen relative 
    flex flex-col items-center">
    {children}
  </div>

const ChildrenContainer = ({ children }) =>
  <div className="overflow-y-scroll m-2 p-5 h-full w-full flex flex-col items-center gap-5">{children}</div>

const ChildWrapper = ({ children, bg }) => <><div className={`p-4 ${bg} w-full laptop:w-5/12`}>{children}</div></> 
import { Navbar } from "../components";
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Head>
        <title>exit0</title>
      </Head>
      <Navbar />
        {
          children && children.map((child, idx) =>
            <ChildWrapper key={idx} bg={`bg-zinc-500/5`}>{child}</ChildWrapper>
          )
        }
    </LayoutContainer>
  );
}

const LayoutContainer = ({ children }) =>
  <div className="font-mono relative pb-10
    flex flex-col items-center gap-2">
    {children}
  </div>

const ChildWrapper = ({ children, bg }) => <><div className={`p-7 m-2 mb-0 ${bg} w-[90%] laptop:w-1/2 rounded-xl backdrop-blur-sm`}>{children}</div></>
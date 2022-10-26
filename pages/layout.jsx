import { Navbar } from "../components";
import Head from 'next/head'

export default function Layout({ children }) {
  let bgColors = ["bg-blue-900", "bg-[#151523]", "bg-neutral-900"]
  return (
    <LayoutContainer>
      <Head>
        <title>exit0</title>
      </Head>
      <Navbar />
        {
          children && children.map((child, idx) =>
            <ChildWrapper key={idx} bg={bgColors[idx % 3]}>{child}</ChildWrapper>
          )
        }
    </LayoutContainer>
  );
}

const LayoutContainer = ({ children }) =>
  <div className="font-mono relative pb-10
    flex flex-col items-center">
    {children}
  </div>

const ChildWrapper = ({ children, bg }) => <><div className={`p-4 m-2 mb-0 ${bg} w-[90%] laptop:w-5/12`}>{children}</div></>
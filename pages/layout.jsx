import { Navbar } from '../components'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Head>
        <title>exit0</title>
      </Head>
      <Navbar />
      {children &&
        children.map((child, idx) => (
          <ChildWrapper key={idx}>{child}</ChildWrapper>
        ))}
    </LayoutContainer>
  )
}

const LayoutContainer = ({ children }) => (
  <div
    className="font-mono relative pb-10
    flex flex-col items-center gap-2"
  >
    {children}
  </div>
)

const ChildWrapper = ({ children }) => (
  <>
    <div className={`p-5 m-2 mb-0 w-[90%] laptop:w-1/2`}>{children}</div>
  </>
)

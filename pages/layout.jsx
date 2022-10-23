import { Navbar } from "../components";
import Contact from '../components/Contact'

export default function Layout({ children }) {
  let bgColors = ["bg-blue-900", "bg-[#112]"]
  return (
    <LayoutContainer>
      <Navbar />
      <ChildrenContainer>
        <div className="h-20"></div>
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
import { Navbar } from "../components";
import Contact from '../components/Contact'
import Draggable from "react-draggable";

export default function Layout({ children }) {
  let bgColors = ["bg-blue-900", "bg-red-600", "bg-yellow-600"]
  return (
    <LayoutContainer>
      <Navbar />
      <ChildrenContainer>
        {
          children.map((child, idx) =>
            <ChildWrapper key={idx} bg={bgColors[idx - idx]}>{child}</ChildWrapper>
          )
        }
      </ChildrenContainer>
      <div className="sticky bottom-0 w-full laptop:w-max">
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
  <div className="overflow-y-scroll p-5 h-full w-full flex flex-col items-center gap-5">{children}</div>

const ChildWrapper = ({ children, bg }) => <Draggable><div className={`p-4 ${bg}`}>{children}</div></Draggable> 
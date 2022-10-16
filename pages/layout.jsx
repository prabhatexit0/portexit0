import { Navbar } from "../components";
import Contact from '../components/Contact'


export default function Layout({ heading, children }) {
  return (
    <div className="font-mono h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-11/12 h-full gap-5 tablet:w-2/3 laptop:w-1/2 p-5 
      laptop:p-30 py-28 text-gray-300
      flex flex-col
      ">
        <div className="bg-blue-900 p-5">
          <h1 className="text-3xl font-bold text-white">{heading}</h1>
          <div className="">
            {children}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

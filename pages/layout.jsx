import { Navbar } from "../components";
import Contact from '../components/Contact'

export default function Layout({ children }) {
  return (
    <div className="h-screen relative">
      <Navbar />
      {children}
      <Contact/>
    </div>
  );
}

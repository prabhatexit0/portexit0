import { Navbar } from '../components'

export default function Layout({ children }) {
  return <div className=''>
    <Navbar />
    {children}
  </div>
}

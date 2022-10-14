import { useRouter } from 'next/router'
const linkButtonStyle = 'p-1 left-5 w-32 top-5 font-bold text-gray-400 hover:text-gray-50 transition-all ease-in-out'
const exit0styles = 'p-1 left-5 w-32 top-5 font-bold text-gray-400 transition-all ease-in-out'

export default function Navbar() {
  const router = useRouter()
  const handleRouteChange = (link) => {
    router.replace(link)
  }
  return <div className='font-mono top-7 right-7 p-6'>
    <div className='flex gap-5 justify-center laptop:justify-end'>
      <button onClick={() => handleRouteChange('/home')} className={linkButtonStyle}>Home</button>
      <button onClick={() => window.close()} className={exit0styles}>exit0</button>
    </div>
  </div>
}

import { useRouter } from 'next/router'
const linkButtonStyle = 'p-1 left-5 w-32 top-5 font-bold hover:bg-emerald-500 border-2 border-zinc-800 transition-all ease-in-out'
const exit0styles = 'p-1 left-5 w-32 top-5 font-bold hover:bg-red-500 border-2 border-zinc-800 transition-all ease-in-out'

export default function Navbar() {
  const router = useRouter()
  const handleRouteChange = (link) => {
    router.replace(link)
  }
  return <div className='font-mono top-7 right-7 p-4 px-12'>
    <div className='flex gap-5 justify-center laptop:justify-end'>
      <button onClick={() => handleRouteChange('/home')} className={linkButtonStyle}>Home</button>
      <button onClick={() => self.close()} className={exit0styles}>exit0</button>
    </div>
  </div>
}

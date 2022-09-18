import { useRouter } from 'next/router'
const linkButtonStyle = 'px-3 py-2 left-5 w-36 top-5 font-bold border-zinc-900 border-2 hover:border-white transition-all easi-in-out'
const blogsButtonStyle = 'px-3 py-2 left-5 w-36 top-5 font-bold border-zinc-900 border-2 hover:border-red-500 transition-all easi-in-out'

export default function Navbar() {
  const router = useRouter()
  const handleRouteChange = (link) => {
    router.replace(link)
  }
  return <div className='font-mono top-7 right-7 px-10 py-6 border-neutral-900 border-b-2'>
    <div className='flex gap-5 justify-center laptop:justify-end'>
      <button onClick={() => handleRouteChange('/home')} className={linkButtonStyle}>Home</button>
      <button onClick={() => handleRouteChange('/about')} className={linkButtonStyle}>About</button>
      <button className={blogsButtonStyle}>Blogs</button>
    </div>
  </div>
}

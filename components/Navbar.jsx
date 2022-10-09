import { useRouter } from 'next/router'
const linkButtonStyle = 'p-1 left-5 w-32 top-5 font-bold border-zinc-900 border-2 hover:bg-purple-700 transition-all easi-in-out'
const blogsButtonStyle = 'p-1 left-5 w-32 top-5 font-bold border-zinc-900 border-2 cursor-not-allowed transition-all easi-in-out'

export default function Navbar() {
  const router = useRouter()
  const handleRouteChange = (link) => {
    router.replace(link)
  }
  return <div className='font-mono top-7 right-7 p-4 px-12 border-neutral-900 border-b-2'>
    <div className='flex gap-5 justify-center laptop:justify-end'>
      <button onClick={() => handleRouteChange('/home')} className={linkButtonStyle}>Home</button>
      <button className={blogsButtonStyle}>Blogs</button>
    </div>
  </div>
}

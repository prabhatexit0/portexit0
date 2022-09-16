import { linkStyle } from '../styles/custom-tailwind-styles'

export default function Navbar() {
  return <div className='absolute top-7 right-7 p-5 border-white'>
    <div className='flex gap-5'>
      <div className='px-3 py-2 left-5 w-36 top-5 font-bold border-white border-2 '>About Me</div>
      <div className='px-3 py-2 left-5 w-36 top-5 font-bold border-white border-2 '>Blogs</div>
    </div>
  </div>
}

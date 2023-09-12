import {AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  return <div className='font-mono p-5 w-full sticky bg-transparent backdrop-blur-sm
    fixed top-0 z-10 laptop:px-20'>
    <div className='flex gap-5 justify-between items-center'>
      <h1 className="font-bold text-xl text-purple">prabhatexit0</h1>
      <div className="flex gap-5">
        <IconLinkWrap link="https://github.com/prabhatexit0">
          <AiFillGithub size={20}/>
        </IconLinkWrap>
        <IconLinkWrap link="https://linkedin.com/in/prabhatexit0">
          <AiFillLinkedin size={20} />
        </IconLinkWrap>
        <IconLinkWrap link="https://twitter.com/prabhatexit0">
          <AiOutlineTwitter size={20 }/>
        </IconLinkWrap>
        <IconLinkWrap link="https://leetcode.com/prabhatexit0">
          <SiLeetcode size={20}/>
        </IconLinkWrap>
        <IconLinkWrap link="mailto:prabhatexit0@gmail.com">
          <AiFillMail size={20}/>
        </IconLinkWrap>

      </div>
    </div>
  </div>
}

const IconLinkWrap = ({children, link}) =>
  <a className="text-green" href={link} target="blank" rel="noreferrer">{children}</a>

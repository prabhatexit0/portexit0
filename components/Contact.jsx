import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
	return <div className="font-mono w-full border-zinc-900 border-y-2 p-4 absolute bottom-0 flex gap-2 justify-center">
		<p>Looking for a versatile developer?</p> 
		<div className="flex gap-2 items-center">
			<AiOutlineGithub size={23}/>
			<AiFillLinkedin size={23}/>
		</div>
	</div>
}
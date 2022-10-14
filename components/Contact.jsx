import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
	return <div className="font-mono w-full border-t-blue-400 hover:spin text-sm border-t-2 p-4 absolute bottom-0 flex gap-4 justify-center">
		<p>Looking for a versatile developer?</p>
		<div className="flex gap-1 items-center">
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prabhatexit0/" className="hover:text-blue-400">
				<AiOutlineGithub size={23} />
			</a>
			<a target="_blank" rel="noreferrer" href="https://github.com/prabhatexit0" className="hover:text-blue-400">
				<AiFillLinkedin size={23} />
			</a>
		</div>
	</div>
}
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
	return <div className="font-mono w-full border-t-emerald-500 text-sm border-t-2 p-4 absolute bottom-0 flex gap-2 justify-center">
		<p>Looking for a versatile developer?</p>
		<div className="flex gap-2 items-center">
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prabhatexit0/">
				<AiOutlineGithub size={23} />
			</a>
			<a target="_blank" rel="noreferrer" href="https://github.com/prabhatexit0">
				<AiFillLinkedin size={23} />
			</a>
		</div>
	</div>
}
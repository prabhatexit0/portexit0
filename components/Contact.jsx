import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Contact() {
	return <ContactContainer>
		<p>Looking for a versatile developer?</p>
		<div className="flex gap-1 items-center">
			<a target="_blank" rel="noreferrer" href="https://github.com/prabhatexit0" className="hover:text-black">
				<AiOutlineGithub size={23} />
			</a>
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/prabhatexit0/" className="hover:text-black">
				<AiFillLinkedin size={23} />
			</a>
		</div>
	</ContactContainer>
}

const ContactContainer = ({ children }) =>
	<div className="font-mono bg-blue-900 p-2 px-3 
	bottom-0 flex gap-4 justify-center">{children}</div>

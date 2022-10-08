import Layout from "./layout"
import TicTacToe from "../components/games/TicTacToe"
import { forwardRef, useState, useRef } from 'react'

export default function Home() {
  return <Layout>
    <div className="font-mono h-80 w-full flex flex-col justify-center items-center mt-20">
      <div className="w-4/5">
        <div className="text-5xl laptop:text-6xl font-bold py-1">
          Prabhat Sachdeva
        </div>
        <About/>
      </div>
    </div>
  </Layout>
}
function About() {
  let devAboutMe = `Currently making JS/React problems for Devsnest, 
  I love to write code in JavaScript`
  let dsaAboutMe = `Leetcode Daily Challenge everyday, mostly in JavaScript, Leetcode: prabhatexit0`
  let [about, setAbout] = useState("")
  let aboutRef = useRef()

  const handleAboutClick = (e) => {
    if(e.target?.textContent === 'Little Dev') 
      if(about == devAboutMe) setAbout("")
      else setAbout(devAboutMe)
    else
      if(about == dsaAboutMe) setAbout("")
      else setAbout(dsaAboutMe)
  }

  return <div className="font-mono">
      <div className="w-4/5"> {/* Container for Main Stuff */}
        <div className="my-8 tablet:mb-0">
          <button onClick={handleAboutClick} className=" border-2 border-neutral-900 inline-block p-3 mr-10 mb-10 font-semibold 
            hover:bg-emerald-700 transition-all ease-in-out" >Little Dev</button>
          <button onClick={handleAboutClick} className="border-2 border-neutral-900 inline-block font-semibold 
              p-3 hover:bg-yellow-600 trasition-all ease-in-out">Little Leetcode</button>
        </div>
          <AboutDialogue ref={aboutRef} description={about}/>
      </div>
  </div>
}

const AboutDialogue = forwardRef(function AboutDialogue({description}, ref) {
  return <div className="p-2">
    <h1 ref={ref}>{description}</h1>
  </div>
})
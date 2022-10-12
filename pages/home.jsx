import Layout from "./layout";
import { forwardRef, useState, useRef } from "react";
import emeraldPokemon from "../assets/emraldpoke.png";
import Image from "next/image";

let aboutMe = {
  dev: "Making JS/React problems for Devsnest, I love to write code in JavaScript",
  dsa: "Leetcode Daily Challenge everyday, mostly in JavaScript, Leetcode: prabhatexit0",
};

export default function Home() {
  return (
    <Layout>
      <div className="font-mono h-80 w-full flex flex-col items-center mt-20">
        <div className="w-10/12">
          <div className="text-4xl laptop:text-6xl text-left font-bold py-1">
            Prabhat Sachdeva
          </div>
          <About />
        </div>
      </div>
    </Layout>
  );
}

function About() {
  let aboutRef = useRef();

  const handleAboutClick = (e) => {
    console.log(e.target);
  };

  let oldAbout = (
    <div className="my-8 tablet:mb-0">
      <button
        onClick={handleAboutClick}
        className="border-2 border-neutral-900
            inline-block p-2 mr-10 mb-10 font-semibold
            hover:border-emerald-500 transition-all
            ease-in-out"
      >
        Development
      </button>
      <button
        onClick={handleAboutClick}
        className="border-2 border-neutral-900
            inline-block font-semibold p-2 hover:border-yellow-500 trasition-all
            ease-in-out"
      >
        Algorithms
      </button>
    </div>
  );

  return (
    <div className="font-mono">
      <div className="mt-3 flex flex-col gap-1">
        <p>🌟 Budding Software Engineer</p> 
        <p>🤿 Always looking to work on or contribute to something interesting. </p> 
        <p>🧁 Creating JS/React problems for {" "}
        <a className="text-decoration-line: underline" href="https://devsnest.in/">Devsnest</a>.</p>
      </div>
    </div>
  );
}

const AboutDialogue = forwardRef(function AboutDialogue(
  { description },
  ref
) {
  return (
    <div className="">
      <h1 className="" ref={ref}>
        {description}
      </h1>
    </div>
  );
});

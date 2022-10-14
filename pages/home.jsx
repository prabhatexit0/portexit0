import Layout from "./layout";
import { forwardRef, useState, useRef } from "react";


export default function Home() {
  return (
    <Layout>
      <div className="font-mono h-80 w-full flex flex-col justify-center items-center mt-20 animate-pulse">
        <div className="m-5">
          <div className="text-5xl laptop:text-5xl text-left py-1 font-bold mb-8">
            Prabhat Sachdeva
          </div>
          <About />
        </div>
      </div>
    </Layout>
  );
}

function About() {
  return (
    <div className="font-mono">
      <div className="mt-3 text-sm laptop:text-base flex flex-col gap-1">
        <p>🌟 Budding Software Engineer</p>
        <p>🤿 Always looking to work on or contribute to something interesting. </p>
        <p>🧁 Creating JS/React problems for {" "}
          <a className="text-decoration-line: underline" href="https://devsnest.in/">Devsnest</a>.
        </p>
        <p>🧷 Inventory: JavaScript, TypeScript <span className="italic text-blue-400">+ versatility</span></p>
      </div>
    </div>
  );
}

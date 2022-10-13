import Layout from "./layout";
import { forwardRef, useState, useRef } from "react";


export default function Home() {
  return (
    <Layout>
      <div className="font-mono h-80 w-full flex flex-col items-center mt-20">
        <div className="m-5">
          <div className="text-5xl laptop:text-6xl font-bold text-left py-1 name">
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
      <div className="mt-3 flex flex-col gap-1">
        <p>🌟 Budding Software Engineer</p>
        <p>🤿 Always looking to work on or contribute to something interesting. </p>
        <p>🧁 Creating JS/React problems for {" "}
          <a className="text-decoration-line: underline" href="https://devsnest.in/">Devsnest</a>.
        </p>
        <p>🧷 Inventory: JavaScript, TypeScript <span className="italic text-emerald-400">+ versatility</span></p>
      </div>
    </div>
  );
}

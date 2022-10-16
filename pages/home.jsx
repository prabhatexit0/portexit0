import Layout from "./layout";

export default function Home() {
  return (
    <Layout heading={"Prabhat Sachdeva"}>
      <About />
    </Layout >
  );
}

function About() {
  return (
    <div className="font-mono h-full flex text-sm flex-col relative about-stuff">
      <p>🌟 Budding Software Engineer</p>
      <p>🤿 Always looking to work on or contribute to something interesting. </p>
      <p>🧁 Creating JS/React problems for {" "}
        <a className="text-decoration-line: underline" href="https://devsnest.in/">Devsnest</a>.
      </p>
      <p>🧷 Inventory: JavaScript, TypeScript <span className="italic text-black font-bold px-1 bg-white">+ versatility</span></p>

    </div>
  )
}

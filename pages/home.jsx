import Layout from "./layout";
import Executor from '../components/games/Executor'

// noinspection JSUnusedGlobalSymbols
export default function Home(){
  return (
    <Layout heading={"Prabhat Sachdeva"}>
      <About />
      <Executor />
    </Layout >
  );
}

function About() {
  return (
    <AboutContainer>
      <h1 className="text-3xl font-bold text-white">Prabhat Sachdeva</h1>
      <p>🌟 Budding Software Engineer</p>
      <p>🤿 Always looking to work on or contribute to something interesting. </p>
      <p>🧁 Creating JS/React problems for {" "}
        <a className="text-decoration-line: underline" href="https://devsnest.in/">Devsnest</a>.
      </p>
      <p>🧷 Inventory: JavaScript, TypeScript <span className="italic text-black font-bold px-1 bg-white">+ versatility</span></p>
    </AboutContainer>
  )
}

const AboutContainer = ({ children }) =>
  <div className="font-mono flex text-sm flex-col relative about-stuff">{children}</div>

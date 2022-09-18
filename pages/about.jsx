import Layout from "./layout"

export default function About() {
  return <div className="font-mono">
    <Layout>
      <div className="h-80 w-full flex justify-center items-start mt-20">
        <div className="w-4/5">
          <div className="text-6xl font-bold py-1">
            About Me
          </div>
          <div className="mt-8">
            <button className=" border-2 border-neutral-900 inline-block p-3 mr-10 mb-10 font-semibold 
              hover:bg-emerald-700 transition-all ease-in-out" >Little Little JS</button>
            <button className="border-2 border-neutral-900 inline-block 
                p-3 hover:bg-emerald-700 trasition-all ease-in-out">Little Little Leetcode</button>
          </div>
        </div>
      </div>
    </Layout>
  </div>
}
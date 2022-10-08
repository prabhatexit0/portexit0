/**
 * @typedef PageLayoutProps
 * @property {string} heading
 */

/** @param {PageLayoutProps} props */
export default function PageLayout({ heading }) {
  return <div className="font-mono">
    <Layout>
      <div className="h-80 w-full flex justify-center items-center mt-20">
        <div className="w-4/5"> {/* Container for Main Stuff */}
          <div className="text-5xl laptop:text-6xl font-bold py-1">
            About Me
          </div>
          <div className="mt-8">
            <button className=" border-2 border-neutral-900 inline-block p-3 mr-10 mb-10 font-semibold 
              hover:bg-emerald-700 transition-all ease-in-out" >Little Little JS</button>
            <button className="border-2 border-neutral-900 inline-block font-semibold 
                p-3 hover:bg-emerald-700 trasition-all ease-in-out">Little Little Leetcode</button>
          </div>
        </div>


      </div>
    </Layout>
  </div>
}
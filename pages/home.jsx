import Layout from "./layout"

export default function Home() {
  return <Layout>
    <div className="font-mono h-80 w-full flex justify-center items-start mt-20">
      <div className="w-4/5">
        <div className="text-5xl laptop:text-6xl font-bold py-1">
          Prabhat Sachdeva
        </div>
        <div className="text-xl font-sm py-1 flex justify-start ">
          <p className="text-gray-200 mt-8">
            I like to write code in JavaScript
          </p>
        </div>
      </div>
    </div>
  </Layout>
}
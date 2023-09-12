const BLOG_LINK =
  'https://docs.google.com/document/d/1ilV5tV0wflvZ2Aph13uwiYA24a7Xfkk4NYh8qeJMhrQ/edit?usp=sharing'
const CERT_LINK =
  'https://drive.google.com/file/d/1mak6eTp1ufWDhmtIdI17owANvUw7fd64/view?usp=sharing'

export function Gsoc() {
  return (
    <div className="flex text-light flex-col relative about-stuff gap-3">
      <h1 className="text-2xl font-bold font-mono text-pink">
        Google Summer of Code 2023 - Carbon Lanugage
      </h1>
      <p>
        As part of <span className="text-purple">GSoC&#39;23</span> I
        contributed to <span className="text-purple">Carbon Language</span> and
        worked on{' '}
        <span className="font-semibold text-yellow">
          Improving the User-Facing Output for Carbon Explorer
        </span>
        .
      </p>
      <p>
        Know more:{' '}
        <a
          className="border-[1px] border-gray-600 px-2 rounded-md text-gray-200 font-bold text-green border-green"
          href={BLOG_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>{' '}
        <a
          className="border-[1px] border-gray-600 px-2 rounded-md text-gray-200 font-bold text-green border-green"
          href={CERT_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Certificate
        </a>
      </p>
    </div>
  )
}

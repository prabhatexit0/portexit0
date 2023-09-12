export function Projects() {
  return (
    <div>
      <h1 class="text-2xl text-pink font-bold">Projects</h1>
      <div class="flex flex-col laptop:flex-row gap-4 items-center justify-center items-center">
        <div class="border-2 border-green text-green w-max p-4 rounded-xl">
          <h4 class="font-bold">
            <a
              class="underline cursor-pointer"
              href="https://quik.run/"
              target="_blank"
              rel="noreferrer"
            >
              Quik.Run
            </a>
          </h4>
        </div>
        <div class="border-2 border-green text-green w-max p-4 rounded-xl">
          <h4 class="font-bold">
            <a
              class="underline cursor-pointer"
              href="https://github.com/prabhatexit0/vyantra-v2"
              target="_blank"
              rel="noreferrer"
            >
              Vyantra-V2
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}

function About() {
  const para = `My journey with programming began after entering college. Before that I was heavily involved in graphic design, video editing for gaming content creators. That all changed when I started studying C in college. I quickly fell in love with programming and a lot of credit goes to my teacher for sparking my interest.

As I progressed through my first semester, I became enamoured with the idea of competitive programming on platforms like Codechef and Codeforces. I started learning C++ and dove into data structures and algorithms. I had a tough time understanding recursion, but it was a fun challenge. I also began exploring different development paradigms, starting with Qt5 C++ and creating a small Tic-Tac-Toe game.

My enthusiasm for C/C++ was quickly dampened when I tried to contribute to open-source software like Kdenlive. I struggled for days to even build the software and eventually gave up, feeling the stark contrast between what was taught in college and what was used in real-world development. I then tried my hand at Android development using Java, but struggled with the object-oriented programming concepts.

It wasn't until the start of my third semester that I finally learned about OOPs and gave Android development another shot. This time, I succeeded in creating a simple "Happy Birthday" application for a girl I liked, as well as a college project that featured multiple games like Tic-Tac-Toe, Tower of Hanoi, and Finger Battle. However, I soon grew bored of Android development and turned my attention to web development.

In January 2022, I learned the basics of web development using React.js and immediately fell in love with the development experience. JavaScript felt significantly less complicated than Android development and required fewer resources on my laptop. I spent a lot of time learning more about React and deeper concepts of JavaScript, and even contributed to the website of my college's technical society, ACE.

I then got an internship at a small consulting startup, where I worked with Python and Flask to create prototypes for their clients. While I didn't have any major issues with Python, I preferred working with JavaScript. I continued to work on my own projects and eventually joined Devsnest, a community of thousands of students where I contributed to their frontend bootcamp and was eventually hired as an intern.

As I delved deeper into JavaScript and React, I also learned about webpack and babel. My friend and I even attempted to create our own version of React, but ultimately failed. However, the experience introduced me to ASTs and deepened my understanding of how JavaScript and React work under the hood.

I also became fascinated with WebAssembly (wasm) and its capabilities, such as running x86 virtualization in the browser. I experimented with compiling C++ code using Emscripten and ran it in the browser, conducting some benchmarking.

One day, a college alum approached me and asked if I had any interest in compilers. He knew someone who was looking for an intern with an interest in language frontend and static code analysis. I decided to give it a shot and applied for the internship.

One of the tasks in the take-home assignment was to add more instructions to a register-based virtual machine (named Vyantra) and an assembly-like language that was created by someone 9 years ago who worked there, it was made using C and antlr3. I re-made it from scratch using C, scrapping antlr3, I named it Vyantra-v2. I wrote the lexer, parser, visitor and virtual machine from scratch using C and added support for jump statements and more binary mathematical and logical operations. It felt incredibly fun, but unfortunately I didn't get the internship.

However, the experience exposed me to the world of compilers and I'm currently learning more about it. I am adding support for nested functions and planning to create an online playground for it by compiling the compiler and virtual machine to WebAssembly.

// Will add more into it soon but these days I’m mostly working with TypeScript, learning more about TypeScript and LOVING IT thanks to this twitch streamer purplelf :) also planning to create some fun projects as soon as I’m done with exams.
`
  return <div className="flex flex-col gap-5">
    <h1 className="font-bold text-2xl text-gray-300">Me & Programming</h1>
    <div className="flex flex-col gap-3 text-gray-400">
      {para.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
    </div>
  </div>
}

export default About

export default function Home() {
  return (
    <main className="flex-auto flex justify-center items-center">
      <div className="max-w-6xl aspect-video w-full border-[1.5rem] relative pt-20 pl-8">
        <h1 className="text-7xl z-10 relative">
          Ahmad Ridho Ramadhan
        </h1>
        <h2 className="text-indigo-300 text-2xl">&gt;web Developer</h2>
        <div className="mt-10 relative z-10">
          <div>{"//"} hi, you can call me Ridho</div>
          <div>{"//"} I really like coding and do something new </div>
          <div>{"//"} Click <span className="text-pink-400">here</span> if you want to say hello</div>
        </div>
        <div className="bg-color-1 absolute -top-6 -right-6 max-w-3xl w-full aspect-video"></div>
        <div className="bg-color-1 absolute -bottom-6 -left-6 max-w-3xl w-full aspect-video"></div>
      </div>
    </main>
  );
}

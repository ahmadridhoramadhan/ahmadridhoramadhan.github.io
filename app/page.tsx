import TypeAnimationComponent from "@/components/TypeAnimationComponent"

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="min-h-screen flex items-center lg:ml-10 ml-3 sm:ml-5 select-none">
        <div className="md:text-7xl text-3xl sm:text-5xl lg:text-8xl">
          <TypeAnimationComponent sequence={["Hai, \n a'm Ahmad Ridho, \n Web Developer"]} />
        </div>
      </div>
    </main>
  )
}

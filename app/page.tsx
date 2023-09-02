import TypeAnimationComponent from "@/components/TypeAnimationComponent"

export default function Home() {
  return (
    <main className="flex-auto">
      <div className="min-h-screen flex items-center ml-10 select-none">
        <div className="text-8xl">
          <TypeAnimationComponent sequence={["Hai, \n a'm Ahmad Ridho, \n Web Developer"]} />
        </div>
      </div>
    </main>
  )
}

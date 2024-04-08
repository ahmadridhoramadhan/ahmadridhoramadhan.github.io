import { IconCSS, IconLaravel, IconReact, IconVue } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export default function Work() {
    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none">
            <div className="border-r-2 max-w-xs w-full border-color-2 pl-5 pt-5 space-y-4">
                <FilterInput name="CSS" icon={<IconCSS />} />
                <FilterInput name="laravel" icon={<IconLaravel />} />
                <FilterInput name="react" icon={<IconReact />} />
                <FilterInput name="Vue" icon={<IconVue />} />
            </div>
            <div className="py-10 w-full grow-0 overflow-y-scroll">
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 container mx-auto px-5 gap-10">
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                    <Card date="2022-2-4" demoLink="#" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eum." imageSrc="/tetris.png" title="tetris-game" />
                </div>
            </div>
        </main>
    )
}

function Card({ imageSrc, title, date, description, demoLink }: { imageSrc: string, title: string, date: string, description: string, demoLink: string }) {
    return (
        <div className="justify-self-center">
            <span className="text-indigo-400 text-lg truncate max-w-44 inline-block">{title}</span>
            <span className="text-color-3 text-sm"> / {date}</span>
            <div className="border-2 rounded-xl max-w-80">
                <div className="relative aspect-video">
                    <Image fill src={imageSrc} alt={title} className="object-cover rounded-t-xl" />
                </div>
                <div className="m-2">
                    <p className="my-4 line-clamp-4">{description}</p>
                    <Link href={demoLink} className="px-3 py-2 bg-color-2 rounded-md">visit-demo</Link>
                </div>
            </div>
        </div>
    )
}

function FilterInput({ label, name, value, icon }: { label?: string, name: string, value?: string, icon: JSX.Element }) {
    return (
        <label htmlFor={name} className="flex items-center">
            <input type="checkbox" name={name} id={name} value={value ?? name} className="peer mr-3" />
            <div className="peer-checked:opacity-100 opacity-50 hover:opacity-100 transition-all flex items-center gap-1">
                <span className="inline-block size-6">{icon}</span>
                <span>{label ?? name}</span>
            </div>
        </label>
    )
}
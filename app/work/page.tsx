import { IconReact } from "@/components/icons"
import SidebarProjects from "@/components/sidebarProjects"
import Image from "next/image"
import Link from "next/link"

import projects from "@/db/projects.json"

export default function Work() {
    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none flex-col sm:flex-row">
            <SidebarProjects />
            <div className="py-10 w-full grow-0 overflow-y-auto">
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 container mx-auto px-5 gap-10 mt-14 sm:mt-0">
                    {
                        projects.map((project) => (
                            <CardProjects key={project.id} date={project.date} demoLink={project.url} description={project.description} imageSrc={project.image} title={project.name} />
                        ))
                    }
                </div>
            </div>

        </main>
    )
}

function CardProjects({ imageSrc, title, date, description, demoLink }: { imageSrc: string, title: string, date: string, description: string, demoLink: string }) {
    return (
        <div className="justify-self-center w-full h-full">
            <span className="text-indigo-400 text-lg truncate max-w-44 inline-block">{title}</span>
            <span className="text-color-3 text-sm"> / {date}</span>
            <div className="border-2 rounded-xl max-w-80">
                <div className="relative aspect-video">
                    <div className="bg-color-1 size-7 p-1 absolute top-2 right-2 z-10 rounded-md" >
                        <IconReact />
                    </div>
                    <Image fill src={imageSrc} alt={title} className="object-cover rounded-t-xl" />
                </div>
                <div className="m-2">
                    <p className="my-4 line-clamp-4">{description}</p>
                    <Link href={demoLink} className="px-3 py-2 bg-color-2 rounded-md inline-block">visit-demo</Link>
                </div>
            </div>
        </div>
    )
}
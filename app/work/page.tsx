'use client'
import { IconReact } from "@/components/icons"
import SidebarProjects from "@/components/sidebarProjects"
import Image from "next/image"
import Link from "next/link"

import DBprojects from "@/db/projects.json"
import categories from "@/db/categories.json"
import { useEffect, useState } from "react"

export default function Work() {
    const [selected, setSelected] = useState<any[]>([])
    const [projects, setProjects] = useState<any[]>(DBprojects)

    useEffect(() => {
        let projects = DBprojects
        if (selected.length > 0) {
            projects = projects.filter(project => project.category_ids.some(category_id => selected.includes(category_id)))
        }
        setProjects(projects)
    }, [selected])

    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none flex-col sm:flex-row">
            <SidebarProjects selected={setSelected} />
            <div className="py-10 w-full grow-0 overflow-y-auto">
                <div className="max-w-2xl mx-auto px-3 space-y-10 mt-10">
                    {
                        projects.map((project) => (
                            <CardProjects project={project} key={project.id} />
                        ))
                    }
                </div>
            </div>

        </main >
    )
}

function CardProjects({ project }: { project: any }) {
    return (
        <Link href={project.url} target="_blank" key={project.id} className="flex gap-4 items-start w-full group">
            <div className="relative aspect-video md:w-32 w-24 mt-2 shrink-0">
                <Image fill src={project.image} alt={project.name} className="object-cover rounded-md" />
            </div>
            <div>
                <h2 className="text-xl text-pretty">{project.name}</h2>
                <p className="text-color-3 mt-3">{project.description}</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                    {project.category_ids.map((category_id: number) => (
                        <span key={category_id} className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700" >
                            {categories[category_id].name}
                        </span>
                    )
                    )}
                </div>
            </div>
        </Link>

    )
}
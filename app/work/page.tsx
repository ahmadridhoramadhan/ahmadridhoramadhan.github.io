'use client'
import { IconReact } from "@/components/icons"
import Sidebar from "@/app/work/sidebar"
import Image from "next/image"
import Link from "next/link"

import DBprojects from "@/utils/db/projects.json"
import categories from "@/utils/db/categories.json"
import { useEffect, useState } from "react"
import Project from "@/utils/interface/project"

export default function Work() {
    const [selected, setSelected] = useState<number[]>([])
    const [projects, setProjects] = useState<Project[]>(DBprojects)

    useEffect(() => {
        let projects: Project[] = DBprojects
        if (selected.length > 0) {
            projects = projects.filter(project => project.category_ids.some(category_id => selected.includes(category_id)))
        }
        setProjects(projects)
    }, [selected])

    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none flex-col sm:flex-row">
            <Sidebar selected={setSelected} />
            <div className="py-10 w-full grow-0 overflow-y-auto">
                <div className="max-w-2xl mx-auto px-1 space-y-10 mt-10">
                    {
                        [...projects].reverse().map((project: Project) => (
                            <CardProjects project={project} key={project.id} />
                        ))
                    }
                </div>
            </div>

        </main >
    )
}

function CardProjects({ project }: { project: Project }) {
    return (
        <Link href={project.url} target="_blank" key={project.id} className="flex gap-4 items-start w-full group flex-col sm:flex-row transition-all hover:bg-color-2/30 rounded-md py-3 px-2">
            <div className="relative aspect-video md:w-32 sm:w-24 w-40 mt-2 shrink-0 order-2 sm:order-1">
                <Image fill src={project.image} alt={project.name} className="object-cover rounded-md" />
            </div>
            <div className="sm:order-2">
                <div className="flex items-end gap-4">
                    <h2 className="text-xl text-pretty">{project.name}</h2>
                    <span className="text-xs text-color-3/80">{project.date}</span>
                </div>
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
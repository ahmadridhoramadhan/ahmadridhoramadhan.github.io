'use client'

import { useState } from "react";
import { IconCSS, IconLaravel, IconReact, IconTriangle, IconVue } from "./icons"
import { AnimatePresence, motion } from "framer-motion";

import categories from '@/db/categories.json'

export default function SidebarProjects() {
    const [isProjectsMenuOpen, setIspProjectsMenuOpen] = useState(true);

    return (
        <div className="sm:border-r-2 sm:max-w-xs w-full border-color-2 pl-5 pt-5 sm:block absolute sm:static z-20 backdrop-blur-md sm:backdrop-blur-0 pb-4">
            <button onClick={() => setIspProjectsMenuOpen(v => !v)} className="flex items-center gap-2">
                <div className={"w-4 h-3 transition-all " + (isProjectsMenuOpen ? 'rotate-0' : '-rotate-90')}><IconTriangle /></div>
                Projects
            </button>
            <AnimatePresence>
                {
                    isProjectsMenuOpen ?
                        <motion.div className="space-y-4 overflow-hidden ml-2"
                            initial={{ height: 0, marginTop: 0 }} animate={{ height: 'auto', marginTop: '1rem' }} exit={{ height: 0, marginTop: 0 }}>
                            {categories.map(category => <FilterInput key={category.id} name={category.name} icon={category.icon} />)}
                        </motion.div> : ''
                }
            </AnimatePresence>
        </div>
    )
}

function FilterInput({ label, name, value, icon }: { label?: string, name: string, value?: string, icon: string }) {
    return (
        <label htmlFor={name} className="flex items-center">
            <input type="checkbox" name={name} id={name} value={value ?? name} className="peer hidden" />
            <div className="size-7 rounded-md bg-color-2 items-center justify-center opacity-40 peer-checked:opacity-100 mr-3 peer-checked:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
            <div className="size-7 rounded-md bg-color-2 opacity-40 peer-checked:opacity-100 mr-3 peer-checked:hidden"></div>
            <div className="peer-checked:opacity-100 opacity-40 hover:opacity-100 transition-all flex items-center gap-1">
                {
                    icon == '' ? '' :
                        <span className="inline-block size-6" dangerouslySetInnerHTML={{ __html: icon }}></span>
                }
                <span>{label ?? name}</span>
            </div>
        </label>
    )
}
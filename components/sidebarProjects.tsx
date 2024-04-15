'use client'

import { useEffect, useState } from "react";
import { IconTriangle } from "./icons"
import { AnimatePresence, motion } from "framer-motion";

import categories from '@/db/categories.json'

export default function SidebarProjects({ selected }: { selected: any }) {
    const [isProjectsMenuOpen, setIspProjectsMenuOpen] = useState(true);

    const setSelected = () => {
        const selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked')
        let selectedValue: number[] = [];
        selectedCategories.forEach((categoryElement: any) => selectedValue.push(categoryElement.value))
        selected(selectedValue)
    }

    const variants = {
        open: {
            height: 'auto',
            marginTop: '1rem',
        },
        closed: {
            height: 0,
            marginTop: 0,
        }
    }

    return (
        <div className="lg:border-r-2 lg:max-w-xs w-full border-color-2 pl-5 pt-5 lg:block absolute lg:static z-20 backdrop-blur-md lg:backdrop-blur-0 pb-4">
            <button onClick={() => setIspProjectsMenuOpen(v => !v)} className="flex items-center gap-2">
                <div className={"w-4 h-3 transition-all " + (isProjectsMenuOpen ? 'rotate-0' : '-rotate-90')}><IconTriangle /></div>
                Projects
            </button>
            <motion.div className="space-y-4 overflow-hidden h-0"
                initial={'close'} animate={isProjectsMenuOpen ? 'open' : 'close'} variants={variants}>
                {categories.map(category => <CheckboxInput key={category.id} name={category.name} icon={category.icon} id={category.id} setSelected={setSelected} />)}
            </motion.div>
        </div>
    )
}

function CheckboxInput({ label, name, value, icon, id, setSelected }: { label?: string, name: string, value?: string, icon: string, id: number, setSelected: any }) {
    return (
        <label htmlFor={name} className="flex items-center">
            <input type="checkbox" name={name} id={name} value={id} className="peer hidden" onChange={setSelected} />
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
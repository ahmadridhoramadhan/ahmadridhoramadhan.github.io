'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IconBurger, IconClose } from "./icons";
import { useEffect, useState } from "react";

export default function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
        setIsBurgerMenuOpen(false);
    }, [pathname]);

    const pagesList = [
        { name: 'home', path: '/' },
        { name: 'showcase', path: '/work' },
        { name: 'my-code', path: '/code' },
        // { name: 'about', path: '/about' }
    ]

    return (
        <div className="relative">
            <header className="flex border-b-2 border-teal-800 select-none px-2 md:px-0">
                <div className="md:flex hidden flex-auto">
                    <Link href={'/'} className="max-w-xs w-full px-4 h-full flex items-center text-xs md:text-base border-r-2 border-color-2">Ahmad Ridho Ramadhan.</Link>
                    {
                        pagesList.map((page, i) => (
                            <Link href={page.path} className={"px-4 h-full flex items-center relative border-r-2 border-color-2"} key={i}>
                                {page.name}
                                {pathname == page.path ?
                                    <motion.span layoutId="activeNav" className="absolute top-0 bottom-0 left-0 right-0 bg-color-2 -z-10"></motion.span>
                                    : ''
                                }
                            </Link>
                        ))
                    }
                </div>
                <Link href={'/contact'} className="border-l-2 px-5 py-3 border-teal-800 text-xl hidden md:block relative">
                    contact
                    {
                        pathname == '/contact' ?
                            <motion.span className="absolute top-0 bottom-0 left-0 right-0 bg-color-2 -z-10"></motion.span>
                            : ''
                    }
                </Link>

                {/* mobile nav */}
                <div className="flex items-center md:hidden text-color-3 flex-auto">
                    Ahmad Ridho Ramadhan.
                </div>

                <button className="size-10 md:hidden my-2 text-color-3" onClick={() => setIsBurgerMenuOpen(v => !v)}>
                    {
                        isBurgerMenuOpen ? <IconClose /> : <IconBurger />
                    }
                </button>
            </header>
            <AnimatePresence>
                {
                    isBurgerMenuOpen ?
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="flex flex-col absolute left-0 right-0 z-50 gap-2 divide-y-2 divide-color-2/50 border-b-2 border-color-2/50 overflow-hidden bg-color-1 md:hidden">
                            {
                                pagesList.map((page, i) => (
                                    <Link href={page.path} key={i} className={"px-4 py-2"}>{page.name}</Link>
                                ))
                            }
                            <Link href={'/contact'} className={"px-4 py-2 text-lg"}>Contact</Link>
                        </motion.div>
                        : ''
                }
            </AnimatePresence>
        </div>
    )
}
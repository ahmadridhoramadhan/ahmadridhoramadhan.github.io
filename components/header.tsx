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

    return (
        <div className="relative">
            <header className="flex border-b-2 justify-between border-teal-800 select-none px-2">
                <div className="sm:flex divide-x-2 border-r-2 divide-teal-800 border-teal-800 hidden">
                    <Link href={'/'} className="px-4 h-full flex items-center text-xs md:text-base">Ahmad Ridho Ramadhan.</Link>
                    <Link href={'/'} className={"px-4 h-full flex items-center relative "}>
                        home
                        {pathname == '/' ?
                            <motion.span layoutId="activeNav" className="absolute top-0 bottom-0 left-0 right-0 bg-color-2 -z-10"></motion.span>
                            : ''
                        }
                    </Link>
                    <Link href={'/work'} className={"px-4 h-full flex items-center relative "}>
                        my-work
                        {pathname == '/work' ?
                            <motion.span layoutId="activeNav" className="absolute top-0 bottom-0 left-0 right-0 bg-color-2 -z-10"></motion.span>
                            : ''
                        }
                    </Link>
                </div>
                <div className="border-l-2 px-5 py-3 border-teal-800 text-xl hidden sm:block">
                    contact
                </div>

                <div className="flex items-center sm:hidden text-color-3">
                    Ahmad Ridho Ramadhan.
                </div>

                <button className="size-10 sm:hidden my-2 text-color-3" onClick={() => setIsBurgerMenuOpen(v => !v)}>
                    {
                        isBurgerMenuOpen ? <IconClose /> : <IconBurger />
                    }
                </button>
            </header>
            <AnimatePresence>
                {
                    isBurgerMenuOpen ?
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="flex flex-col absolute left-0 right-0 z-50 gap-2 divide-y-2 divide-color-2/50 border-b-2 border-color-2/50 overflow-hidden bg-color-1 sm:hidden">
                            <Link href={'/'} className={"px-4 py-2"}>home</Link>
                            <Link href={'/work'} className={"px-4 py-2"}>my-work</Link>
                            <Link href={'/work'} className={"px-4 py-2 text-xl"}>Contact</Link>
                        </motion.div>
                        : ''
                }
            </AnimatePresence>
        </div>
    )
}
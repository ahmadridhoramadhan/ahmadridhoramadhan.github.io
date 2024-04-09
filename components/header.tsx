'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex border-b-2 justify-between border-teal-800 select-none">
            <div className="flex divide-x-2 border-r-2 divide-teal-800 border-teal-800">
                <Link href={'/'} className="px-4 h-full flex items-center">Ahmad Ridho Ramadhan.</Link>
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
            <div className="border-l-2 px-5 py-3 border-teal-800 text-xl">
                contact
            </div>
        </header>
    )
}
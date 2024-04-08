'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex border-b-2 justify-between border-teal-800">
            <div className="flex divide-x-2 border-r-2 divide-teal-800 border-teal-800">
                <Link href={'/'} className="px-4 h-full flex items-center">Ahmad Ridho Ramadhan.</Link>
                <Link href={'/'} className={"px-4 h-full flex items-center " + (pathname == '/' ? 'bg-color-2' : '')}>home</Link>
                <Link href={'/work'} className="px-4 h-full flex items-center">my-work</Link>
            </div>
            <div className="border-l-2 px-5 py-3 border-teal-800 text-xl">
                contact
            </div>
        </header>
    )
}
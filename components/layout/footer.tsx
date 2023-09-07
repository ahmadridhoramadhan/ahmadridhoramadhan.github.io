'use client'
import SocialMediaNav from "./socialMediaNav";
import { usePathname } from "next/navigation";

export default function Footer() {
    const path = usePathname()
    return (
        <footer className="bg-slate-900 p-5 text-center font-mono text-sm text-gray-400 mt-5 select-none z-40">
            <div className={"relative md:fixed md:top-0 md:bottom-0 flex items-center justify-center " + (path == '/about' ? 'md:left-10' : 'md:right-10')}>
                {
                    path == '/contact' ?
                        ''
                        :
                        <SocialMediaNav className="flex gap-5 md:gap-10 mb-5 md:flex-col justify-center" />
                }
            </div>

            <p>designed and made by</p>
            <span className="text-teal-500">Ahmad Ridho Ramadhan</span>
        </footer>
    );
}

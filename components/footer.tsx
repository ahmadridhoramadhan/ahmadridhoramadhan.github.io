import Link from "next/link";
import { IconGithub, IconInstagram, IconLInkedin } from "./icons";

export default function Footer() {
    return (
        <footer className="flex border-t-2 justify-between border-color-2 h-12 text-color-3">
            <SocialMedias />
            <Link href={'https://github.com/ahmadridhoramadhan'} target="_blank" className="border-l-2 px-5 py-3 border-color-2 gap-1 items-center text-sm hidden sm:flex">
                @ahmadridhoramadhan <div className="size-6"><IconGithub /></div>
            </Link>
        </footer>
    )
}

function SocialMedias() {
    return (
        <div className="flex divide-x-2 sm:border-r-2 divide-color-2 border-color-2 w-full sm:w-auto justify-center sm:justify-start">
            <div className="flex items-center px-3 flex-auto sm:flex-none">
                find me in:
            </div>
            <Link target="_blank" href={'https://www.linkedin.com/in/ahmad-ridho-ramadhan/'} className="h-full p-3"> <IconLInkedin /></Link>
            <Link target="_blank" href={'https://www.instagram.com/rdhormdahnn/'} className="h-full p-3"> <IconInstagram /></Link>
            <Link target="_blank" href={'https://github.com/ahmadridhoramadhan'} className="h-full p-3 sm:hidden"><IconGithub /></Link>
        </div>

    )
}
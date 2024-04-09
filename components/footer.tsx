import Link from "next/link";
import { IconEmail, IconFacebook, IconGithub, IconInstagram, IconLInkedin, IconTwitterOrX } from "./icons";

export default function Footer() {
    return (
        <footer className="flex border-t-2 justify-between border-color-2 h-12 text-color-3">
            <SocialMedias />
            <Link href={'https://github.com/ahmadridhoramadhan'} target="_blank" className="border-l-2 px-5 py-3 border-color-2 flex gap-1 items-center text-sm">
                @ahmadridhoramadhan <div className="size-6"><IconGithub /></div>
            </Link>
        </footer>
    )
}

function SocialMedias() {
    const data = [
        {
            name: 'Instagram',
            icon: <IconInstagram />,
            url: 'https://www.instagram.com/rdhormdahnn/'
        },
        {
            name: 'Facebook',
            icon: <IconFacebook />,
            url: 'https://www.facebook.com/ahmadridho.ramadhan.35'
        },
        {
            name: 'Twitter',
            icon: <IconTwitterOrX />,
            url: 'https://twitter.com/AHMADRIDHORAMA3'
        },
        {
            name: 'Email',
            icon: <IconEmail />,
            url: 'https://www.instagram.com/ahmadridhoramadhan'
        },
        {
            name: 'Linkedin',
            icon: <IconLInkedin />,
            url: 'https://www.linkedin.com/in/ahmad-ridho-ramadhan/'
        },
    ]
    return (
        <div className="flex divide-x-2 border-r-2 divide-color-2 border-color-2">
            {data.map((item, index) => (
                <Link target="_blank" href={item.url} className="h-full p-3" key={index}>{item.icon}</Link>
            ))}
        </div>
    )
}
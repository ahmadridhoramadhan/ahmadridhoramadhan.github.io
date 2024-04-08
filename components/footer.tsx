import { IconEmail, IconFacebook, IconGithub, IconInstagram, IconTwitterOrX } from "./icons";

export default function Footer() {
    return (
        <footer className="flex border-t-2 justify-between border-color-2 h-12 text-color-3">
            <div className="flex divide-x-2 border-r-2 divide-color-2 border-color-2">
                <div className="h-full p-3"><IconInstagram /></div>
                <div className="h-full p-3"><IconFacebook /></div>
                <div className="h-full p-3"><IconTwitterOrX /></div>
                <div className="h-full p-3"><IconEmail /></div>
            </div>
            <div className="border-l-2 px-5 py-3 border-color-2 flex gap-1 items-center text-sm">
                @ahmadridhoramadhan <div className="size-6"><IconGithub /></div>
            </div>
        </footer>
    )
}
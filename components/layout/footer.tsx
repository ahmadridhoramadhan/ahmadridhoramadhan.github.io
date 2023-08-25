import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const socialMediaLogos = [
        {
            alt: 'email',
            src: '/social_media_logo/email.png',
            href: 'mailto:ahmadridhor02@gmail.com'
        },
        {
            alt: 'github',
            src: '/social_media_logo/github.png',
            href: 'https://github.com/ahmadridhoramadhan'
        },
        {
            alt: 'instagram',
            src: '/social_media_logo/instagram.png',
            href: ''
        },
        {
            alt: 'twitter',
            src: '/social_media_logo/twitter.png',
            href: 'https://twitter.com/AHMADRIDHORAMA3'
        },
        {
            alt: 'whatsapp',
            src: '/social_media_logo/whatsapp.png',
            href: 'https://wa.me/62882020539449'
        },
    ]

    return (
        <footer className="bg-slate-900 p-5 text-center font-mono text-sm text-gray-400 mt-5">
            <div className="relative flex gap-5 mx-auto w-fit mb-5">
                {socialMediaLogos.map((socialMediaLogo, i) => {
                    return (
                        <Link target="_blank" href={socialMediaLogo.href} className="relative w-7 h-7" key={i}>
                            <Image
                                alt={socialMediaLogo.alt}
                                src={socialMediaLogo.src}
                                className=""
                                fill
                            />
                        </Link>
                    )
                })}
            </div>

            <p>designed and made by</p>
            <span className="text-teal-500">Ahmad Ridho Ramadhan</span>
        </footer>
    );
}

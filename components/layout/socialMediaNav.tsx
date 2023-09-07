'use client'
import Image from "next/image"
import Link from "next/link"

import { Variants, motion } from 'framer-motion'
import { usePathname } from "next/navigation"

const variantsAnimation: Variants = {
    open: {
        width: 'auto'
    },
    closed: {
        width: 0
    }
}

export default function SocialMediaNav({ className }: { className?: string }) {
    const path = usePathname()
    const socialMediaLogos = [
        {
            title: 'ahmadridhoramadhan2@gmail.com',
            alt: 'email',
            src: '/social_media_logo/email.png',
            href: 'mailto:ahmadridhoramadhan2@gmail.com'
        },
        {
            title: 'ahmadridhoramadhan',
            alt: 'github',
            src: '/social_media_logo/github.png',
            href: 'https://github.com/ahmadridhoramadhan'
        },
        {
            title: 'instagram',
            alt: 'instagram',
            src: '/social_media_logo/instagram.png',
            href: ''
        },
        {
            title: 'twitter',
            alt: 'twitter',
            src: '/social_media_logo/twitter.png',
            href: 'https://twitter.com/AHMADRIDHORAMA3'
        },
        {
            title: '+62 882 0205 39449',
            alt: 'whatsapp',
            src: '/social_media_logo/whatsapp.png',
            href: 'https://wa.me/62882020539449'
        },
    ]

    return (
        <motion.div layoutId="socialMediaNav" layout="preserve-aspect" className={className}>
            {
                socialMediaLogos.map((socialMediaLogo, i) => {
                    return (
                        <Link target="_blank" href={socialMediaLogo.href} className={"flex " + (path == '/contact' ? 'gap-3' : '')} key={i}>
                            <div className="relative sm:w-7 sm:h-7 h-5 w-5">
                                <Image alt={socialMediaLogo.alt} src={socialMediaLogo.src} className="" fill />
                            </div>

                            <motion.p variants={variantsAnimation} animate={path == '/contact' ? 'open' : 'closed'} initial={'closed'} transition={{ delay: 0.5 }} className="whitespace-nowrap overflow-hidden text-sm md:text-base">
                                {socialMediaLogo.title}
                            </motion.p>

                        </Link>
                    )
                })
            }
        </motion.div>
    )
}
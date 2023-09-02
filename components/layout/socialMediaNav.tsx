'use client'
import Image from "next/image"
import Link from "next/link"

import { motion } from 'framer-motion'

export default function SocialMediaNav({ className }: { className?: string }) {
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
        <motion.div layoutId="socialMediaNav" layout="preserve-aspect" className={className}>
            {
                socialMediaLogos.map((socialMediaLogo, i) => {
                    return (
                        <Link target="_blank" href={socialMediaLogo.href} className="relative w-7 h-7" key={i}>
                            <Image alt={socialMediaLogo.alt} src={socialMediaLogo.src} className="" fill />
                        </Link>
                    )
                })
            }
        </motion.div>
    )
}
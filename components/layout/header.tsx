'use client'
import { useState } from 'react'
import Link from 'next/link'

import { BurgerMenuIcon, ChatIcon, CloseIcon, HomeIcon, PersonIcon } from '../icons'
import { motion, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navbarVariants: Variants = {
    open: {
        width: 'auto'
    },
    closed: {
        width: 0
    }
}
const iconVariants: Variants = {
    hover: {
        width: 'auto'
    },
    hidden: {
        width: 0
    }
}

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNav = () => setIsNavOpen((value) => !value)
    const path = usePathname()

    const navs = [
        {
            title: 'Home',
            path: '/',
            icon: (<HomeIcon />)
        },
        {
            title: 'About',
            path: '/about',
            icon: (<PersonIcon />)
        },
        {
            title: 'Contact',
            path: '/contact',
            icon: (<ChatIcon />)
        },
    ]

    return (
        <header className={'fixed md:right-10 right-3 top-0 py-5 z-50'}>
            <motion.nav className='flex'
                initial={false}
                animate={isNavOpen ? 'open' : 'closed'}
            >

                <motion.div className={'flex items-center'} variants={navbarVariants}>
                    <div className='flex md:gap-10 gap-5 md:pr-10 pr-5 w-full justify-end'>
                        {
                            navs.map((nav, i) => {
                                return (
                                    <motion.div whileHover={'hover'} className='md:w-7 md:h-7 w-5 h-5 relative flex items-center' key={i}>
                                        <Link href={nav.path} className={'w-full h-full hover:scale-110 transition-all hover:text-green-500' + (path == nav.path ? ' text-green-500' : '')}>{nav.icon}</Link>
                                        <motion.div initial={{ width: 0, padding: 0 }} variants={iconVariants} className='overflow-hidden absolute right-8 rounded bg-slate-800'>{nav.title}</motion.div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </motion.div>

                <motion.button className='block md:w-10 md:h-10 h-7 w-7' type='button' onClick={handleNav} whileTap={{ scale: 1.3 }}>
                    {isNavOpen ? <CloseIcon /> : <BurgerMenuIcon />}
                </motion.button>

            </motion.nav>
        </header>
    )
}
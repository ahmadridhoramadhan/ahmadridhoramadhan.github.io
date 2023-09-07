'use client'
import { useState } from 'react'
import Link from 'next/link'

import { BurgerMenuIcon, ChatIcon, CloseIcon, HomeIcon, PersonIcon } from '../icons'
import { motion, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variantsAnimation: Variants = {
    open: {
        width: 'auto'
    },
    closed: {
        width: 0
    }
}

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNav = () => setIsNavOpen((value) => !value)
    const path = usePathname()

    return (
        <header className={'fixed md:right-10 right-3 top-0 py-5 z-50'}>
            <motion.nav className='flex'
                initial={false}
                animate={isNavOpen ? 'open' : 'closed'}
            >

                <motion.div className={'flex items-center'} variants={variantsAnimation}>
                    <div className='flex md:gap-10 gap-5 md:pr-10 pr-5 w-full justify-end'>
                        <Link href={'/'} className={'md:w-7 md:h-7 w-5 h-5 hover:scale-110 transition-all hover:text-green-500' + (path == '/' ? ' text-green-500' : '')}><HomeIcon /></Link>
                        <Link href={'/contact'} className={'md:w-7 md:h-7 h-5 w-5 hover:scale-110 transition-all hover:text-green-500' + (path == '/contact' ? ' text-green-500' : '')}><ChatIcon /></Link>
                        <Link href={'/about'} className={'md:w-7 md:h-7 h-5 w-5 hover:scale-110 transition-all hover:text-green-500' + (path == '/about' ? ' text-green-500' : '')}><PersonIcon /></Link>
                    </div>
                </motion.div>

                <motion.button className='block md:w-10 md:h-10 h-7 w-7' type='button' onClick={handleNav} whileTap={{ scale: 1.3 }}>
                    {isNavOpen ? <CloseIcon /> : <BurgerMenuIcon />}
                </motion.button>

            </motion.nav>
        </header>
    )
}
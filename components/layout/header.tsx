'use client'
import { useState } from 'react'
import { BurgerMenuIcon, ChatIcon, CloseIcon, HomeIcon, PersonIcon } from '../icons'
import Link from 'next/link'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const handleNav = () => {
        setIsNavOpen((value) => !value)
    }
    return (
        <header className='fixed right-0 top-0 py-5'>
            <div className='flex items-center '>

                {
                    isNavOpen ?
                        <div className='flex gap-10 pr-10 '>
                            <Link href={'/'} className='w-7 h-7'><HomeIcon /></Link>
                            <Link href={''} className='w-7 h-7'><ChatIcon /></Link>
                            <Link href={''} className='w-7 h-7'><PersonIcon /></Link>
                        </div> : ''
                }

                <button className='block w-10 h-10 mr-10' type='button' onClick={handleNav}>
                    {isNavOpen ? <CloseIcon /> : <BurgerMenuIcon />}
                </button>

            </div>
        </header>
    )
}
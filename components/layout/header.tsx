'use client'
import { useEffect, useState } from 'react'
import { BurgerMenuIcon, ChatIcon, CloseIcon, HomeIcon, PersonIcon } from '../icons'
import Link from 'next/link'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [nav, setNav] = useState(<div></div>)

    const handleNav = () => {
        setIsNavOpen((value) => !value)
    }

    useEffect(() => {
        const showNav = async () => {
            if (isNavOpen) {
                setNav(
                    <div className='flex gap-10 pr-10 w-full justify-end'>
                        <Link href={'/'} className='w-7 h-7'><HomeIcon /></Link>
                        <Link href={''} className='w-7 h-7'><ChatIcon /></Link>
                        <Link href={''} className='w-7 h-7'><PersonIcon /></Link>
                    </div>
                )
            } else {
                setTimeout(() => {
                    setNav(<div></div>)
                }, 300);
            }
        }
        showNav()
    }, [isNavOpen])


    return (
        // <header className={'fixed right-10 top-0 py-5 z-50 flex items-center justify-end transition-all duration-300 ' + (isNavOpen ? 'w-60' : 'w-10')}>

        //     {nav}

        //     <button className='block w-10 h-10' type='button' onClick={handleNav}>
        //         {isNavOpen ? <CloseIcon /> : <BurgerMenuIcon />}
        //     </button>


        // </header>
        <header className={'fixed right-10 top-0 py-5 z-50 flex'}>
            <div className={'flex items-center transition-all duration-300 ' + (isNavOpen ? 'w-60' : 'w-0')}>
                {nav}
            </div>

            <button className='block w-10 h-10' type='button' onClick={handleNav}>
                {isNavOpen ? <CloseIcon /> : <BurgerMenuIcon />}
            </button>
        </header>
    )
}
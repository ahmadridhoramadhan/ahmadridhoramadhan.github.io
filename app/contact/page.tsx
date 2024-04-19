import Link from 'next/link'
import { Dropdown } from '../../components/Dropdown'

export default function Contact() {
    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none flex-col sm:flex-row">
            <SidebarContact />
            <div className="overflow-auto w-full">
                <div className="container mx-auto flex justify-center items-center h-full flex-col">
                    <form className='shrink-0 max-w-md w-full space-y-4 px-2'>
                        <div>
                            <label htmlFor="name">name:</label>
                            <input type="text" name="name" id="name" className='w-full border border-color-2 bg-transparent rounded-md py-1 pl-2 pr-1 ring-0 outline-none focus:border-color-3 transition-colors' />
                        </div>
                        <div>
                            <label htmlFor="email">email:</label>
                            <input type="email" name="email" id="email" className='w-full border border-color-2 bg-transparent rounded-md py-1 pl-2 pr-1 ring-0 outline-none focus:border-color-3 transition-colors' />
                        </div>
                        <div>
                            <label htmlFor="message">message:</label>
                            <textarea name="message" id="message" rows={7} className='w-full border border-color-2 bg-transparent rounded-md py-1 pl-2 pr-1 ring-0 outline-none focus:border-color-3 transition-colors'></textarea>
                        </div>
                        <button className='py-2 px-4 bg-color-2 rounded-md'>submit-message</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

function SidebarContact() {
    const dropdownItemsStyle = "flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
    return (
        <aside className="sm:border-r-2 border-0 max-w-xs w-full border-color-2 *:border-color-2 py-1 *:py-2 *:pl-2 pb-5">
            <Dropdown title='Contacts'>
                <li className={dropdownItemsStyle}><Link href={''} className='text-sm'>ahmadridhoramadhan2.gmail.com</Link></li>
                <li className={dropdownItemsStyle}><Link href={''}>+62 882-0205-39449</Link></li>
            </Dropdown>
            <Dropdown title='find-me-also-in'>
                <li className={dropdownItemsStyle}>Linkedin</li>
                <li className={dropdownItemsStyle}>Instagram</li>
                <li className={dropdownItemsStyle}>Github</li>
                <li className={dropdownItemsStyle}>Whatsapp</li>
            </Dropdown>
        </aside>
    )
}

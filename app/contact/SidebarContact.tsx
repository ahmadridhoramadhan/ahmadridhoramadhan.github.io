import Link from 'next/link';
import { Dropdown } from '../../components/Dropdown';

export function SidebarContact() {
    const dropdownItemsStyle = "flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity";
    return (
        <aside className="sm:border-r-2 border-0 max-w-xs w-full border-color-2 *:border-color-2 pt-3 *:py-1 pl-3 pb-5">
            <Dropdown title='Contacts'>
                <li className={dropdownItemsStyle}><Link href={'mailto:ahmadridhoramadhan2@gmail.com'} className='text-sm'>ahmadridhoramadhan2@gmail.com</Link></li>
                <li className={dropdownItemsStyle}><Link href={''}>+62 882-0205-39449</Link></li>
            </Dropdown>
            <Dropdown title='find-me-also-in'>
                <li className={dropdownItemsStyle}><Link href={'https://www.linkedin.com/in/ahmad-ridho-ramadhan/'} target='_blank'>Linkedin</Link></li>
                <li className={dropdownItemsStyle}><Link href={''} target='_blank'>Instagram</Link></li>
                <li className={dropdownItemsStyle}><Link href={'https://github.com/ahmadridhoramadhan'} target='_blank'>Github</Link></li>
                <li className={dropdownItemsStyle}><Link href={'https://wa.me/+62882020539449'} target='_blank'>Whatsapp</Link></li>
            </Dropdown>
        </aside>
    );
}

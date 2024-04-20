import categories from '@/utils/db/categories.json'
import { Dropdown } from "../../components/Dropdown";

export default function Sidebar({ selected }: { selected: any }) {
    const setSelected = () => {
        const selectedCategories = document.querySelectorAll('input[type="checkbox"]:checked')
        let selectedValue: number[] = [];
        selectedCategories.forEach((categoryElement: any) => selectedValue.push(Number(categoryElement.value)))
        selected(selectedValue)
    }

    return (
        <div className="lg:border-r-2 lg:max-w-xs w-full border-color-2 pl-3 *:py-1 pt-3 lg:block absolute lg:static z-20 backdrop-blur-md lg:backdrop-blur-0 pb-4 overflow-auto">
            <Dropdown title="projects">
                {categories.map(category => (
                    <li key={category.id} className="mt-2 last:mb-2">
                        <CheckboxInput name={category.name} icon={category.icon} id={category.id} setSelected={setSelected} />
                    </li>
                ))}
            </Dropdown>
        </div>
    )
}

function CheckboxInput({ label, name, value, icon, id, setSelected }: { label?: string, name: string, value?: string, icon: string, id: number, setSelected: any }) {
    return (
        <label htmlFor={name} className="flex items-center">
            <input type="checkbox" name={name} id={name} value={id} className="peer hidden" onChange={setSelected} />
            <div className="size-6 rounded-md bg-color-2 items-center justify-center opacity-40 peer-checked:opacity-100 mr-3 peer-checked:flex hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            </div>
            <div className="size-6 rounded-md border opacity-40 peer-checked:opacity-100 mr-3 peer-checked:hidden"></div>
            <div className="peer-checked:opacity-100 opacity-40 hover:opacity-100 transition-all flex items-center gap-1">
                {
                    icon == '' ? '' :
                        <span className="inline-block size-6" dangerouslySetInnerHTML={{ __html: icon }}></span>
                }
                <span>{label ?? name}</span>
            </div>
        </label>
    )
}

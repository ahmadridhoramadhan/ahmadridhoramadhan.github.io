import { Dropdown } from "@/components/Dropdown"

export default function Code() {
    return (
        <main className="flex-auto flex items-stretch overflow-clip select-none flex-col sm:flex-row">
            <SidebarCode />
            <div className="py-10 w-full grow-0 overflow-y-auto relative">
                <div className="absolute lg:left-3 text-color-3 right-2 top-2 z-20">
                    result : 4
                </div>
                <div className="container mx-auto overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 lg:mt-6 px-3">
                        <div className="bg-color-2 p-4 rounded-md shadow-md">
                            <h2 className="text-2xl text-color-3">Code</h2>
                            <p className="text-color-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                        </div>
                        <div className="bg-color-2 p-4 rounded-md shadow-md">
                            <h2 className="text-2xl text-color-3">Code</h2>
                            <p className="text-color-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                        </div>
                        <div className="bg-color-2 p-4 rounded-md shadow-md">
                            <h2 className="text-2xl text-color-3">Code</h2>
                            <p className="text-color-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                        </div>
                        <div className="bg-color-2 p-4 rounded-md shadow-md">
                            <h2 className="text-2xl text-color-3">Code</h2>
                            <p className="text-color-3 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function SidebarCode() {
    return (
        <div className="lg:border-r-2 lg:max-w-xs w-full border-color-2 pl-3 *:py-1 pt-3 lg:block absolute lg:static z-20 backdrop-blur-md lg:backdrop-blur-0 pb-4 overflow-auto">
            <Dropdown title="my-template">
                <li>lala</li>
            </Dropdown>
            <Dropdown title="components">
                <li>lala</li>
            </Dropdown>
        </div>
    )
}
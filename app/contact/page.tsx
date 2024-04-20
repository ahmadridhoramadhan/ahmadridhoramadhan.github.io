import { SidebarContact } from './SidebarContact'

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



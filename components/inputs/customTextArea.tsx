export default function CustomTextArea({ name, placeholder }: { name: string, placeholder: string }) {
    return (
        <div className="relative select-none w-full">
            <textarea name={name} placeholder=" " id={name} className="w-full bg-transparent outline-none border-b-2 border-green-500 peer pl-3 pb-1 md:text-xl"></textarea>
            <label htmlFor={name} className="peer absolute transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-0 md:peer-placeholder-shown:text-xl peer-placeholder-shown:text-lg md:peer-focus:text-base peer-focus:text-sm peer-focus:-left-1 peer-focus:-top-6 -top-6 -left-1 md:text-base text-sm">{placeholder}</label>
        </div>
    )
}
import SocialMediaNav from "./socialMediaNav";

export default function Footer() {
    return (
        <footer className="bg-slate-900 p-5 text-center font-mono text-sm text-gray-400 mt-5 select-none z-40">
            <div className="relative flex gap-5 md:gap-10 mb-5 md:fixed md:top-0 md:bottom-0 md:flex-col md:right-10 justify-center">
                <SocialMediaNav />
            </div>

            <p>designed and made by</p>
            <span className="text-teal-500">Ahmad Ridho Ramadhan</span>
        </footer>
    );
}

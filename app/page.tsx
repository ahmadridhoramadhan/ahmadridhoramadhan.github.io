'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-auto flex justify-center items-center">
      <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} layout transition={{ duration: 0.7 }} className="max-w-4xl aspect-video box-content relative pt-32 pl-20 overflow-hidden">
        <h1 className="text-7xl z-10 relative whitespace-nowrap">
          Ahmad Ridho Ramadhan
        </h1>
        <h2 className="text-indigo-300 text-2xl">&gt;web Developer</h2>
        <div className="mt-10 relative z-10 text-color-3">
          <div>{"//"} hi, you can call me Ridho</div>
          <div>{"//"} I really like coding and do something new </div>
          <div>{"//"} Click <span className="text-pink-400">here</span> if you want to say hello</div>
        </div>
        <div className="absolute top-0 left-0 border-t-[1.5rem] aspect-video w-full max-w-xs border-l-[1.5rem]"></div>
        <div className="absolute bottom-0 right-0 border-b-[1.5rem] aspect-video w-full max-w-xs border-r-[1.5rem]"></div>
      </motion.div>
    </main>
  );
}

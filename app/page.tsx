'use client'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-auto flex justify-center items-center sm:px-0 px-2">
      <motion.div initial={{ width: 0, height: 0 }} animate={{ width: '100%', height: 'auto' }} layout transition={{ duration: 0.7 }} className="max-w-5xl flex items-center justify-center sm:aspect-video box-content relative overflow-hidden">

        <motion.div className="sm:mt-32 sm:ml-20 mt-10 mx-auto" layout initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }}>
          <h1 className="sm:text-7xl text-2xl z-10 relative whitespace-nowrap">
            Ahmad Ridho Ramadhan
          </h1>
          <h2 className="text-indigo-300 sm:text-2xl text-base">&gt;web Developer</h2>
          <div className="mt-10 relative z-10 text-color-3 sm:text-base text-xs mb-10">
            <div>{"//"} hi, you can call me Ridho</div>
            <div>{"//"} I really like coding and do something new </div>
            <div>{"//"} Click <span className="text-pink-400">here</span> if you want to say hello</div>
          </div>
        </motion.div>

        <div className="absolute top-0 left-0 aspect-video w-full sm:max-w-xs max-w-40 sm:border-t-[1.5rem] sm:border-l-[1.5rem] border-t-[0.4rem] border-l-[0.4rem]"></div>
        <div className="absolute bottom-0 right-0 aspect-video w-full sm:max-w-xs max-w-40 sm:border-b-[1.5rem] sm:border-r-[1.5rem] border-b-[0.4rem] border-r-[0.4rem]"></div>
      </motion.div>
    </main>
  );
}

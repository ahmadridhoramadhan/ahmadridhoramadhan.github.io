'use client'

import CustomInput from "@/components/inputs/custom";
import CustomTextArea from "@/components/inputs/customTextArea";
import SocialMediaNav from "@/components/layout/socialMediaNav";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Contact() {
    const path = usePathname()
    return (

        <main className="flex-auto flex md:flex-row flex-col items-center justify-center overflow-hidden">
            <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ bounce: 1 }} exit={{ y: -1000 }} key={path} className="md:flex-auto w-full p-4">
                <form action="" className="flex flex-col gap-10 w-full">
                    <CustomInput name="email" placeholder="Email" type="email" />
                    <CustomInput name="subject" placeholder="Subject" type="subject" />
                    <CustomTextArea name="text" placeholder="Text" />
                </form>
            </motion.div>
            <div className="basis-5/12 overflow-hidden flex p-5">
                <SocialMediaNav className="flex flex-col h-full gap-10 justify-center mb-5" />
            </div>
        </main>

    )
}
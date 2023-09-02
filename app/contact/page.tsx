'use client'

import CustomInput from "@/components/inputs/custom";
import CustomTextArea from "@/components/inputs/customTextArea";
import SocialMediaNav from "@/components/layout/socialMediaNav";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="flex-auto flex items-center justify-center">
            <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ bounce: 1 }} exit={{ x: -1000 }} className="flex-auto p-5">
                <form action="" className="flex flex-col gap-10">
                    <CustomInput name="email" placeholder="Email" type="email" />
                    <CustomInput name="subject" placeholder="Subject" type="subject" />
                    <CustomTextArea name="text" placeholder="Text" />
                </form>
            </motion.div>
            <div className="basis-5/12 overflow-hidden flex">
                <SocialMediaNav className="flex flex-col h-full gap-10 justify-center mb-5" />
                <motion.div className="flex flex-col gap-11 ml-4 h-full overflow-hidden" initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ delay: 0.4 }}>
                    <Link href={''} className="whitespace-nowrap">ahmad ridho ramadhan</Link>
                    <Link href={''} className="whitespace-nowrap">ahmad ridho ramadhan</Link>
                    <Link href={''} className="whitespace-nowrap">ahmad ridho ramadhan</Link>
                    <Link href={''} className="whitespace-nowrap">ahmad ridho ramadhan</Link>
                    <Link href={''} className="whitespace-nowrap">ahmad ridho ramadhan</Link>
                </motion.div>
            </div>
        </main>
    )
}
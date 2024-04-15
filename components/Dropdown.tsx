'use client';
import { motion } from 'framer-motion';
import { IconTriangle } from "@/components/icons";
import { useState } from 'react';

export function Dropdown({ children, title }: { children: React.ReactNode; title: string; }) {
    const [isOpen, setIsOpen] = useState(false);
    const variants = {
        open: { height: 'auto', opacity: 1 },
        closed: { height: 0, opacity: 0 }
    };
    return (
        <div className="">
            <button type='button' onClick={() => setIsOpen(v => !v)} className="flex items-center gap-1">
                <span className={"size-3 inline-block transition-all " + (isOpen ? '' : '-rotate-90')}><IconTriangle /></span>
                {title}
            </button>
            <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'open' : 'closed'} className="ml-1 border-l border-color-3 overflow-hidden">
                <ul className="pl-5">
                    {children}
                </ul>
            </motion.div>
        </div>
    );
}

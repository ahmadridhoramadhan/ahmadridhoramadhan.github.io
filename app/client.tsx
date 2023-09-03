// client.tsx
'use client'
import { motion, AnimatePresence, delay } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// Client wraps any client/rsc components with AnimatePresence
export default function Client({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    return <AnimatePresence mode='wait'>
        <motion.div key={pathname}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className='flex-auto'
        >
            {children}
        </motion.div>
    </AnimatePresence>
}
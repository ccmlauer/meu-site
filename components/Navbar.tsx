'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <span className="font-serif italic text-xl font-bold tracking-tighter text-white">
                    Lastro
                </span>

                <div className="h-4 w-[1px] bg-white/20" />

                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs font-mono text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
                >
                    Agendar Diagnóstico
                </button>
            </div>
        </motion.nav>
    );
}

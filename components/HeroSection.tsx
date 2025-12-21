"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Standard button import

export default function HeroSection() {
    const [text, setText] = useState("");
    const fullText = "ANALISANDO REGISTROS FINANCEIROS..."; // Localized

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-screen w-full relative overflow-hidden flex flex-col justify-center">
            {/* Background Fog (matches visuals) */}
            <div className="absolute inset-0 volumetric-fog opacity-50 z-0" />

            {/* Editorial Vertical Line Layout */}
            <div className="relative z-10 h-full flex flex-col justify-center border-l border-white/10 ml-8 md:ml-24 pl-8 md:pl-16">

                {/* Asymmetrical Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-start gap-1 max-w-[90vw] drop-shadow-[0_10px_10px_rgba(0,0,0,1)] bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5"
                >
                    {/* 1. Mono Bold Uppercase Small */}
                    <span className="text-sm md:text-xl font-bold uppercase text-gray-400 tracking-[0.2em] font-mono">
                        O CUSTO REAL DO
                    </span>

                    {/* 2. Giant Serif Italic ExtraBold */}
                    <h1
                        className="mt-2 text-6xl md:text-[8rem] font-extrabold italic leading-[0.85] tracking-tighter text-amber-500"
                        style={{ fontFamily: 'var(--font-serif)' }}
                    >
                        LUCRO INVISÍVEL.
                    </h1>

                    {/* Subtitle (The Pain) */}
                    <p className="mt-8 text-sm md:text-lg text-gray-400 max-w-md font-mono leading-relaxed border-l-2 border-amber-500 pl-4">
                        Suas planilhas escondem ineficiências que drenam seu caixa a cada minuto. Nós trazemos esses números à luz.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <Button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group bg-white text-black hover:bg-gray-200 text-sm md:text-base px-8 py-6 rounded-none font-bold tracking-widest uppercase transition-all"
                        >
                            Auditar Minha Operação
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                </motion.div>

                {/* Technical Footnote (Typewriter) */}
                <div className="mt-12 md:mt-24 flex items-center gap-4 text-xs text-gray-600">
                    <div className="w-12 h-[1px] bg-gray-800" />
                    <span className="font-mono tracking-wider uppercase">
                        {text}
                        <span className="animate-pulse text-amber-500">_</span>
                    </span>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-8 md:left-24 pl-8 md:pl-16 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-mono">VEJA A PROJEÇÃO</span>
                    <ChevronDown className="w-4 h-4 animate-bounce text-amber-500" />
                </div>
            </motion.div>
        </section>
    );
}

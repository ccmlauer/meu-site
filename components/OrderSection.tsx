"use client";

import { motion } from "framer-motion";
import { dashboardInsights } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { useRef, useState, MouseEvent } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 15 }
    },
};

export default function OrderSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cards, setCards] = useState<Array<{ x: number; y: number }>>(
        new Array(dashboardInsights.length).fill({ x: 0, y: 0 })
    );

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        // Get all card elements
        const cardElements = containerRef.current.querySelectorAll('.spotlight-card');

        cardElements.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for this specific card
            (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        });
    };

    return (
        <section className="h-screen w-full bg-[#030303] flex flex-col items-center justify-center px-4 relative">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Text */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center mb-20 z-10"
            >
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                    4 dias depois...
                </h2>
                <p className="text-xl md:text-3xl text-gray-400 font-medium tracking-wide">
                    Clareza absoluta.
                </p>
            </motion.div>

            {/* Cards Container with Mouse Tracking */}
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl z-10"
            >
                {dashboardInsights.map((item) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            className="spotlight-card group relative h-[320px] bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 overflow-hidden transition-colors duration-500 hover:border-amber-500/50"
                        >
                            {/* Spotlight Effect Layer - Border/Glow */}
                            <div
                                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`
                                }}
                            />

                            {/* Spotlight Effect Layer - Background Highlight */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.04), transparent 40%)`
                                }}
                            />

                            {/* Content */}
                            <div className="relative flex flex-col h-full justify-between z-10">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner", item.color)}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        {/* Badge Sóbrio: Amber se positivo, Gray se negativo (evitando vermelho) */}
                                        <span className={cn("text-xs font-bold tracking-wider px-3 py-1.5 rounded-full bg-white/5 border border-white/5", item.isPositive ? 'text-amber-500' : 'text-gray-500')}>
                                            {item.change}
                                        </span>
                                    </div>

                                    <h3 className="text-gray-400 text-sm font-semibold tracking-wide uppercase mb-2">{item.title}</h3>
                                    {/* Valor Neutro (Branco) */}
                                    <div className="text-4xl font-extrabold text-white tracking-tight">{item.value}</div>
                                </div>

                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

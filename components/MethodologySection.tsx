'use client';

import { motion } from 'framer-motion';
import { Database, Search, ScrollText, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Imersão & Conexão",
        description: "Plugamos em suas fontes de dados (ERP, CRM, Planilhas) com protocolos de leitura segura.",
        icon: Database,
        color: "text-blue-400",
        border: "border-blue-400/20",
        bg: "bg-blue-400/5"
    },
    {
        id: 2,
        title: "Diagnóstico Profundo",
        description: "Nossos algoritmos varrem milhares de transações em busca de padrões de desperdício.",
        icon: Search,
        color: "text-purple-400",
        border: "border-purple-400/20",
        bg: "bg-purple-400/5"
    },
    {
        id: 3,
        title: "Plano de Ação",
        description: "Entregamos um relatório executivo com diretrizes claras para estancar o sangramento de caixa.",
        icon: ScrollText,
        color: "text-amber-500",
        border: "border-amber-500/20",
        bg: "bg-amber-500/5"
    }
];

export default function MethodologySection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40" />

            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
                    >
                        Como a mágica acontece.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto font-mono text-sm md:text-base"
                    >
                        Sem longas reuniões de briefing. Sem interromper sua equipe. Nós seguimos o rastro numérico.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Connector Line (Desktop Only) */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-gray-800 to-transparent z-0" />
                                )}

                                <div className={`relative z-10 h-full p-8 rounded-2xl border ${step.border} ${step.bg} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-${step.color.split('-')[1]}-500/10`}>
                                    <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center mb-6 border ${step.border} shadow-inner`}>
                                        <Icon className={`w-7 h-7 ${step.color}`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>

                                    <div className="absolute top-8 right-8 text-xs font-mono font-bold text-gray-700 opacity-50">
                                        0{step.id}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

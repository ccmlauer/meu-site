'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';

const trustSignals = [
    {
        icon: Lock,
        title: "Criptografia Militar",
        text: "Dados processados em ambiente isolado com criptografia AES-256."
    },
    {
        icon: FileCheck,
        title: "NDA Corporativo",
        text: "Termos jurídicos blindados para garantir total sigilo da sua operação."
    },
    {
        icon: ShieldCheck,
        title: "Conformidade LGPD",
        text: "Processos auditados e em conformidade estrita com a legislação de dados."
    }
];

export default function TrustSection() {
    return (
        <section className="bg-black py-16 border-t border-white/5">
            <div className="container max-w-6xl px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-white/10">
                    {trustSignals.map((signal, index) => {
                        const Icon = signal.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center px-4"
                            >
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 mb-4 text-gray-400">
                                    <Icon size={20} />
                                </div>
                                <h4 className="text-white font-bold mb-2 tracking-wide font-mono text-sm uppercase">
                                    {signal.title}
                                </h4>
                                <p className="text-gray-500 text-xs md:text-sm max-w-xs leading-relaxed">
                                    {signal.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Integration Logos (Greyscale opacity) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                >
                    {/* Placeholder texts/logos for integrations, keeping it clean for now */}
                    <span className="text-xl font-bold font-serif text-white">TOTVS</span>
                    <span className="text-xl font-bold font-serif text-white">SAP</span>
                    <span className="text-xl font-bold font-serif text-white">ORACLE</span>
                    <span className="text-xl font-bold font-serif text-white">SALESFORCE</span>
                    <span className="text-xl font-bold font-serif text-white">CONTAAZUL</span>
                </motion.div>
            </div>
        </section>
    );
}

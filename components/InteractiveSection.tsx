'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap } from 'lucide-react';

export default function InteractiveSection() {
    const [investment, setInvestment] = useState(5000);

    // Gera dados exponenciais baseados no investimento (Simulação)
    const data = useMemo(() => {
        const baseGrowth = 1.05; // 5% base
        const multiplier = investment / 1000;
        const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

        return Array.from({ length: 12 }).map((_, i) => {
            const month = months[i];
            const organic = 1000 * Math.pow(baseGrowth, i);
            const boosted = organic + (organic * multiplier * (i * 0.1));

            return {
                name: month,
                value: Math.round(boosted),
                original: Math.round(organic)
            };
        });
    }, [investment]);

    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 relative overflow-hidden">
            {/* Luz de fundo ambiental - Amber */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container max-w-6xl px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Coluna de Controle (Esquerda) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-amber-500/10">
                            <Zap size={14} />
                            <span>PROJEÇÃO DE FLUXO DE CAIXA</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                            Decisões baseadas em Fatos.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                                Não em Palpites.
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Ajuste o nível de investimento em inteligência de dados e veja o impacto projetado na sua margem de contribuição anual.
                        </p>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Capital Alocado em Eficiência</span>
                                <span className="text-2xl font-mono text-amber-500 font-bold">
                                    R$ {investment.toLocaleString('pt-BR')}
                                </span>
                            </div>

                            {/* Slider Customizado - Accent Amber */}
                            <input
                                type="range"
                                min="1000"
                                max="50000"
                                step="1000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
                            />

                            <div className="flex justify-between mt-2 text-xs text-gray-600 font-mono">
                                <span>R$ 1k</span>
                                <span>R$ 50k</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coluna do Gráfico Holográfico (Direita) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative h-[400px] w-full bg-black/40 rounded-3xl border border-white/10 p-6 backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(245,158,11,0.2)]"
                    >
                        {/* Elementos Decorativos HUD */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                        <div className="absolute top-4 right-4 text-[10px] text-amber-500/50 font-mono">PROJEÇÃO EM TEMPO REAL</div>

                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#666', fontSize: 12, fontFamily: 'monospace' }}
                                />
                                <YAxis
                                    hide
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '8px' }}
                                    itemStyle={{ color: '#f59e0b', fontFamily: 'monospace' }}
                                    cursor={{ stroke: '#f59e0b', strokeWidth: 1, strokeDasharray: '4 4' }}
                                    formatter={(value: number) => [
                                        value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                                        "Caixa Projetado"
                                    ]}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#f59e0b"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorValue)"
                                    animationDuration={1000}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

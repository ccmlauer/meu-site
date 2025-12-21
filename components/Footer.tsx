'use client';

import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-[#050505] pt-24 pb-12 border-t border-white/10 overflow-hidden">
            <div className="container max-w-6xl px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Coluna Esquerda: A Chamada */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.1]">
                            Vamos falar de <br />
                            <span className="italic text-gray-400">negócios sérios.</span>
                        </h2>
                        <p className="font-mono text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                            Sua operação não pode esperar. Agende uma auditoria técnica gratuita e descubra onde o dinheiro está vazando em menos de 48 horas.
                        </p>

                        <div className="space-y-4 pt-8">
                            <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Mail size={16} />
                                </div>
                                <span>contato@lastro.com.br</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <MapPin size={16} />
                                </div>
                                <span>Av. Faria Lima, 3000 - SP</span>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita: O Formulário Estilo "Contrato" */}
                    <form className="space-y-8 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-amber-500 uppercase tracking-widest">Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Ex: Roberto Silva"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white font-serif text-xl focus:outline-none focus:border-amber-500 transition-colors placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-amber-500 uppercase tracking-widest">E-mail Corporativo</label>
                            <input
                                type="email"
                                placeholder="roberto@suaempresa.com.br"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white font-serif text-xl focus:outline-none focus:border-amber-500 transition-colors placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-amber-500 uppercase tracking-widest">WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="(11) 99999-9999"
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white font-serif text-xl focus:outline-none focus:border-amber-500 transition-colors placeholder:text-white/20"
                            />
                        </div>

                        <button className="group w-full bg-white text-black font-mono font-bold py-5 px-8 rounded-full mt-8 hover:bg-amber-400 transition-colors flex items-center justify-between">
                            <span>SOLICITAR DIAGNÓSTICO</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-[10px] text-center text-gray-500 font-mono pt-4">
                            Ao clicar, você concorda com nossa política de confidencialidade de dados (NDAs).
                        </p>
                    </form>

                </div>

                {/* Rodapé do Rodapé */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600">
                    <p>© 2025 Lastro. Inteligência de Dados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="cursor-pointer hover:text-white transition-colors">PRIVACIDADE</span>
                        <span className="cursor-pointer hover:text-white transition-colors">TERMOS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Html, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense, useMemo, useState, useEffect } from 'react';

// Componente Visual da Planilha (HTML dentro do 3D)
function ExcelSheet({ position, rotation, scale }: any) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.5, 0.5]}>
            <group position={position} rotation={rotation} scale={scale}>
                {/* O 'transform' faz o HTML se comportar como geometria 3D */}
                <Html transform occlude distanceFactor={1.5} style={{ opacity: 0.7 }}>
                    <div className="w-[300px] bg-zinc-800 rounded-md shadow-xl overflow-hidden border border-gray-600/50 font-mono text-[10px]">
                        {/* Cabeçalho Verde Clássico */}
                        <div className="bg-[#1D6F42] h-6 w-full flex items-center px-2">
                            <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                            <div className="text-white font-bold tracking-widest text-xs opacity-80">XLSX</div>
                        </div>
                        {/* Grid de Dados */}
                        <div className="grid grid-cols-4 gap-[1px] bg-gray-200 border-b border-gray-200">
                            {['A', 'B', 'C', 'D'].map(l => (
                                <div key={l} className="bg-gray-100 text-center py-1 font-bold text-gray-500">{l}</div>
                            ))}
                        </div>
                        <div className="bg-white">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className="grid grid-cols-4 border-b border-gray-100 hover:bg-blue-50 transition-colors">
                                    <div className="p-1 border-r border-gray-100 text-gray-400">{i + 1}</div>
                                    <div className="p-1 border-r border-gray-100 text-right">{Math.floor(Math.random() * 9000)}</div>
                                    <div className="p-1 border-r border-gray-100 text-right text-red-500">-{Math.floor(Math.random() * 500)}</div>
                                    <div className="p-1 text-right font-bold text-gray-800">R$ {Math.floor(Math.random() * 200)},00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Html>
            </group>
        </Float>
    );
}

function Scene() {
    // Gerar posições aleatórias
    const sheets = useMemo(() => Array.from({ length: 15 }).map(() => ({
        position: [
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5
        ],
        rotation: [
            Math.random() * 0.5,
            Math.random() * 0.5,
            0
        ],
        scale: 0.8 + Math.random() * 0.4,
    })), []);

    return (
        <>
            <Environment preset="city" />
            {sheets.map((props: any, i) => (
                <ExcelSheet key={i} {...props} />
            ))}

            {/* Post Processing Effects - Fixed Configuration */}
            {/* disableNormalPass and multisampling={0} help stability on some environments */}
            <EffectComposer multisampling={0}>
                <Bloom
                    luminanceThreshold={0.2}
                    mipmapBlur
                    intensity={1.5}
                />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </>
    );
}

export default function ChaosSection() {
    const [count, setCount] = useState(0);
    const target = 124090;

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;
        const duration = 3000; // 3 seconds

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(target * ease));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className="h-screen w-full relative bg-black overflow-hidden">
            {/* HUD Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center shadow-2xl">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-red-400 tracking-widest uppercase">
                            Detectando Ineficiências
                        </span>
                    </div>

                    <h3 className="text-5xl md:text-7xl font-mono font-bold text-amber-500 tracking-tighter mb-2 tabular-nums">
                        {currencyFormatter.format(count)}
                    </h3>

                    <p className="text-gray-400 text-xs font-mono uppercase tracking-widest">
                        Identificados em custos ocultos
                    </p>
                </div>
            </div>

            {/* Increased FOV and far plane for better depth with effects */}
            <Canvas camera={{ position: [0, 0, 10], fov: 50, far: 100 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}

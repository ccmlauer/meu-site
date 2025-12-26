'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import OrderSection from '@/components/OrderSection';
import InteractiveSection from '@/components/InteractiveSection';
import Footer from '@/components/Footer';
import MethodologySection from '@/components/MethodologySection';
import TrustSection from '@/components/TrustSection';
// import { ReactLenis } from '@studio-freight/react-lenis'; // Removed here as it's in layout.tsx, or we can leave it if specific config needed per page

// IMPORTAÇÃO DINÂMICA: Isso resolve o erro "window is not defined"
const ChaosSection = dynamic(() => import('@/components/ChaosSection'), {
    ssr: false,
    loading: () => <div className="h-screen bg-black flex items-center justify-center text-white/20">Carregando Realidade...</div>
});

export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            <HeroSection />
            <ChaosSection />
            <OrderSection />
            <InteractiveSection />
            <MethodologySection />
            <TrustSection />
            <Footer />
        </main>
    );
}

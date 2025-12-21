import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const serif = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap"
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap"
});

export const metadata: Metadata = {
    title: "Lastro | O Custo Real do Lucro Invisível",
    description: "Auditoria de eficiência operacional para negócios que buscam solidez.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={`${serif.variable} ${mono.variable}`}>
            <body className="font-serif bg-[#050505] text-[#e0e0e0] antialiased selection:bg-emerald-500/30">
                <SmoothScroll>
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}

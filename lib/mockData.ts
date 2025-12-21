import { Wallet, AlertTriangle, BarChart3 } from "lucide-react";

export const dashboardInsights = [
    {
        id: 1,
        title: "Margem Líquida Real",
        value: "18.4%",
        change: "+4.2%",
        isPositive: true,
        icon: Wallet,
        description: "Recuperação de margem após corte de custos invisíveis.",
        color: "text-amber-500", // Unificado
        bg: "bg-amber-500/10",   // Unificado
    },
    {
        id: 2,
        title: "Vazamento de Receita",
        value: "- R$ 12.400",
        change: "-15%",
        isPositive: false,
        icon: AlertTriangle,
        description: "Estoque parado e devoluções não processadas.",
        color: "text-amber-500", // Unificado
        bg: "bg-amber-500/10",   // Unificado
    },
    {
        id: 3,
        title: "Eficiência Operacional",
        value: "92%",
        change: "+12pts",
        isPositive: true,
        icon: BarChart3,
        description: "Capacidade produtiva vs. Faturamento realizado.",
        color: "text-amber-500", // Unificado
        bg: "bg-amber-500/10",   // Unificado
    }
];

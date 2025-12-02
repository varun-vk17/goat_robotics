"use client";

import React from "react";
import {
    TrendingDown,
    Users,
    DollarSign,
    Zap,
    AlertCircle,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const PainSection = () => {
    const stats = [
        {
            metric: "₹30K",
            period: "/month",
            label: "Labor Cost Per Worker",
            description: "For repetitive material movement tasks",
            icon: <DollarSign className="w-5 h-5" />
        },
        {
            metric: "₹12.5L",
            period: "/year",
            label: "Lost to Injuries",
            description: "Workplace accidents and downtime",
            icon: <AlertCircle className="w-5 h-5" />
        },
        {
            metric: "60%",
            period: "slower",
            label: "Manual Operations",
            description: "Forklifts create bottlenecks",
            icon: <TrendingDown className="w-5 h-5" />
        },
        {
            metric: "40%",
            period: "gap",
            label: "Labor Shortage",
            description: "Critical skilled worker deficit",
            icon: <Users className="w-5 h-5" />
        }
    ];

    return (
        <section className="relative bg-black py-24 md:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[radial-gradient(#5ab8b4_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6 border border-white/10">
                        <span className="text-[#5ab8b4] font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            The Problem
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-[family-name:var(--font-plus-jakarta-sans)] mb-6 tracking-tight leading-[1.1] max-w-4xl">
                        Manual Material Handling Is{" "}
                        <span className="text-[#5ab8b4]">Holding You Back</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-[family-name:var(--font-poppins)] max-w-2xl leading-relaxed">
                        Inefficient workflows, rising labor costs, and safety risks are silently eating into your margins.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5ab8b4] transition-all duration-300 hover:shadow-lg hover:shadow-[#5ab8b4]/20 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#5ab8b4] transition-colors">
                                    {React.cloneElement(stat.icon as React.ReactElement<any>, {
                                        className: "w-5 h-5 text-white transition-colors"
                                    })}
                                </div>
                            </div>
                            <div className="mb-2">
                                <span className="text-4xl font-extrabold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                                    {stat.metric}
                                </span>
                                <span className="text-lg font-medium text-gray-400 ml-1">
                                    {stat.period}
                                </span>
                            </div>
                            <p className="text-sm font-bold text-white mb-1 font-[family-name:var(--font-plus-jakarta-sans)]">
                                {stat.label}
                            </p>
                            <p className="text-xs text-gray-400 font-[family-name:var(--font-poppins)]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Large Statement Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                                You are paying{" "}
                                <span className="text-[#5ab8b4]">too much</span>.
                            </h3>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-plus-jakarta-sans)] leading-tight">
                                You are moving{" "}
                                <span className="text-[#5ab8b4]">too slow</span>.
                            </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-[#5ab8b4] via-white/20 to-transparent"></div>
                        <p className="text-2xl md:text-3xl font-medium text-gray-300 font-[family-name:var(--font-poppins)] leading-relaxed">
                            And it's limiting your entire factory's output.
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-white/10">
                        <Image
                            src="/pain.png"
                            alt="Factory floor with manual material handling"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

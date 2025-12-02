"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    features: string[];
    size: "tall" | "wide" | "small";
}

const products: Product[] = [
    {
        id: "gt-100-250-400",
        name: "GT - 100, 250, 400",
        category: "Intra logistics GT",
        description: "The worldwide manufacturing sector is using more digital tools, especially in how things are moved around within companies.",
        image: "/gt-100-250-400.png",
        features: ["100kg - 400kg payload", "Compact design", "Indoor navigation", "ERP integration"],
        size: "tall"
    },
    {
        id: "gtx-500-1000-1500",
        name: "GTX - 500, 1000, 1500",
        category: "Intra logistics GTX",
        description: "As a top-notch AMR supplier, Goat Robotics stands as the best intelligent intra-logistics solution provider in and around Coimbatore, Tamil Nadu.",
        image: "/gtx-500-1000-1500.png",
        features: ["500kg - 1500kg payload", "Heavy-duty", "Advanced sensors", "24/7 operation"],
        size: "wide"
    },
    {
        id: "gt-xp-1000",
        name: "GT - XP 1000",
        category: "Material Movement",
        description: "Our Pallet Truck AMR is a powerful and efficient solution for handling pallet loads of up to 1000 KG, seamlessly integrating into your existing factory layout.",
        image: "/gt-xp-1000.png",
        features: ["1000kg pallet capacity", "Automated loading", "Narrow aisle navigation", "Safety certified"],
        size: "small"
    },
    {
        id: "gt-xt-1000",
        name: "GT - XT 1000",
        category: "Outdoor Tow track",
        description: "Our Outdoor Tow Truck AMR offers versatile configurations for seamless trolley load movement, ensuring reliable performance in indoor and outdoor industrial environments.",
        image: "/gt-xt-1000.png",
        features: ["Indoor/outdoor capable", "Trolley towing", "Weather resistant", "GPS navigation"],
        size: "tall"
    },
    {
        id: "gt-platform",
        name: "GT - DB, OB, E2B, EB, SQ",
        category: "Platform",
        description: "Explore our AMR platform range, perfect for R&D, learning, and retrofitting projects, offering versatility and flexibility for autonomous mobile robotics solutions.",
        image: "/gt-platform.png",
        features: ["Modular platform", "R&D ready", "Customizable", "Open architecture"],
        size: "small"
    }
];

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-full group [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    "relative w-full h-full",
                    "[transform-style:preserve-3d]",
                    "transition-all duration-700",
                    isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                )}
            >
                {/* Front of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(0deg)]",
                        "overflow-hidden rounded-3xl",
                        "bg-white",
                        "border-2 border-gray-200",
                        "shadow-sm",
                        "transition-all duration-700",
                        "group-hover:shadow-xl group-hover:border-[#5ab8b4]",
                        isFlipped ? "opacity-0" : "opacity-100"
                    )}
                    style={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="relative h-full w-full flex flex-col justify-end p-6">
                        {/* Product Name - positioned at bottom */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)] mb-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-200 font-[family-name:var(--font-poppins)]">
                                {product.category}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        "absolute inset-0 w-full h-full",
                        "[backface-visibility:hidden] [transform:rotateY(180deg)]",
                        "p-4 rounded-3xl",
                        "bg-gradient-to-br from-gray-900 to-black",
                        "border-2 border-[#5ab8b4]",
                        "shadow-xl shadow-[#5ab8b4]/20",
                        "flex flex-col",
                        "transition-all duration-700",
                        "overflow-hidden",
                        !isFlipped ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                        <div className="space-y-2 flex-shrink-0">
                            <h3 className="text-base font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)] line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-300 font-[family-name:var(--font-poppins)] leading-snug line-clamp-2">
                                {product.description}
                            </p>
                        </div>

                        <div className="space-y-2 mt-3 flex-shrink-0">
                            <p className="text-xs font-bold text-[#5ab8b4] uppercase tracking-wider">Key Features</p>
                            {product.features.slice(0, 2).map((feature, index) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2 text-sm text-gray-300 transition-all duration-500"
                                    style={{
                                        transform: isFlipped
                                            ? "translateX(0)"
                                            : "translateX(-10px)",
                                        opacity: isFlipped ? 1 : 0,
                                        transitionDelay: `${index * 100 + 200}ms`,
                                    }}
                                >
                                    <div className="w-1.5 h-1.5 bg-[#5ab8b4] rounded-full flex-shrink-0" />
                                    <span className="font-[family-name:var(--font-poppins)] line-clamp-1">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2.5 mt-auto border-t border-gray-800 flex-shrink-0">
                        <button
                            className={cn(
                                "group/btn relative",
                                "flex items-center justify-between w-full",
                                "p-2.5 rounded-lg",
                                "transition-all duration-300",
                                "bg-[#5ab8b4] hover:bg-[#4a9fa0]",
                                "hover:scale-[1.02]"
                            )}
                        >
                            <span className="text-sm font-bold text-white font-[family-name:var(--font-plus-jakarta-sans)]">
                                Learn More
                            </span>
                            <ArrowRight className="w-4 h-4 text-white transition-all duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProductsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                        <span className="text-gray-600 font-bold tracking-wide uppercase text-xs font-[family-name:var(--font-plus-jakarta-sans)]">
                            Our Products
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-[family-name:var(--font-plus-jakarta-sans)] mb-6 tracking-tight leading-[1.1] max-w-4xl">
                        Top Supplier Of Automated <br className="hidden md:block" />
                        <span className="text-[#5ab8b4]">Mobile Robots In India</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={cn(
                                product.size === "tall" && "lg:row-span-2",
                                product.size === "wide" && "lg:col-span-2",
                                product.size === "small" && "lg:col-span-1 lg:row-span-1"
                            )}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}

                    {/* Benefits Card - Fills the gap */}
                    <div className="lg:col-span-1 lg:row-span-1 rounded-3xl p-6 bg-black text-white flex flex-col justify-between shadow-lg border-2 border-gray-800 hover:border-[#5ab8b4] transition-all duration-300">
                        <div>
                            <p className="text-xs font-bold text-[#5ab8b4] uppercase tracking-wider mb-2">
                                How Our Robots Help
                            </p>
                            <h4 className="text-lg font-bold mb-3 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Automate. Optimize. Scale.
                            </h4>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#5ab8b4] rounded-full mt-1.5 flex-shrink-0" />
                                <p className="text-xs text-gray-300 font-[family-name:var(--font-poppins)]">
                                    Reduce labor costs by 60%
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#5ab8b4] rounded-full mt-1.5 flex-shrink-0" />
                                <p className="text-xs text-gray-300 font-[family-name:var(--font-poppins)]">
                                    Eliminate workplace injuries
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#5ab8b4] rounded-full mt-1.5 flex-shrink-0" />
                                <p className="text-xs text-gray-300 font-[family-name:var(--font-poppins)]">
                                    Increase throughput by 40%
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[#5ab8b4] rounded-full mt-1.5 flex-shrink-0" />
                                <p className="text-xs text-gray-300 font-[family-name:var(--font-poppins)]">
                                    24/7 operation without breaks
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Card */}
                    <div className="lg:col-span-1 lg:row-span-1 rounded-3xl p-6 bg-[#5ab8b4] text-white flex flex-col justify-between shadow-lg">
                        <div>
                            <p className="text-sm font-bold mb-1 font-[family-name:var(--font-plus-jakarta-sans)]">
                                Already working at scale.
                            </p>
                            <p className="text-xs opacity-90 font-[family-name:var(--font-poppins)]">
                                60 deployments. 5 states.
                            </p>
                        </div>
                        <div>
                            <div className="text-6xl font-extrabold mb-1 font-[family-name:var(--font-plus-jakarta-sans)]">
                                98%
                            </div>
                            <p className="text-sm font-medium font-[family-name:var(--font-poppins)]">
                                Uptime
                            </p>
                            <p className="text-xs opacity-80 font-[family-name:var(--font-poppins)]">
                                In 2025
                            </p>
                        </div>
                    </div>

                    {/* Quote Card */}
                    <div className="lg:col-span-2 lg:row-span-1 rounded-3xl p-8 bg-white border-2 border-gray-200 flex flex-col justify-between hover:border-[#5ab8b4] hover:shadow-xl transition-all duration-300 relative">
                        <p className="text-base text-gray-700 font-[family-name:var(--font-poppins)] leading-relaxed mb-6">
                            "We're disciplined builders. Focused on scaling proven products and long-term value."
                        </p>
                        <p className="text-sm font-bold text-gray-900 font-[family-name:var(--font-plus-jakarta-sans)]">
                            Goat Robotics Team
                        </p>
                        {/* Decorative dots */}
                        <div className="absolute bottom-8 right-8 grid grid-cols-6 gap-1.5">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-gray-900 rounded-full"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

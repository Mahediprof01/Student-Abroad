'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
            <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
            <div className="container px-4 text-center z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeInUp}>
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                            Your Gateway to Global Education
                        </span>
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Study Abroad, <br /> Shape Your Future
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        We guide you through every step of your international education journey. From university selection to visa approval and work permit assistance.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <Button size="lg" asChild className="rounded-full px-8">
                            <Link href="/courses">
                                Explore Universities <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                            <Link href="/contact">Book Consultation</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30 blur-3xl">
                <div className="h-[500px] w-[500px] rounded-full bg-primary/20" />
            </div>
        </section>
    );
}

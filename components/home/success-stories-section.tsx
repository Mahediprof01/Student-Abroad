'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stories = [
    '/success/1000046615.jpg',
    '/success/1000046625.jpg',
    '/success/1000046637.jpg',
    '/success/1000046648.jpg',
    '/success/1000046657.jpg',
    '/success/1000046665.jpg',
];

export function SuccessStoriesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight mb-4"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Join hundreds of students who have realized their study abroad dreams with Study Abroad Consultancy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {stories.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square relative overflow-hidden rounded-xl border border-border/50 shadow-sm cursor-pointer group"
                        >
                            <Link href="/success-stories">
                                <img
                                    src={image}
                                    alt={`Success Story ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white font-bold text-lg">VISA APPROVED ✅</p>
                                    <p className="text-white/80 text-sm">Click to view more</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" asChild className="rounded-full px-8">
                        <Link href="/success-stories">
                            View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

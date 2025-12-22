'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Button } from '@/components/ui/button';

const destinations = [
    {
        name: 'South Korea',
        image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070&auto=format&fit=crop',
        description: 'Experience a vibrant culture and world-class education system.',
        flag: '🇰🇷'
    },
    {
        name: 'Russia',
        image: 'https://images.unsplash.com/photo-1513326738677-5b299634d0b3?q=80&w=2070&auto=format&fit=crop',
        description: 'Affordable high-quality education with rich history.',
        flag: '🇷🇺'
    },
    {
        name: 'China',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop',
        description: 'Fast-growing economy with top-ranked universities.',
        flag: '🇨🇳'
    },
    {
        name: 'Italy',
        image: 'https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e?q=80&w=2071&auto=format&fit=crop',
        description: 'World-class education in the heart of the Mediterranean.',
        flag: '🇮🇹'
    },
    {
        name: 'Malta',
        image: 'https://images.unsplash.com/photo-1590423166649-76137255be1f?q=80&w=2070&auto=format&fit=crop',
        description: 'Quality English-taught programs in a beautiful island nation.',
        flag: '🇲🇹'
    },
    {
        name: 'Austria',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2070&auto=format&fit=crop',
        description: 'Prestigious central European education in a land of innovation.',
        flag: '🇦🇹'
    },
    {
        name: 'Hungary',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        description: 'Historical academic excellence in the heart of the pearl of the Danube.',
        flag: '🇭🇺'
    }
];

export function DestinationsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tight"
                    >
                        Popular Destinations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Choose from top study destinations known for academic excellence and student life.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <NextImage
                                        src={destination.image}
                                        alt={destination.name}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <Button variant="secondary" className="rounded-full" asChild>
                                            <Link href={`/courses`}>
                                                Explore {destination.name} <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <CardContent className="p-6 relative">
                                    <div className="absolute -top-10 right-6 text-4xl shadow-lg bg-white dark:bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center">
                                        {destination.flag}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" /> {destination.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {destination.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

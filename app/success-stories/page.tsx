'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const successImages = [
    '/success/1000046615.jpg', '/success/1000046618.jpg', '/success/1000046619.jpg', '/success/1000046621.jpg',
    '/success/1000046625.jpg', '/success/1000046629.jpg', '/success/1000046634.jpg', '/success/1000046636.jpg',
    '/success/1000046637.jpg', '/success/1000046648.jpg', '/success/1000046649.jpg', '/success/1000046651.jpg',
    '/success/1000046652.jpg', '/success/1000046655.jpg', '/success/1000046657.jpg', '/success/1000046663.jpg',
    '/success/1000046664.jpg', '/success/1000046665.jpg', '/success/1000046667.jpg', '/success/1000046669.jpg',
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen pb-20">
            {/* Hero */}
            <section className="bg-muted/30 py-20 md:py-32">
                <div className="container px-4 mx-auto text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Celebrating Success
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        See the smiling faces of our students who have successfully started their journey abroad with Study Abroad Consultancy.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Tabs */}
            <section className="py-12 container px-4 mx-auto">
                <Tabs defaultValue="photos" className="space-y-12">
                    <div className="flex justify-center">
                        <TabsList className="grid w-full max-w-md grid-cols-2">
                            <TabsTrigger value="photos" className="text-lg">
                                <ImageIcon className="mr-2 h-5 w-5" /> Photos
                            </TabsTrigger>
                            <TabsTrigger value="videos" className="text-lg">
                                <PlayCircle className="mr-2 h-5 w-5" /> Videos
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="photos" className="space-y-8">
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {successImages.map((src, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm border"
                                >
                                    <img
                                        src={src}
                                        alt={`Success Story ${index + 1}`}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <div className="text-white">
                                            <p className="font-bold">Visa Approved</p>
                                            <p className="text-sm opacity-90">Study Abroad Consultancy</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="videos" className="space-y-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Placeholder Videos */}
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="aspect-video bg-muted rounded-2xl flex items-center justify-center border relative group cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                                    <div className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <PlayCircle className="h-8 w-8 text-primary ml-1" />
                                    </div>
                                    <span className="absolute bottom-4 left-4 text-sm font-medium bg-background/80 px-2 py-1 rounded backdrop-blur">
                                        Student Testimonial #{item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center text-muted-foreground mt-8">
                            <p>More video testimonials coming soon!</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    );
}

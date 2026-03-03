'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';
import type { ApiSuccessStory } from '@/action/success-story/types';

function getYouTubeEmbedUrl(url: string): string | null {
    try {
        // Handle youtu.be short links
        const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
        if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

        // Handle standard youtube.com/watch?v=...
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get('v');
        if (videoId) return `https://www.youtube.com/embed/${videoId}`;

        // Handle youtube.com/embed/... (already embed)
        const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
        if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`;

        return null;
    } catch {
        return null;
    }
}

interface SuccessGalleryProps {
    images: ApiSuccessStory[];
    videos: ApiSuccessStory[];
}

export default function SuccessGallery({ images, videos }: SuccessGalleryProps) {
    return (
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

            {/* Photos */}
            <TabsContent value="photos" className="space-y-8">
                {images.length === 0 ? (
                    <p className="text-center text-muted-foreground py-16">No photos yet.</p>
                ) : (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {images.map((story, index) => (
                            <motion.div
                                key={story._id ?? index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: Math.min(index * 0.05, 1) }}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm border"
                            >
                                <img
                                    src={story.imageUrl}
                                    alt={story.title ?? `Success Story ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <p className="font-bold">{story.title ?? 'Visa Approved'}</p>
                                        <p className="text-sm opacity-90">{story.description ?? 'Study Abroad Consultancy'}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </TabsContent>

            {/* Videos */}
            <TabsContent value="videos" className="space-y-8">
                {videos.length === 0 ? (
                    <div className="text-center text-muted-foreground py-16">
                        <p>More video testimonials coming soon!</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((story, index) => {
                            const embedUrl = story.videoUrl ? getYouTubeEmbedUrl(story.videoUrl) : null;
                            return (
                                <motion.div
                                    key={story._id ?? index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: Math.min(index * 0.05, 1) }}
                                    className="rounded-2xl overflow-hidden border shadow-sm"
                                >
                                    {embedUrl ? (
                                        <div className="relative">
                                            <iframe
                                                src={embedUrl}
                                                title={story.title ?? `Video ${index + 1}`}
                                                className="w-full aspect-video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                            {story.title && (
                                                <div className="p-3 text-sm font-medium bg-background border-t">
                                                    {story.title}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="aspect-video bg-muted flex items-center justify-center">
                                            <PlayCircle className="h-10 w-10 text-muted-foreground" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </TabsContent>
        </Tabs>
    );
}

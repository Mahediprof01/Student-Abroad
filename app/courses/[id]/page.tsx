'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    MapPin,
    GraduationCap,
    Building2,
    Globe,
    Calendar,
    Users,
    Award,
    ArrowLeft,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { universitiesData, type University } from '@/lib/universities-data';
import { fetchUniversityById } from '@/action/university/server-action';
import NextImage from 'next/image';

export default function UniversityPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [university, setUniversity] = useState<University | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            // First try hardcoded (numeric id)
            const numericId = parseInt(id);
            if (!isNaN(numericId)) {
                const found = universitiesData.find(u => u.id === numericId);
                if (found) {
                    setUniversity(found);
                    setLoading(false);
                    return;
                }
            }

            // Otherwise try API
            const apiUni = await fetchUniversityById(id);
            if (apiUni) {
                setUniversity({
                    id: apiUni.id as any,
                    name: apiUni.name,
                    country: apiUni.country,
                    city: apiUni.location,
                    image: apiUni.image || 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80',
                    description: apiUni.description,
                    founded: apiUni.established,
                });
            }
            setLoading(false);
        }
        load();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-24">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (!university) {
        notFound();
    }

    return (
        <div className="py-12 md:py-24">
            <div className="container px-4 mx-auto">
                {/* Back Button */}
                <Link href="/courses" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Universities
                </Link>

                {/* Hero Section */}
                <div className="mb-12 space-y-8">
                    {/* Full image — no crop */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border bg-muted/20">
                        <NextImage
                            src={university.image}
                            alt={university.name}
                            width={1200}
                            height={600}
                            unoptimized
                            className="w-full h-auto object-contain max-h-[480px]"
                        />
                    </div>

                    {/* Info row */}
                    <div className="grid lg:grid-cols-3 gap-8 min-w-0">
                        {/* Left: title + description */}
                        <div className="lg:col-span-2 space-y-4 min-w-0">
                            <Badge className="text-sm">{university.country}</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold">{university.name}</h1>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary shrink-0" />
                                <span>{university.city}, {university.country}</span>
                            </div>
                            {university.description && (
                                <p className="text-base text-muted-foreground break-words leading-relaxed">
                                    {university.description}
                                </p>
                            )}
                            <div className="pt-2">
                                <Button size="sm" asChild>
                                    <Link href="/contact">Get More Information</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right: stat cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 content-start w-full min-w-0">
                            {university.founded && (
                                <Card className="bg-muted/50">
                                    <CardContent className="p-3 flex items-center gap-3">
                                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Founded</p>
                                            <p className="font-semibold text-sm">{university.founded}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                            <Card className="bg-muted/50">
                                <CardContent className="p-3 flex items-center gap-3">
                                    <Globe className="h-4 w-4 text-primary shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Country</p>
                                        <p className="font-semibold text-sm">{university.country}</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="p-3 flex items-center gap-3">
                                    <Building2 className="h-4 w-4 text-primary shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Location</p>
                                        <p className="font-semibold text-sm">{university.city}</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="p-3 flex items-center gap-3">
                                    <Award className="h-4 w-4 text-primary shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Type</p>
                                        <p className="font-semibold text-sm">University</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* About University */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building2 className="h-6 w-6 text-primary" />
                                About {university.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 text-muted-foreground">
                                <p className="break-words">
                                    {university.name} is a prestigious institution located in {university.city}, {university.country}. 
                                    {university.founded && ` Founded in ${university.founded}, it`} has established itself as a leading educational institution.
                                </p>
                                <p>
                                    The university offers a wide range of programs across various disciplines, providing students with 
                                    world-class education and research opportunities in an internationally diverse environment.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Why Choose */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="h-6 w-6 text-primary" />
                                Why Choose This University?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Internationally recognized degrees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Diverse international student community</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Modern campus facilities and resources</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Strong industry connections and career support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">Research opportunities and scholarships available</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Section */}
                <Card className="mt-12 bg-primary text-primary-foreground">
                    <CardContent className="p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Start Your Journey at {university.name}?
                        </h2>
                        <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                            Get in touch with our expert counselors to learn more about admission requirements, programs, and scholarships available at this university.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Contact Our Counselors</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                                <Link href="/courses">Explore More Universities</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

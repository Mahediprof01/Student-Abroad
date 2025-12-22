'use client';

import { use } from 'react';
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
    ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { universitiesData } from '@/lib/universities-data';
import NextImage from 'next/image';

export default function UniversityPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const university = universitiesData.find(u => u.id === parseInt(id));

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
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    <div>
                        <Badge className="mb-4 text-sm">{university.country}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{university.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mb-6">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span className="text-lg">{university.city}, {university.country}</span>
                        </div>
                        
                        {university.description && (
                            <p className="text-lg text-muted-foreground mb-6">
                                {university.description}
                            </p>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            {university.founded && (
                                <Card className="bg-muted/50">
                                    <CardContent className="p-4 flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Founded</p>
                                            <p className="font-semibold">{university.founded}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                            <Card className="bg-muted/50">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <Globe className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Country</p>
                                        <p className="font-semibold">{university.country}</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <Building2 className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="font-semibold">{university.city}</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-muted/50">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <Award className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Type</p>
                                        <p className="font-semibold">University</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <Button size="lg" className="flex-1" asChild>
                                <Link href="/contact">Get More Information</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="flex-1" asChild>
                                <Link href="/contact">Apply Now</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-2xl">
                        <NextImage
                            src={university.image}
                            alt={university.name}
                            fill
                            unoptimized
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
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
                                <p>
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

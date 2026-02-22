'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Calendar, Globe } from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import { universitiesData, type University } from '@/lib/universities-data';
import { fetchPublicUniversities } from '@/action/university/server-action';
import type { ApiUniversity } from '@/action/university/types';

/** Convert an API university to the local University shape */
function toLocalUniversity(u: ApiUniversity): University {
    return {
        id: u._id as any, // string _id for API universities
        name: u.name,
        country: u.country,
        city: u.location,
        image: u.image || 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80',
        description: u.description,
        founded: u.established,
    };
}

const HARDCODED_COUNTRIES = ['South Korea', 'Italy', 'Malta', 'Austria', 'Hungary'];
const UNIVERSITIES_PER_PAGE = 12;

export default function UniversitiesPage() {
    const [allUniversities, setAllUniversities] = useState<University[]>(universitiesData);
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(UNIVERSITIES_PER_PAGE);

    // Fetch API universities and merge with hardcoded
    useEffect(() => {
        fetchPublicUniversities().then((apiUnis) => {
            if (apiUnis.length > 0) {
                const converted = apiUnis.map(toLocalUniversity);
                // Merge: hardcoded first, then API (avoiding name duplicates)
                const hardcodedNames = new Set(universitiesData.map(u => u.name.toLowerCase()));
                const newFromApi = converted.filter(u => !hardcodedNames.has(u.name.toLowerCase()));
                setAllUniversities([...universitiesData, ...newFromApi]);
            }
        });
    }, []);

    // Build dynamic country list
    const countries = useMemo(() => {
        const countrySet = new Set(allUniversities.map(u => u.country));
        // Ensure hardcoded countries appear first, then any new from API
        const ordered = HARDCODED_COUNTRIES.filter(c => countrySet.has(c));
        countrySet.forEach(c => {
            if (!ordered.includes(c)) ordered.push(c);
        });
        return ['All', ...ordered];
    }, [allUniversities]);

    const filteredUniversities = useMemo(() => {
        return allUniversities.filter(uni => {
            const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
            const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCountry && matchesSearch;
        });
    }, [selectedCountry, searchQuery, allUniversities]);

    const displayedUniversities = filteredUniversities.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + UNIVERSITIES_PER_PAGE);
    };

    const handleFilterChange = (country: string) => {
        setSelectedCountry(country);
        setVisibleCount(UNIVERSITIES_PER_PAGE);
    };

    return (
        <div className="py-12 md:py-24 space-y-12">
            {/* Header */}
            <div className="container px-4 mx-auto text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Explore Universities
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Discover top universities across our partner countries.
                </p>
            </div>

            {/* Filters */}
            <div className="container px-4 mx-auto space-y-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search universities..."
                            className="pl-9"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setVisibleCount(UNIVERSITIES_PER_PAGE);
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {countries.map(country => (
                            <Button
                                key={country}
                                variant={selectedCountry === country ? "default" : "outline"}
                                onClick={() => handleFilterChange(country)}
                                size="sm"
                                className="rounded-full h-9 px-4"
                            >
                                {country}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Universities Grid */}
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedUniversities.map((uni) => (
                        <Card key={uni.id} className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden group border-none shadow-sm bg-card/50 backdrop-blur-sm">
                            <div className="h-48 overflow-hidden relative">
                                <NextImage
                                    src={uni.image}
                                    alt={uni.name}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground backdrop-blur-md shadow-sm border-none font-semibold">
                                    {uni.country}
                                </Badge>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="line-clamp-1 text-xl group-hover:text-primary transition-colors duration-300">{uni.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-3 pb-4">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <MapPin className="h-4 w-4 text-primary/70 flex-shrink-0" />
                                    <span className="text-muted-foreground">{uni.city}, {uni.country}</span>
                                </div>
                                {uni.founded && (
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Calendar className="h-4 w-4 text-primary/70 flex-shrink-0" />
                                        <span className="text-muted-foreground">Founded {uni.founded}</span>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button className="w-full rounded-lg font-bold h-11 transition-all duration-300" variant="outline" asChild>
                                    <Link href={`/courses/${uni.id}`}>Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {filteredUniversities.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-muted-foreground"
                    >
                        <Globe className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">No universities found. Try adjusting your filters.</p>
                    </motion.div>
                )}

                {displayedUniversities.length < filteredUniversities.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            onClick={handleLoadMore}
                            variant="default"
                            size="lg"
                            className="rounded-full px-8"
                        >
                            Load More Universities
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

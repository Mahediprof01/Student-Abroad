import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UserCheck, Globe2 } from 'lucide-react';

export function FeaturesSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container px-4 relative z-10 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">Why Choose Study Abroad Consultancy?</h2>
                        <p className="text-primary-foreground/80 text-lg">
                            We bring years of experience and a personal touch to your study abroad dreams. Our success rate speaks for itself.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Personalized Counseling Sessions',
                                'Direct University Partnerships',
                                'Work Permit Assistance',
                                'Pre-departure Briefings',
                                'Post-arrival Support'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <UserCheck className="h-5 w-5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="secondary" size="lg" asChild className="mt-4">
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        {/* Placeholder for an image - using a stylized div for now */}
                        <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                            <Globe2 className="h-32 w-32 text-white/80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

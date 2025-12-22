import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
    return (
        <section className="py-24">
            <div className="container px-4 mx-auto">
                <div className="bg-muted rounded-3xl p-8 md:p-16 text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Book a free consultation with our education experts today. We assist with university admissions, visa applications, and work permit processing.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="w-full sm:w-auto">
                            <Link href="/contact">Book Free Consultation</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                            <Link href="/courses">Browse Universities</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

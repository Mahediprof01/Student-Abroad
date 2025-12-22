'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export function ConsultationForm() {
    return (
        <section className="relative z-20 -mt-20 pb-12 px-4 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Card className="max-w-4xl mx-auto shadow-2xl border-primary/10">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl md:text-3xl font-bold">
                            Get Your Free Consultation
                        </CardTitle>
                        <CardDescription>
                            Fill in your details below and our experts will get back to you shortly.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-end">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" placeholder="+1 234 567 890" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@example.com" />
                            </div>
                            <Button size="lg" className="w-full font-bold">
                                Book Now <BookOpen className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}

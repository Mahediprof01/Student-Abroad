'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Handle form submission logic here
        alert("Thank you for your message! We will get back to you soon.");
    }

    return (
        <div className="py-12 md:py-24">
            <div className="container px-4 mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                    <p className="text-muted-foreground text-lg">
                        Have questions about studying abroad or work permits? Our team is here to help you every step of the way. Send us a message or visit our office.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card>
                        <CardContent className="p-6 md:p-8 space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold">Send us a Message</h2>
                                <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" placeholder="+1 234 567 890" type="tel" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="john@example.com" type="email" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Inquiry about UK Universities" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your study plans..."
                                        className="min-h-[150px]"
                                        required
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">Contact Information</h2>
                            <div className="space-y-4">
                                <Card className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Visit Our Office</h3>
                                            <p className="text-muted-foreground">
                                                Moghbazar, Razzaq Plaza, Lif- 09,<br />
                                                10Th - Floor, Suite No-10/F,<br />
                                                Dhaka-1217
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Call Us</h3>
                                            <p className="text-muted-foreground">
                                                01306890908
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Email Us</h3>
                                            <p className="text-muted-foreground">
                                                studyabroad129@gmail.com
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex items-start gap-4">
                                        <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Opening Hours</h3>
                                            <p className="text-muted-foreground">
                                                Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                Sat: 10:00 AM - 2:00 PM
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-xl overflow-hidden bg-muted h-[300px] flex items-center justify-center border">
                            <p className="text-muted-foreground flex items-center gap-2">
                                <MapPin className="h-5 w-5" /> Google Maps Integration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img src="/logo.png" alt="Study Abroad Consultancy" className="h-20 w-auto object-contain" />
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Empowering students to achieve their dreams of studying abroad with expert guidance and support.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/studyabroadconsultantc/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-muted-foreground hover:text-primary">
                                    Universities
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/success-stories" className="text-muted-foreground hover:text-primary">
                                    Success Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Useful links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="text-muted-foreground hover:text-primary">
                                    Refund and Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span className="text-muted-foreground">
                                    Moghbazar, Razzaq Plaza, Lif- 09, 10Th - Floor, Suite No-10/F, Dhaka-1217
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span className="text-muted-foreground">01306890908</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span className="text-muted-foreground">studyabroad129@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Study Abroad Consultancy</p>
                </div>
            </div>
        </footer>
    );
}

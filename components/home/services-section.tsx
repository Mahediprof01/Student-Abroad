import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Plane, GraduationCap, Briefcase } from 'lucide-react';

export function ServicesSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Comprehensive support for your study abroad journey and work permit applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <GraduationCap className="h-10 w-10 text-primary" />,
                            title: 'University Admission',
                            desc: 'Expert guidance on selecting the right university and course based on your profile.'
                        },
                        {
                            icon: <Plane className="h-10 w-10 text-primary" />,
                            title: 'Visa Assistance',
                            desc: 'Complete support for visa documentation, application, and interview preparation.'
                        },
                        {
                            icon: <BookOpen className="h-10 w-10 text-primary" />,
                            title: 'Scholarship Help',
                            desc: 'Assistance in finding and applying for scholarships to fund your education.'
                        },
                        {
                            icon: <Briefcase className="h-10 w-10 text-primary" />,
                            title: 'Work Permit',
                            desc: 'Professional assistance with work permit applications and job placement support.'
                        }
                    ].map((service, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                            <CardHeader>
                                <div className="mb-4 p-3 bg-background rounded-xl w-fit shadow-sm">
                                    {service.icon}
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

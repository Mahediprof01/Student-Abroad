import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact Study Abroad Consultancy for expert guidance on studying in South Korea, Italy, Malta, Austria, and Hungary. Reach us by phone, email, or visit our Dhaka office.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Study Abroad Consultancy',
    description:
      'Get in touch with our expert education consultants. We are located in Dhaka, Bangladesh.',
    url: '/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

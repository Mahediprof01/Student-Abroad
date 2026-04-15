import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Team & Mission',
  description:
    'Learn about Study Abroad Consultancy, our mission to help students achieve their dream of studying abroad in South Korea, Italy, Malta, Austria, and Hungary. Meet our expert team of education consultants.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Study Abroad Consultancy',
    description:
      'Meet our expert team of education consultants dedicated to helping students pursue higher education abroad.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

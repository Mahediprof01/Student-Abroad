import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Universities & Courses - Explore Programs Abroad',
  description:
    'Browse universities and courses in South Korea, Italy, Malta, Austria, and Hungary. Find the perfect program for your study abroad journey with Study Abroad Consultancy.',
  alternates: {
    canonical: '/courses',
  },
  openGraph: {
    title: 'Universities & Courses | Study Abroad Consultancy',
    description:
      'Explore 130+ universities across South Korea, Italy, Malta, Austria, and Hungary. Find your ideal study abroad program.',
    url: '/courses',
    type: 'website',
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

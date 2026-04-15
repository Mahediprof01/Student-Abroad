import type { Metadata } from 'next';
import { universitiesData } from '@/lib/universities-data';
import { fetchUniversityById } from '@/action/university/server-action';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // Try hardcoded data first
  const numericId = parseInt(id);
  if (!isNaN(numericId)) {
    const found = universitiesData.find((u) => u.id === numericId);
    if (found) {
      return {
        title: `${found.name} - Study in ${found.country}`,
        description: found.description || `Learn about ${found.name} in ${found.city}, ${found.country}. Explore programs, admissions, and more with Study Abroad Consultancy.`,
        alternates: {
          canonical: `/courses/${id}`,
        },
        openGraph: {
          title: `${found.name} | Study Abroad Consultancy`,
          description: found.description || `Explore ${found.name} in ${found.country}.`,
          url: `/courses/${id}`,
          type: 'article',
          images: found.image ? [{ url: found.image, alt: found.name }] : undefined,
        },
      };
    }
  }

  // Try API
  try {
    const apiUni = await fetchUniversityById(id);
    if (apiUni) {
      return {
        title: `${apiUni.name} - Study in ${apiUni.country}`,
        description: apiUni.description || `Learn about ${apiUni.name} in ${apiUni.location}, ${apiUni.country}. Explore programs, admissions, and more with Study Abroad Consultancy.`,
        alternates: {
          canonical: `/courses/${id}`,
        },
        openGraph: {
          title: `${apiUni.name} | Study Abroad Consultancy`,
          description: apiUni.description || `Explore ${apiUni.name} in ${apiUni.country}.`,
          url: `/courses/${id}`,
          type: 'article',
          images: apiUni.image ? [{ url: apiUni.image, alt: apiUni.name }] : undefined,
        },
      };
    }
  } catch {
    // Fall through to default
  }

  return {
    title: 'University Details',
    description: 'Explore university details, programs, and admissions with Study Abroad Consultancy.',
  };
}

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

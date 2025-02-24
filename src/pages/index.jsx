
import HomeMain from '../components/homes/home';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import { NextSeo } from 'next-seo';
import Head from 'next/head'; // Import Head from next/head

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Home'} />
            <NextSeo
                title="Speaksure Academy Ielts Pte - Karur"
                description="Welcome to Speaksure Academy, your trusted destination for mastering English proficiency exams. Specializing in Study Visa, IELTS, PTE, and CELPIP, TOEFL we offer expert-led courses designed to boost your scores and enhance your language skills."
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: '2025-01-27T00:00:00Z',
                        modifiedTime: '2025-01-27T08:00:00Z',
                        authors: ['https://myamazingwebsite.com/authors/jane-doe'],
                        tags: ['Coding', 'Web Development', 'Next.js', 'React.js'],
                    },
                }}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: 'Welcome to Speaksure Academy',
                            description: 'A simple explanation of why coding is so much fun!',
                            datePublished: '2025-01-25T00:00:00Z',
                            dateModified: '2025-01-25T08:00:00Z',
                            author: {
                                '@type': 'Person',
                                name: 'Anbu',
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'speaksure',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://myamazingwebsite.com/logo.png',
                                },
                            },
                            image: 'https://myamazingwebsite.com/article-image.jpg',
                        }),
                    }}
                />
                 <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Product',
                            'name': 'speaksure',
                            'aggregateRating': {
                                '@type': 'AggregateRating',
                                'ratingValue': 4.8,
                                'ratingCount': 200, 
                                'reviewCount': 200,
                            },    
                        }),
                    }}     
                />
            </Head>
            <HomeMain />
        </Wrapper>
    );
}   












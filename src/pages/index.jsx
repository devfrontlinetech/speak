import HomeMain from "../components/homes/home";
import { Wrapper } from "../layout";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <Wrapper>
      <NextSeo
        title="IELTS, PTE & Study Visa Coaching in Karur | Speaksure Academy"
        description="Speaksure Academy in Karur offers expert IELTS, PTE, CELPIP, TOEFL and Spoken English coaching with high success rates."
        canonical="https://speaksure.in"
        openGraph={{
          url: "https://speaksure.in",
          title: "Speaksure Academy IELTS PTE - Karur",
          description:
            "Best IELTS, PTE & Spoken English coaching centre in Karur.",
          images: [
            {
              url: "https://speaksure.in/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Speaksure Academy Karur",
            },
          ],
          site_name: "Speaksure Academy",
        }}
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://speaksure.in/#localbusiness",
              name: "Speaksure Academy",
              image: "https://speaksure.in/og-image.jpg",
              url: "https://speaksure.in",
              telephone: "+919789655455",
              priceRange: "$$",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Full Street Address Here",
                addressLocality: "Karur",
                addressRegion: "Tamil Nadu",
                postalCode: "639001",
                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.9582996,
                longitude: 78.0765351,
              },

              hasMap: "https://www.google.com/maps/place/Speaksure+Academy+of+IELTS+%26+PTE+%7C+Study+Visa+%7C+Spoken+English+Karur+%7C+Fluency+Accent+%7C+TOEFL+%7C+CELPIP%7C+BEC%7C+Business+English/@10.9591998,78.0752801,18z/data=!4m6!3m5!1s0x3baa2fa534963b01:0x81b93ad3da53c8b5!8m2!3d10.9582996!4d78.0765351!16s%2Fg%2F11b70l240g?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",

              areaServed: {
                "@type": "City",
                name: "Karur",
              },

              sameAs: [
                "https://www.facebook.com/speaksure",
                "https://www.instagram.com/speaksure",
              ],

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 4.8,
                reviewCount: 200,
              },
            }),
          }}
        />
      </Head>
      <HomeMain />
    </Wrapper>
  );
}

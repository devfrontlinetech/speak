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
              telephone: "+919943318199",
              priceRange: "$$",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Full Street Address Here",
                addressLocality: "Karur",
                addressRegion: "Tamil Nadu",
                postalCode: "639007",
                addressCountry: "IN",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.9601,
                longitude: 78.0766,
              },

              hasMap: "https://www.google.com/maps?q=10.9601,78.0766",

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

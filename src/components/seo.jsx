import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>
            {pageTitle && `Speaksure - ${pageTitle} `}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Generated by create next app" />
          <meta name="keywords" content="spoken english in karur, spoken hindi karur, spoken french karur, spoken german karur, english training karur, speaksure in karur, spoken english, celpip karur, ielts karur, pte karur, toefl karur" />
          {/*   <meta name="robots" content="noindex, follow" />  */}
        <meta
            name="viewport"       
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" type="image/png" href="/assets/images/favicon1.png"/>
    </Head>
)     

export default SEO; 

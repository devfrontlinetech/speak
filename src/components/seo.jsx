import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>
            {pageTitle && `Speaksure - ${pageTitle} `}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Generated by create next app" />
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

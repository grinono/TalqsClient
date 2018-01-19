import React , { Component } from 'react'
import Helmet from 'react-helmet';


export default class bitlerHelmet extends Component {

  render() {
    return (
          <Helmet
              encodeSpecialCharacters={true}
              defaultTitle="Nu jouw oplossing"
          >

              <html lang="nl" amp />
              <body className="root" />
              <title itemProp="name" lang="en">Nu jouw oplossing</title>

              <base target="_blank" href="https://bitler.co" />

              <meta name="description" content="instant een gesprek met hulp" />
              <meta data-react-helmet="true" property="og:type" content="website"/>
              <meta data-react-helmet="true" property="og:url" content="https://bitler.co"/>
              <meta data-react-helmet="true" property="og:image" content="https://bitler.co/images/favicons/favicon-128x128.png"/>
              <meta data-react-helmet="true" property="og:title" content="Maak het nu makkelijker dan ooit om antwoorden te vinden op je complexe vragen"/>
              <meta data-react-helmet="true" property="og:description" content="Het laatste en beste wat je vinden kunt!"/>
              <meta data-react-helmet="true" name="twitter:card" content="summary"/>
              <meta data-react-helmet="true" name="twitter:image:src" content="https://bitler.co/images/favicons/favicon-128x128.png"/>
              <meta data-react-helmet="true" name="twitter:title" content="Maak het nu makkelijker dan ooit om antwoorden te vinden op je complexe vragen"/>
              <meta data-react-helmet="true" name="twitter:description" content="Het laatste en beste wat je vinden kunt!"/>

              <link rel="canonical" href="https://bitler.co" />
              <link rel="apple-touch-icon" href="/images/favicons/favicon-32x32.png" />
              <link rel="apple-touch-icon" sizes="72x72" href="/images/favicons/favicon-96x96.png" />
              <link rel="icon" type="image/png" size='16x16' href="/images/favicons/favicon-16x16.png" />
              <link rel="icon" type="image/png" size='32x32' href="/images/favicons/favicon-32x32.png" />
              <link rel="icon" type="image/png" size='96x96' href="/images/favicons/favicon-96x96.png" />

              <script type="application/ld+json">{`
                  {
                    "@context": "http://schema.org",
                    "@type": "Organization",
                    "url": "http://www.your-company-site.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-401-555-1212",
                      "contactType": "customer service"
                    }
                  }
              `}</script>

          </Helmet>
    );
  }
}

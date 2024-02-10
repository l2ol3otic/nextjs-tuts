'use client'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import { NextSeo } from 'next-seo';
import Script from 'next/script';

const GA_TRACKING_ID = "G-XXXXXXXXX"; // Replace with your actual GA4 Measurement ID
const GTM_ID         = "GTM-OOOOOOO" // GTM_ID

const seo = {
    title: 'your website title',
    description: 'your web description',
    image: 'IMAGE URL of your website',
    site_name: 'your website site name',
    url: 'your homepage domain'
}

export default function Home() {
    useEffect(() => {
        (async () => {
            // React Tag manager module
            TagManager.initialize({ gtmId: GTM_ID , events: {
                'gtm.start': new Date().getTime(),
                event: 'redirect'
            }})
            TagManager.dataLayer({
                dataLayer: {
                    page_title: 'home',
                    page_location: '/home',
                    send_to: GA_TRACKING_ID
                },
                dataLayerName: 'PageView'        
            })
        })();
      }, []);

    return <div>
        <NextSeo
            title={seo.title}
            description={seo.description}
            canonical="https://www.canonical.ie/"
            openGraph={{
                site_name: seo.site_name ,
                url: seo.url,
                title: seo.title,
                description: seo.description,
                images: [{ url: seo.image, alt: seo.title, width: 1200, height: 600 }]
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        <Script strategy="afterInteractive" id="script-loader" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <Script strategy="afterInteractive" id="main-logic">
            {
            `   
                //  Prepare window datalayer
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                // Passdown GTAG
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                });
            `
            }
        </Script>
        <div
            className='text-white' 
            style={{ 
                display: 'flex', 
                width: '100vw', 
                height: '100vh', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}>
            SEO is ready !!!
        </div>
    </div>

}
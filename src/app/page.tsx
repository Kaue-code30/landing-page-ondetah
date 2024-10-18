"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/home";
import { useMemo } from "react";
import Script from "next/script";


export default function App() {

  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>

      {/* <!-- Hotjar Tracking Code for LP Ondetah  --> */}
      <Script>
        {` (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5174264,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv='); `}
      </Script>

      {/* <!-- Google Tag Manager --> */}

      <Script>{`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TKFK2WW');`}</Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKFK2WW"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <Script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js" ></Script>


      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-400476575">
      </Script>
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-400476575');`}
      </Script>
      <main className="w-full flex items-center justify-center bg-white h-auto">
        <Home />
      </main>
    </QueryClientProvider>
  );
}

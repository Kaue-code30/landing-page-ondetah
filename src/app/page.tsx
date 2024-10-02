"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/home";
import { useMemo } from "react";
import Script from "next/script";


export default function App() {

  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
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
      <main className="w-full flex items-center justify-center bg-white h-auto">
        <Home />
      </main>
    </QueryClientProvider>
  );
}

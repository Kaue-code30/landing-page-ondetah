"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/home";
import { useMemo } from "react";


export default function App() {

  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full flex items-center justify-center bg-white h-auto">
        <Home />
      </main>
    </QueryClientProvider>
  );
}

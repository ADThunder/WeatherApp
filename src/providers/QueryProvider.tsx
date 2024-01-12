"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

function QueryProvider({ children }: { children: ReactNode }) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default QueryProvider;

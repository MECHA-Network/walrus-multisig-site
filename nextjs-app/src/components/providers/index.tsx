'use client';

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';
import { useState } from 'react';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const { networkConfig } = createNetworkConfig({
    localnet: { url: getFullnodeUrl('localnet') },
    devnet: { url: getFullnodeUrl('devnet') },
    testnet: { url: getFullnodeUrl('testnet') },
    mainnet: { url: getFullnodeUrl('mainnet') },
  });
  const [activeNetwork, setActiveNetwork] = useState('testnet' as keyof typeof networkConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} network={activeNetwork} onNetworkChange={setActiveNetwork}>
        <WalletProvider autoConnect>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

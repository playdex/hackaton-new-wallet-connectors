import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
import { publicProvider } from '@wagmi/core/providers/public'
import { MetaMaskConnector } from '@wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from '@wagmi/connectors/coinbaseWallet';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { arbitrum, optimism, polygon } from '@wagmi/chains';
import { useRouter } from 'next/router';
import { WalletConnectionProvider } from '@features/common';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [publicProvider()],
);

const { connectors: rainbowWallets } = getDefaultWallets({
  appName: 'wallet-connections-test',
  chains
});

const wagmiWallets = [
  new MetaMaskConnector({ chains }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "wallet-connections-test"
    }
  }),
];


const connectorsByRouteMap = {
  '/wagmi': wagmiWallets,
  '/rainbow': rainbowWallets
}

export default function App({ Component, pageProps }: AppProps) {

  const { pathname } = useRouter();

  // @ts-ignore
  const connectors = connectorsByRouteMap[pathname] || wagmiWallets;

  const client = createClient({
    autoConnect: false,
    provider,
    connectors,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client} >
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

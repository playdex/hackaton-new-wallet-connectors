import React, { PropsWithChildren } from 'react';
import Header from '../../modules/Header/Header';

export type WalletConnectionProvider = 'wagmi' | 'rainbow' | null;

export const MainLayout = ({ children, provider }: PropsWithChildren<{
  provider: WalletConnectionProvider
}>): JSX.Element => {
  return (
    <div className="flex flex-col relative min-h-[100vh]">
      <div
        className="absolute left-0 top-0 min-h-[100vh] min-w-[100vw] -z-50 blur-sm"
        style={{
          backgroundImage: 'url(mainPage_bg_image.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Header provider={provider} />
      <main className="flex-1 gap-1 flex p-1">{children}</main>
    </div>
  );
};

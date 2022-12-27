import React, { useState } from 'react';
import { SignInModalContent } from '../../../auth';
import { MdAccountCircle } from 'react-icons/md';
import { SiAuthy } from 'react-icons/si';
import { Transition } from '@tailwindui/react';
import { Button, Modal } from 'flowbite-react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { getShortStringView, WalletConnectionProvider } from '@features/common';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

function Header({ provider }: React.PropsWithChildren<{ provider: WalletConnectionProvider }>) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const connect = useConnect();
  const { disconnect } = useDisconnect();

  const account = useAccount();
  const { address, isConnected } = account;

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <header className="min-h-[90px] px-4 bg-gradient-to-b from-white to-white/50 shadow flex text-gray-900">
        <section className="w-full min-h-full flex justify-between items-center">
          <Link href="/">
            <div className="p-2 bg-gray-800 rounded max-w-min flex gap-2 items-center">
              <SiAuthy className="text-white animate-pulse" />
              <span className="font-bold text-white text-lg whitespace-nowrap">
              Wallet connectors
            </span>
            </div>
          </Link>
          {isConnected ? (
            <div className="flex gap-6">
              <div className="hidden md:flex gap-2 items-center">
                <MdAccountCircle className="w-5 h-5 text-gray-900" />
                <div className="font-bold">{address ? getShortStringView(address) : 'user'}</div>
              </div>
              <Button onClick={() => disconnect()}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-4">
              {provider === 'wagmi' && (
                <Button onClick={openLoginModal}>Login</Button>
              )}
              {provider === 'rainbow' && (
                <ConnectButton />
              )}
            </div>
          )}
        </section>
      </header>
      <Modal
        show={isLoginModalOpen}
        onClose={closeLoginModal}
      >
        <SignInModalContent closeModal={closeLoginModal} connectState={connect} />
      </Modal>
    </>
  );
}

export default Header;

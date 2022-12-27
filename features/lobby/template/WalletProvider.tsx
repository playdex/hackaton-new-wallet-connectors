import { MainLayout, WalletConnectionProvider } from '@features/common';
import React, { PropsWithChildren } from 'react';
import { Badge, Card } from 'flowbite-react';
import { useAccount, useBalance } from 'wagmi';

const BadgeInfo = ({ children, label, value }: React.PropsWithChildren<{
  label?: string;
  value?: string | number | undefined;
}> ): JSX.Element => (
  <Card
    color="indigo"
    className="!w-full !p-0 !md:p-4"
  >
    {
      children ? children : (
        <div  className="flex !flex-row justify-between text-base md:text-xl text-blue-900 font-bold truncate">
          <span className="">{label}:</span>
          <span className="font-medium overflow-hidden">
            <Badge color="info" size="xl">
              {value || '-'}
            </Badge>
          </span>
        </div>
      )
    }
  </Card>
)

export const WalletProviderTemplate = ({ provider }: PropsWithChildren<{ provider: WalletConnectionProvider }>): JSX.Element => {
  const { address, status, connector, isConnected } = useAccount();
  const { data: balanceData } = useBalance({ address });

  return (
    <MainLayout provider={provider}>
      {
        isConnected
        ? (
            <Card className="!w-full !m-1 !md:m-4 bg-gray-500/50 overflow-y-auto !p-2 !md:p-6">
              <div className="flex flex-col justify-start h-full w-full gap-2 ">
                <BadgeInfo
                  label="Wallet Address"
                  value={address}
                />
                <BadgeInfo
                  label="Connector"
                  value={connector?.name}
                />
                <BadgeInfo
                  label="Status"
                  value={status}
                />
                <BadgeInfo
                  label="Balance"
                  value={`${balanceData?.symbol} ${balanceData?.formatted}`}
                />
              </div>
            </Card>
          )
        : (
            <Badge size="2xl" color="warning">
              Wallet not connected
            </Badge>
          )
      }
    </MainLayout>
  );
};

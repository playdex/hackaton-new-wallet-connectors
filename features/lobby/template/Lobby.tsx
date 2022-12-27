import React from 'react';
import { MainLayout } from '@features/common';
import { Badge, Button, Card } from 'flowbite-react';

const Lobby = (): JSX.Element => {
  return (
    <MainLayout provider={null}>
      <Card className="!w-full !m-4 bg-gray-500/50 overflow-y-auto">
        <div className="">
          <h2 className="text-2xl text-white font-bold text-center">Please select a wallets connector</h2>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            gradientDuoTone="purpleToBlue"
            size="xl"
            href="/wagmi"
          >
            Wagmi
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            size="xl"
            href="/rainbow"
          >
            Rainbow-Kit
          </Button>
        </div>
      </Card>
    </MainLayout>
  );
};

export default Lobby;
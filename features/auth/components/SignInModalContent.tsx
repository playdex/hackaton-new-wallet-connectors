import { ElModal } from '@features/common';
import React, { PropsWithChildren } from 'react';
import { Connector, useConnect } from 'wagmi';
import { Button, Modal, Spinner } from 'flowbite-react';
import classNames from 'classnames';

type LoginModalProps = {
  closeModal: () => void;
  connectState: ReturnType<typeof useConnect>
};

export const SignInModalContent = ({ closeModal, connectState }: PropsWithChildren<LoginModalProps>): JSX.Element => {
  const {
    connect,
    connectors,
    isLoading
  } = connectState;

  const connectHandler = (connector: Connector) => {
    connect({ connector })
    closeModal()
  }

  return  (
    <>
      <Modal.Header>
        Please select one of wallet connector
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-2">
          {
            connectors
              .filter((connector) => connector.ready)
              .map((connector) => (
                <Button
                  key={connector.id}
                  onClick={() => connectHandler(connector)}
                  color={connector.name === 'MetaMask' ? 'warning' : 'info'}
                >
                  {isLoading ? (
                    <Spinner
                      color="warning"
                      aria-label="Warning spinner example"
                    />
                  ) : (
                    <span>
                  { connector.name }
                </span>
                  )
                  }
                </Button>
              ))
          }
        </div>
      </Modal.Body>
    </>

  )
};

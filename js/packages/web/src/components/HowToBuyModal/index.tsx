import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';
import { ConnectButton } from '@oyster/common';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How to Buy"
      modalTitle={`Buying ${LABELS.STORE_NAME}`}
      cardProps={[
        {
          title: 'Wallet',
          imgSrc: '/modals/how-to-buy-1.svg',
          description: `Solana (SOL) is the crypto currency we use. An SOL wallet is required.`,
          endElement: (
            <a href="https://phantom.app" target="_blank" rel="noreferrer">
              <span>Install wallet</span>
            </a>
          ),
        },
        {
          title: 'Funds',
          imgSrc: '/modals/how-to-buy-2.svg',
          description: `You’ll need to purchase SOL tokens. The easiest way is with a credit card on FTX Pay.`,
          endElement: (
            <a
              href="https://ftx.com/profile#a=94270853"
              target="_blank"
              rel="noreferrer"
            >
              <span>FTX affiliated</span>
            </a>
          ),
        },
        {
          title: `Connect`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: `Your wallet is secure.  You must "connect" before transactions can happen.`,
          endElement: <ConnectButton className={'ant-btn-sm secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};

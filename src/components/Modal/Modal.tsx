import React, { FC } from 'react';
import ReactModal from 'react-modal';

import { colors } from 'styling';

ReactModal.setAppElement('#root');

interface Props {
  isOpen: boolean;
}

const width = 370;
const style: ReactModal.Styles = {
  content: {
    backgroundColor: colors.background,
    maxWidth: width,
    height: 'fit-content',
    border: 'none',
    borderRadius: 10,
    left: `calc(50% - ${width / 2}px)`,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

export const Modal: FC<Props> = ({ isOpen, children }) => (
  <ReactModal isOpen={isOpen} style={style}>
    {children}
  </ReactModal>
);

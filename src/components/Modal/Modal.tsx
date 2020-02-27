/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx, css } from '@emotion/core';
import ReactModal from 'react-modal';
import { IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { colors } from 'styling';
import { useSmallDevice } from 'hooks';

interface Props {
  isOpen: boolean;
  header?: string;
  onClose?: () => void;
}

const width = 370;
export const Modal: FC<Props> = ({ isOpen, header, onClose, children }) => {
  const isSmallDevice = useSmallDevice();

  const style = useMemo<ReactModal.Styles>(
    () => ({
      content: {
        backgroundColor: colors.background,
        width: isSmallDevice ? '100%' : width,
        height: isSmallDevice ? '100%' : 'fit-content',
        border: 'none',
        borderRadius: isSmallDevice ? 0 : 10,
        top: isSmallDevice ? 0 : 40,
        left: isSmallDevice ? 0 : `calc(50% - ${width / 2}px)`,
        padding: `${header ? 18 : 0}px 10px 40px`,
        boxSizing: 'border-box',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    }),
    [isSmallDevice, header],
  );

  return (
    <ReactModal isOpen={isOpen} style={style}>
      <div
        css={css`
          height: ${header ? 44 : 30}px;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;

          ${!header &&
            css`
              position: relative;
              top: 15px;
            `}
        `}
      >
        <IconButton onClick={onClose}>
          <CloseRoundedIcon
            fontSize={isSmallDevice ? 'large' : 'small'}
            css={css`
              color: #c2c5d2;
            `}
          />
        </IconButton>
        {!!header && (
          <b
            css={css`
              padding-left: 25px;
              font-size: 1.125em;
            `}
          >
            {header}
          </b>
        )}
      </div>
      <div
        css={css`
          padding: 0 25px;
        `}
      >
        {children}
      </div>
    </ReactModal>
  );
};

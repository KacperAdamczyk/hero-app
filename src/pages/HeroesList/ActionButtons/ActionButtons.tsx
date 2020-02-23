import React, { FC } from 'react';
import AddIcon from '@material-ui/icons/Add';

import { Button } from 'components';

interface Props {
  className: string;
}

export const ActionButtons: FC = props => (
  <div {...props}>
    <Button Icon={AddIcon}>Add a hero</Button>
  </div>
);

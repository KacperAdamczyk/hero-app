import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

import { Button } from 'components';

interface Props {
  className?: string;
}

export const ActionButtons: FC<Props> = props => {
  const navigate = useNavigate();

  const addHero = useCallback(() => {
    navigate('add');
  }, [navigate]);

  return (
    <div {...props}>
      <Button Icon={AddIcon} onClick={addHero}>
        Add a hero
      </Button>
    </div>
  );
};

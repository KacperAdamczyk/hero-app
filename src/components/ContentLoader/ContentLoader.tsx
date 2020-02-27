import React, { FC } from 'react';

import { Error, Loader } from 'components';

interface Props {
  loading: boolean;
  error?: string;
}

export const ContentLoader: FC<Props> = ({ children, loading, error }) => {
  if (error) {
    return <Error message={error} />;
  }

  return loading ? <Loader /> : <>{children}</>;
};

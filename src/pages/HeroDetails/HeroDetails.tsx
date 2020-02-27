/** @jsx jsx */
import { FC, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import styled from '@emotion/styled';
import DeleteIcon from '@material-ui/icons/Delete';

import { Modal, ContentLoader, Avatar, Button, Error } from 'components';
import {
  HERO,
  Hero,
  HeroVariables,
  DELETE_HERO,
  DeleteHeroVariables,
  DeleteHero,
} from 'api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 20px;
  }
`;

export const HeroDetails: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onClose = useCallback(() => navigate('/heroes'), [navigate]);

  const { loading: gettingHero, error: gettingHeroError, data } = useQuery<
    Hero,
    HeroVariables
  >(HERO, {
    variables: { id },
  });
  const [
    deleteHero,
    { loading: deletingHero, error: deletingHeroError },
  ] = useMutation<DeleteHero, DeleteHeroVariables>(DELETE_HERO);

  const onClick = useCallback(
    () =>
      deleteHero({ variables: { id } }).then(
        navigate('/heroes', { state: { refetch: true } }),
        e => console.log(e),
      ),
    [deleteHero, navigate, id],
  );

  const hero = data?.hero;

  return (
    <Modal isOpen onClose={onClose}>
      <ContentLoader loading={gettingHero} error={gettingHeroError?.message}>
        {!!hero && (
          <Container>
            <Avatar url={hero.avatar_url} size={95} />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <b
                css={css`
                  font-size: 1.125em;
                  margin-bottom: 3px;
                `}
              >
                {hero.full_name}
              </b>
              <div>{hero.type.name}</div>
            </div>
            <div>{hero.description}</div>
            <Button
              color="red"
              Icon={DeleteIcon}
              loading={deletingHero}
              onClick={onClick}
            >
              Delete the hero
            </Button>
            <Error message={deletingHeroError?.message} />
          </Container>
        )}
      </ContentLoader>
    </Modal>
  );
};

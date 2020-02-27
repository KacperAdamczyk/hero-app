import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router-dom';
import waitForExpect from 'wait-for-expect';

import { HeroDetails } from './HeroDetails';
import { HERO } from 'api';

jest.mock('react-modal');

let queryFetched = false;

const query: MockedResponse[] = [
  {
    request: {
      query: HERO,
    },
    result: () => {
      queryFetched = true;

      return {
        data: {
          hero: {
            __typename: 'hero',
            avatar_url: 'avatar',
            full_name: 'name',
            type: {
              name: 'type',
            },
            description: 'description',
          },
        },
      };
    },
  },
];

describe('HeroDetails', () => {
  beforeEach(() => {
    queryFetched = false;
  });

  test('should query a hero', async () => {
    const { container } = render(
      <MockedProvider mocks={query}>
        <MemoryRouter>
          <HeroDetails />
        </MemoryRouter>
      </MockedProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
    await waitForExpect(() => {
      expect(queryFetched).toBeTruthy();
    });
  });
});

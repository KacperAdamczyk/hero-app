import { renderHook } from '@testing-library/react-hooks';

import { useWindowWidth } from './useWindowWidth';

describe('useWindowWidth', () => {
  it('should proper window with', () => {
    Object.defineProperty(window, 'innerWidth', { value: 42 });
    const { result } = renderHook(() => useWindowWidth());

    expect(result.current).toEqual(42);
  });
});

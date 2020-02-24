import { useWindowWidth } from './useWindowWidth';
import { breakpoints } from 'styling';

export function useDevice(size: number) {
  const width = useWindowWidth();

  return width <= size;
}

export const useSmallDevice = () => useDevice(breakpoints.small);
export const useMediumDevice = () => useDevice(breakpoints.medium);
export const useLargeDevice = () => useDevice(breakpoints.large);

import { leftAsideOpen, rightAsideOpen } from '@/store';

type Position = 'left' | 'right';
type Breakpoint = 'md' | 'lg' | 'xl';

const breakpointMap: Record<Breakpoint, number> = {
  md: 864,
  lg: 1200,
  xl: 1440,
} as const;

const getContentId = (location: Position) => `${location}-side-nav`;
const getTitleId = (location: Position) => `${location}-side-nav-title`;
const getDescriptionId = (location: Position) =>
  `${location}-side-nav-description`;
const getTriggerId = (location: Position) => `${location}-side-nav-trigger`;
const getCloseButtonId = (location: Position) =>
  `${location}-side-nav-close-button`;
const getScrollableId = (location: Position) =>
  `${location}-side-nav-scrollable`;

const getState = (open: boolean) => (open ? 'open' : 'closed');

const getAtom = (location: Position) => {
  return location === 'left' ? leftAsideOpen : rightAsideOpen;
};

// Constants
export { breakpointMap };

// Functions
export {
  getAtom,
  getCloseButtonId,
  getContentId,
  getDescriptionId,
  getScrollableId,
  getState,
  getTitleId,
  getTriggerId,
};

// Types
export type { Breakpoint, Position };

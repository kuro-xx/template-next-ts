import React from 'react';
import { useMediaQuery } from '../useMediaQuery';
import { useTheme } from '@emotion/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Hooks/useMediaQuery',
};

export const Equal = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery('desktop', 'eq');
  const isLaptop = useMediaQuery('laptop', 'eq');
  const isTablet = useMediaQuery('tablet', 'eq');
  const isMobile = useMediaQuery('mobile', 'eq');

  return (
    <div>
      <div>
        {theme.breakpoint.lg + 1}px以上で表示: {isDesktop && <span>isDesktop</span>}
      </div>
      <div>
        {theme.breakpoint.md + 1}px以上、{theme.breakpoint.lg}以下で表示: {isLaptop && <span>isLaptop</span>}
      </div>
      <div>
        {theme.breakpoint.sm + 1}px以上、{theme.breakpoint.md}以下で表示: {isTablet && <span>isTablet</span>}
      </div>
      <div>
        {theme.breakpoint.sm}以下で表示: {isMobile && <span>isMobile</span>}
      </div>
    </div>
  );
};

export const LessThanOrEqual = () => {
  const theme = useTheme();
  const isLeDesktop = useMediaQuery('desktop', 'le');
  const isLeLaptop = useMediaQuery('laptop', 'le');
  const isLeTablet = useMediaQuery('tablet', 'le');
  const isLeMobile = useMediaQuery('mobile', 'le');

  return (
    <div>
      <div>常に表示: {isLeDesktop && <span>isLeDesktop</span>}</div>
      <div>
        {theme.breakpoint.lg}以下で表示: {isLeLaptop && <span>isLeLaptop</span>}
      </div>
      <div>
        {theme.breakpoint.md}以下で表示: {isLeTablet && <span>isLeTablet</span>}
      </div>
      <div>
        {theme.breakpoint.sm}以下で表示: {isLeMobile && <span>isLeMobile</span>}
      </div>
    </div>
  );
};

export const GreaterThanOrEqual = () => {
  const theme = useTheme();
  const isGeDesktop = useMediaQuery('desktop', 'ge');
  const isGeLaptop = useMediaQuery('laptop', 'ge');
  const isGeTablet = useMediaQuery('tablet', 'ge');
  const isGeMobile = useMediaQuery('mobile', 'ge');

  return (
    <div>
      <div>
        {theme.breakpoint.lg + 1}px以上で表示: {isGeDesktop && <span>isGeDesktop</span>}
      </div>
      <div>
        {theme.breakpoint.md + 1}px以上で表示: {isGeLaptop && <span>isGeLaptop</span>}
      </div>
      <div>
        {theme.breakpoint.sm + 1}px以上で表示: {isGeTablet && <span>isGeTablet</span>}
      </div>
      <div>常に表示: {isGeMobile && <span>isGeMobile</span>}</div>
    </div>
  );
};

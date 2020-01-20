import styled from '@emotion/styled';

/**
 * usage:
 * css({
 *  MediaQuery(BreakPoint.small, {width: 100})
 * })
 */

export enum BreakPoint {
  small = '576',
  medium = '772',
  large = '1280',
}

const query = (bp: BreakPoint) => `@media (max-width: ${bp}px)`;

export const MediaQuery = (bp: BreakPoint, styles: any) => ({ [query(bp)]: styles });

export const DoubleColumn: any = styled.div([
  {
    display: 'flex',
  },
  MediaQuery(BreakPoint.medium, { flexDirection: 'column' }),
]);

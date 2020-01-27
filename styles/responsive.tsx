import styled from '@emotion/styled';

/**
 * usage:
 * css({
 *  MediaQuery(BreakPoint.small, {width: 100})
 * })
 */

export enum BreakPoint {
  small = '576',
  medium = '900',
  large = '1280',
}

const query = (bp: BreakPoint) => `@media (max-width: ${bp}px)`;

export const MediaQuery = (bp: BreakPoint, styles: any) => ({ [query(bp)]: styles });

export const Container: any = styled.div({
  width: '100%',
  maxWidth: '996px',
  padding: '0 32px',
  margin: '0 auto',
  boxSizing: 'border-box',
});

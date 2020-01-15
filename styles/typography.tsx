import { css } from '@emotion/core';
import { Color } from './color';

export const TitleFont = css({
  fontFamily: `'Righteous', 'Open sans', helvetica, sans-serif`,
});

export const BodyFont = css({
  fontFamily: `'Roboto Condensed', 'Open sans', helvetica, sans-serif`,
});

export const Typography = css({
  body: [
    BodyFont,
    {
      fontSize: 16,
      lineHeight: '22px',
      color: Color.white,
    },
  ],
  'h1, h2': [
    TitleFont,
    {
      fontSize: 24,
      color: Color.white,
    },
  ],
  'a, button': [
    BodyFont,
    {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  ],
});

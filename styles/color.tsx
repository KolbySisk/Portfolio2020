export const Color = {
  red: '#e57060',
  blue: '#606ee5',
  purp: '#b860e5',
  green: '#b1e560',
  white: '#ffffff',
  silver: '#efeff5',
  darkGray: '#222227',
  black: '#131315',
};

export const Gradient = {
  redToBlue: {
    backgroundColor: Color.red,
    background: `linear-gradient(180deg, ${Color.red} 0%, ${Color.blue} 100%)`,
  },
};

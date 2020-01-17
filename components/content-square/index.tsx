import * as ContentSquaresStyles from './content-square.styles';
import { Color } from '../../styles';

const ContentSquare = ({ children, backgroundColor }) => {
  return (
    <ContentSquaresStyles.Root backgroundColor={backgroundColor}>
      <ContentSquaresStyles.ContentContainer>{children}</ContentSquaresStyles.ContentContainer>
    </ContentSquaresStyles.Root>
  );
};

interface Props {
  children: any;
  backgroundColor: Color;
}

export default ContentSquare;

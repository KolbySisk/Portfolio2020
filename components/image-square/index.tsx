import * as ImageSquareStyles from './image-square.styles';
import { Color } from '../../styles';

const ContentSquare = ({ children }) => {
  return (
    <ImageSquareStyles.Root>
      <ImageSquareStyles.ContentContainer>{children}</ImageSquareStyles.ContentContainer>
    </ImageSquareStyles.Root>
  );
};

interface Props {
  children: any;
}

export default ContentSquare;

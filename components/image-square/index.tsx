import * as ImageSquareStyles from './image-square.styles';
import { Color } from '../../styles';

const ContentSquare = ({ children, backgroundColor }: Props) => {
  return (
    <ImageSquareStyles.Root backgroundColor={backgroundColor}>
      <ImageSquareStyles.ContentContainer>{children}</ImageSquareStyles.ContentContainer>
    </ImageSquareStyles.Root>
  );
};

interface Props {
  children: any;
  backgroundColor?: Color;
}

export default ContentSquare;

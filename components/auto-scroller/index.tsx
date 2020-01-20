import * as AutoScrollerStyles from './auto-scroller.styles';
import { Color } from '../../styles';

const AutoScroller = ({ children, backgroundColor }: Props) => {
  return (
    <AutoScrollerStyles.Root>
      <AutoScrollerStyles.ContentContainer>{children}</AutoScrollerStyles.ContentContainer>
    </AutoScrollerStyles.Root>
  );
};

interface Props {
  children: any;
  backgroundColor: Color;
}

export default AutoScroller;

/**
 *
 * 1. Get `containerWidth` of scroll container
 * 2. Scroll container to `containerWidth`
 * 3. Watch for overflowing elements inside container being completely hidden
 * 4. If completely hidden append to end of container - We only want to do this when autoscrolling
 * 5. Listen for user hover event and stop autoscrolling
 */

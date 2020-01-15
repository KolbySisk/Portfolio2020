import * as TagStyles from './tag.styles';

const Tag = ({ tag }: Props) => {
  return <TagStyles.Tag>{tag}</TagStyles.Tag>;
};

interface Props {
  tag: string;
}

export default Tag;

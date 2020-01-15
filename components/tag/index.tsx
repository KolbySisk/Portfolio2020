import * as TagStyles from './tag.styles';

const Tag = ({ tag, tagClicked, active }: Props) => {
  return (
    <TagStyles.Tag active={active} onClick={() => tagClicked(tag)}>
      {tag}
    </TagStyles.Tag>
  );
};

interface Props {
  tag: any;
  tagClicked: Function;
  active?: boolean;
}

export default Tag;

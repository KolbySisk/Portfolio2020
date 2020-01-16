import styled from '@emotion/styled';
import { Constant, Color, spaced } from '../../styles';

export const Root: any = styled.section({
  flex: 1,
  backgroundColor: Color.darkGray,
  padding: `0 ${spaced(4)}px ${spaced(4)}px`,
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Skills: any = styled.div({});

export const Skill: any = styled.div((props: any) => [
  {
    width: '100%',
    height: spaced(3.5),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: Constant.borderRadius,
    marginBottom: spaced(1.5),
    position: 'relative',
    background: `linear-gradient(90deg, ${Color.blue} ${props.fillPercent}%, ${Color.white} ${props.fillPercent}%)`,
  },
]);

export const SkillTitle: any = styled.h3({
  color: Color.white,
  fontWeight: 600,
  fontSize: 13,
  paddingLeft: spaced(1),
});

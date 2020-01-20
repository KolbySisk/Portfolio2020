import * as SkillsStyles from './skills-section.styles';
import { Skills } from '../../data/skills';
import ScrollingSkills from '../scrolling-skills';

const SkillsComponent = ({ skills }: Props) => {
  return (
    <SkillsStyles.Root>
      <SkillsStyles.Title>Skills</SkillsStyles.Title>
      <ScrollingSkills skills={Object.values(skills)} />
    </SkillsStyles.Root>
  );
};
interface Props {
  skills: Skills;
}
export default SkillsComponent;

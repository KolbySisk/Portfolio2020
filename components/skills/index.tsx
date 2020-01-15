import * as SkillsStyles from './skills.styles';
import { Skill } from '../../data';

const Skills = ({ skills }: Props) => {
  return (
    <SkillsStyles.Root>
      <h2>Skills</h2>
      <SkillsStyles.Skills>
        {skills?.map((skill: Skill) => (
          <SkillsStyles.Skill key={skill.title} fillPercent={skill.expertise}>
            <SkillsStyles.SkillTitle>{skill.title}</SkillsStyles.SkillTitle>
          </SkillsStyles.Skill>
        ))}
      </SkillsStyles.Skills>
    </SkillsStyles.Root>
  );
};

interface Props {
  skills: Skill[];
}

export default Skills;

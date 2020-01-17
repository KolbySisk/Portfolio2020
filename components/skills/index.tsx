import * as SkillsStyles from './skills.styles';
import { Skill } from '../../data';

const Skills = ({ skills }: Props) => {
  return (
    <SkillsStyles.Root>
      <SkillsStyles.Title>Skills</SkillsStyles.Title>
      <SkillsStyles.Skills>
        {skills?.map((skill: Skill) => (
          <SkillsStyles.Skill key={skill.title} skill={skill}>
            <div>
              <SkillsStyles.SkillTitle className="skill-title">
                {skill.title}
              </SkillsStyles.SkillTitle>
              <picture>
                <source
                  srcSet={require(`../../public/images/tech-logos/${skill.imageName}?webp`)}
                  type="image/webp"
                />
                <img src={require(`../../public/images/tech-logos/${skill.imageName}`)} />
              </picture>
            </div>
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

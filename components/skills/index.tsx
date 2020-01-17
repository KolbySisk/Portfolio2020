import * as SkillsStyles from './skills.styles';
import { Skill, Skills } from '../../data/skills';

const SkillsComponent = ({ skills }: Props) => {
  return (
    <SkillsStyles.Root>
      <SkillsStyles.Title>Skills</SkillsStyles.Title>
      <SkillsStyles.Skills>
        {Object.values(skills).map((skill: Skill) => (
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
  skills: Skills;
}

export default SkillsComponent;

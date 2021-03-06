import * as SkillCardStyles from './skill-card.styles';
import { Skill } from '../../data/skills';

const SkillCard = ({ skill }: Props) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <SkillCardStyles.Skill skill={skill} variants={item}>
      <SkillCardStyles.SkillTitle className="skill-title">{skill.title}</SkillCardStyles.SkillTitle>
      <picture>
        <source
          srcSet={require(`../../public/images/tech-logos/${skill.imageName}?webp&size=128`)}
          type="image/webp"
        />
        <img src={require(`../../public/images/tech-logos/${skill.imageName}?size=128`)} />
      </picture>
    </SkillCardStyles.Skill>
  );
};

interface Props {
  skill: Skill;
}

export default SkillCard;

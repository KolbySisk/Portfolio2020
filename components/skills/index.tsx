import * as SkillsStyles from './skills.styles';
import { Skill, Skills } from '../../data/skills';
import { useRef } from 'react';

const SkillsComponent = ({ skills }: Props) => {
  const containerRef = useRef(null);
  const speed = 7000;
  const delay = 1000;

  let observer;

  if (process.browser) {
    const observeChildren = (root, elements: any) => {
      let options = {
        root: root,
        threshold: 0,
      };
      const callback = enteries => {
        enteries.forEach(entry => {
          // tells us the element is off the screen
          if (!entry.isIntersecting && entry.intersectionRatio === 0) {
            // tells us the element is off the screen on the left side
            if (entry.boundingClientRect.x < 0) {
              const yo = entry.target.cloneNode(true);
              observer.observe(yo);
              root.appendChild(yo);
            }
          }
        });
      };

      observer = new IntersectionObserver(callback, options);

      //if (elements) observer.observe(elements[0]);
      elements.forEach(element => {
        observer.observe(element);
      });
    };

    const startScrolling = ({ ref, x, y }) => {
      const element = ref?.current;
      const maxScrollWidth = element.scrollWidth - element.offsetWidth;
      let px = Math.round((maxScrollWidth / speed) * 10);
      if (px < 1) {
        px = 1;
      }
      observeChildren(element, element?.childNodes);
      setInterval(() => {
        element.scrollTo(
          x ? element.scrollLeft + px : undefined,
          y ? element.scrollLeft + px : undefined
        );
      }, 10);
    };

    setTimeout(() => {
      startScrolling({ ref: containerRef, x: true, y: false });
    }, delay);
  }
  return (
    <SkillsStyles.Root>
      <SkillsStyles.Title>Skills</SkillsStyles.Title>
      <SkillsStyles.Skills id="container" ref={containerRef}>
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

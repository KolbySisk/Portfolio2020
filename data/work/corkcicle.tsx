import { Color } from '../../styles';
import { AllSkills } from '../skills';
import Corkcicle from '../../components/work/corkcicle';

export const CorkcicleData = {
  title: 'Corkcicle',
  slug: 'corkcicle',
  tags: ['Project'],
  color: Color.green,
  patternPath: 'work/corkcicle/pattern.png',
  patternLightPath: 'work/corkcicle/pattern-light.png',
  skills: [
    AllSkills.shopify,
    AllSkills.jquery,
    AllSkills.ps,
    AllSkills.illustrator,
    AllSkills.googleanalytics,
    AllSkills.googletagmanager,
    AllSkills.dns,
  ],
  component: Corkcicle,
};

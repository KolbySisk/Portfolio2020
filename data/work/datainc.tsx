import { Color } from '../../styles';
import { AllSkills } from '../skills';
import DataInc from '../../components/work/datainc';

export const DataIncData = {
  title: 'The Data Inc. Saga',
  slug: 'data-inc',
  tags: ['Project'],
  color: Color.red,
  patternPath: 'work/eraise/pattern.png',
  skills: [
    AllSkills.angular,
    AllSkills.react,
    AllSkills.redux,
    AllSkills.ionic,
    AllSkills.aspnet,
    AllSkills.dotnetcore,
    AllSkills.sqlserver,
    AllSkills.iis,
    AllSkills.azure,
    AllSkills.subversion,
  ],
  component: DataInc,
};

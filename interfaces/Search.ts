import Options from './Options';

export default interface Search {
  type: 'USER' | 'ISSUE' | 'REPOSITORY';
  fields: string[];
  options: Options;
}

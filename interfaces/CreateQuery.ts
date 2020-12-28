import Options from './Options';

export default interface CreateQuery {
  (
    searchType: 'USER' | 'ISSUE' | 'REPOSITORY',
    field: string[],
    options: Options
  ): string;
}

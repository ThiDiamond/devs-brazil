import CreateQuery from '../interfaces/CreateQuery';
import getRawQuery from './rawQuery';

const createQuery: CreateQuery = (searchType, fields, options) => {
  const query = getRawQuery(searchType, fields);
  const variables = { ...options, searchType };
  return JSON.stringify({ query, variables });
};

export default createQuery;

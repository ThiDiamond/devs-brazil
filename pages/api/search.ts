import { NextApiRequest, NextApiResponse } from 'next';
import createQuery from '../../graphql/createQuery';
import Search from '../../interfaces/Search';
import api from '../../services/api';

export const search = async ({ type, fields, options }: Search) => {
  const query = createQuery(type, fields, options);
  try {
    const { data } = await api.post('', query);
    return data.data.search.nodes;
  } catch (error) {
    console.log(error);

    throw Error(error);
  }
};

const searchHandler = async (
  { body }: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const result = await search(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default searchHandler;

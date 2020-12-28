import { search } from '../../pages/api/search';
import Search from '../../interfaces/Search';

describe('search Endpoint', () => {
  it('should return a list of devs from Brazil', async () => {
    interface TestDev {
      location: string;
    }
    const options: Search = {
      type: 'USER',
      fields: ['location'],
      options: {
        searchFirst: 10,
        searchQuery: 'location:Brazil',
      },
    };
    const devs = (await search(options)) as TestDev[];
    const isAllDevsFromBrazil = devs.every(({ location }) =>
      location.includes('Brazil')
    );
    expect(isAllDevsFromBrazil).toBeTruthy();
  });
});

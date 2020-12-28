import { capitalizeString, getMultilineString } from '../../graphql/rawQuery';

describe('getMultilineString', () => {
  it('should join the given string[] with \n', async () => {
    const fields = ['email', 'location'];
    const multilineString = getMultilineString(fields);

    expect(multilineString.split('\n')).toStrictEqual(fields);
  });
});

describe('capitalizeString', () => {
  it('should capitalize the given string', async () => {
    const capitalizedString = capitalizeString('USER');

    expect(capitalizedString).toBe('User');
  });
});

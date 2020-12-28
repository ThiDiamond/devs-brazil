export const capitalizeString = (string: string): string =>
  string[0].toUpperCase() + string.toLowerCase().slice(1);

const getRawQuery = (model: string, fields: string[]): string => `
    query Query(
    $searchQuery: String!
    $searchType: SearchType!
    $searchFirst: Int
    ) {
    search(query: $searchQuery , type: $searchType, first: $searchFirst) {
        nodes {
            ... on ${capitalizeString(model)} {
                    ${getMultilineString(fields)}
                }
            }
        }
    }`;

export const getMultilineString = (array: string[]): string => array.join('\n');

export default getRawQuery;

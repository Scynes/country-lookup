/**
 * The fields to filter on the API request.
 */
const FIELDS = [
    'name',
    'population',
    'nativeName',
    'region',
    'capital',
    'topLevelDomain',
    'currencies',
    'languages',
    'flags'
]

export const load = async ({ params, fetch }) => {

    const result = await fetch(`https://restcountries.com/v2/name/${params.country}?fullText=true&fields=${FIELDS}`);

    const country = await result.json();

    return {
        country: country[0]
    }
}
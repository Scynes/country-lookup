/**
 * The fields to filter on the API request.
 */
const FIELDS = [
    'name',
    'population',
    'nativeName',
    'region',
    'subregion',
    'capital',
    'topLevelDomain',
    'currencies',
    'languages',
    'flags',
    'borders'
]

export const load = async ({ params, fetch }) => {

    const result = await fetch(`https://restcountries.com/v2/name/${params.country}?fullText=true&fields=${FIELDS}`);

    const country = await result.json();

    const BORDER_COUNTRIES = []

    if (country[0].borders !== undefined) {

        const getBorderCountries = await fetch(`https://restcountries.com/v2/alpha?codes=${country[0].borders}&fields=name,flags`);
        const borderCountries = await getBorderCountries.json();

        for (let country of borderCountries) {

            const formattedName = country.name.split(/[(,]/)[0];

            const BORDER_COUNTRY = {
                name: formattedName,
                flag: country.flags.svg
            }

            BORDER_COUNTRIES.push(BORDER_COUNTRY);
        }
    }

    return {
        country: country[0],
        borders: BORDER_COUNTRIES
    }
}
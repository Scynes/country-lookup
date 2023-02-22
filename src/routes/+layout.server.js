export const load = async ({ fetch }) => {

    const result = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,flags,population');

    const data = await result.json();

    const COUNTRIES = [];

    while (COUNTRIES.length < 8) {

        const index = Math.floor(Math.random() * data.length);

        if (!COUNTRIES.includes(data[index])) 
            COUNTRIES.push(data[index]);
    }

    return {
        countries: COUNTRIES
    }
}
export const load = async ({ fetch }) => {

    const result = await fetch('https://restcountries.com/v2/all?fields=name,capital,currencies,flags');

    const data = await result.json();

    const countries = [];

    while (countries.length < 6) {

        const index = Math.floor(Math.random() * data.length);

        if (!countries.includes(data[index])) 
            countries.push(data[index]);
    }

    return {
        countries
    }
}
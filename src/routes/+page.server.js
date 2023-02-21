export const load = async ({ fetch }) => {

    const result = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,flags,population');

    const data = await result.json();

    const countries = [];

    while (countries.length < 8) {

        const index = Math.floor(Math.random() * data.length);

        if (!countries.includes(data[index])) 
            countries.push(data[index]);
    }

    return {
        countries
    }
}
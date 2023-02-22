<script>
    import lodash from 'lodash';

    import { countries } from "@stores/countries";

    const { debounce } = lodash;
   
    let amount = 12;

    const debouncedAPICall = debounce(async () => {
        const result = await fetch('https://restcountries.com/v2/all?fields=name,capital,region,flags,population');

        if (!result.ok) return;

        const data = await result.json();

        const COUNTRIES = [];

        while (COUNTRIES.length < amount) {

            const index = Math.floor(Math.random() * data.length);

            if (!COUNTRIES.includes(data[index])) 
                COUNTRIES.push(data[index]);
        }

        countries.set(COUNTRIES);

    }, 500);

    const refresh = () => {

        if (amount < 1) return;

        debouncedAPICall()
    }
</script>

<style>
    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        width: 100%;
    }
</style>

<div id="refresh-container" class="flex gap-small width-full">
    <button class="refresh border-radius-small secondary-bg-col primary-font-col" on:click={refresh}>
        <i class="fa-solid fa-arrows-rotate"></i>
    </button>
    <input class="secondary-bg-col primary-font-col text-center" type="number" placeholder="Amount" bind:value={amount} max="100">
</div>
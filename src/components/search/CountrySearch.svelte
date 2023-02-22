<script>

    import lodash from 'lodash';

    import { countries } from "@stores/countries";

    const { debounce } = lodash;

    let input = '';

    const debouncedAPICall = debounce(async (input) => {

        const result = await fetch(`https://restcountries.com/v2/name/${input.toLowerCase()}?fields=name,capital,region,flags,population`);

        if (result.ok) {

            const data = await result.json();
            
            countries.set(data);
        }
    }, 500);

    const handleSearch = async input => {

        if (input.length < 3) return;

        debouncedAPICall(input);
    }

    $: handleSearch(input);

</script>

<div id="country-search" class="flex border-radius-small overflow-hidden">
    <div class="flex justify-center align-center height-full width-3-rem secondary-bg-col">
        <i class="fa-solid fa-magnifying-glass primary-font-col"></i>
    </div>
    <input class="secondary-bg-col primary-font-col" type="search" name="" id="" placeholder="Search for a country..." bind:value={input}>
</div>
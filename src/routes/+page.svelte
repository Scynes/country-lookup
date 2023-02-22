<script>
    import { scale } from 'svelte/transition'
    import { onMount } from 'svelte';

    import { countries } from '@stores/countries';
    import { CountrySearch } from '@components/search';

    export let data;

    let isMounted = false;

    countries.set(data.countries)

    onMount(() => {
        isMounted = true;
    });
</script>

<div id="lookup-container">
    <div class="flex space-between wrap gap-med">
        <CountrySearch />
        <input class="secondary-bg-col" type="text" placeholder="test">
    </div>
    {#if isMounted}
        {#each $countries as country, index}
            <a href="/{country.name.toLowerCase()}">
                <div class="card height-full overflow-hidden" in:scale={{delay: 100 * index}}>
                    <div class="overflow-hidden">
                        <img src={country.flags.svg} alt="">
                    </div>
                    <div class="country-info primary-font-col">
                        <h3>{country.name}</h3>
                        <p>Population: {country.population}</p>
                        <p>Capitol: {country.capital}</p>
                        <p>Region: {country.region}</p>
                    </div>
                </div>
            </a>
        {/each}
    {/if}
</div>
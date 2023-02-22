<script>
    import { scale } from 'svelte/transition'
    import { onMount } from 'svelte';

    export let data;

    let isMounted = false;

    onMount(() => {
        isMounted = true;
    });
</script>

<div id="lookup-container">
    <div class="flex space-between wrap gap-med">
        <div class="flex border-radius-small overflow-hidden">
            <div class="flex justify-center align-center height-full width-3-rem secondary-bg-col">
                <i class="fa-solid fa-magnifying-glass primary-font-col"></i>
            </div>
            <input class="secondary-bg-col primary-font-col" type="search" name="" id="" placeholder="Search for a country...">
        </div>
        <input class="secondary-bg-col" type="text" placeholder="test">
    </div>
    {#if isMounted}
        {#each data.countries as country, index}
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
<script>
    import { BackButton } from "@components/button";

    import { fade } from 'svelte/transition';

    export let data;
    
    /**
     * Reactive shorthand for assigning country.
     */
    $: COUNTRY = data ? data.country : undefined;

    $: BORDERS = data ? data.borders : undefined;

</script>

<div id="country-information" in:fade={{ delay: 100, duration: 400 }}>
    <div>
        <BackButton />
    </div>
    <div class="flag">
        <img src={COUNTRY.flags.svg} alt="">
    </div>
    <div id="data" class="primary-font-col">
        <div class="span-two-cols">
            <h1>{COUNTRY.name}</h1>
        </div>
        <div>
            <p>Native Name: {COUNTRY.nativeName}</p>
            <p>Population: {COUNTRY.population}</p>
            <p>Region: {COUNTRY.region}</p>
            <p>Sub Region: {COUNTRY.subregion}</p>
            <p>Capital: {COUNTRY.capital}</p>
        </div>
        <div>
            <p>Top Level Domain: {COUNTRY.topLevelDomain}</p>
            <p>Primary Currency: {COUNTRY.currencies[0].name} ({COUNTRY.currencies[0].code})</p>
            <p>Languages: {#each COUNTRY.languages as language} {language.name} {/each}</p>
        </div>
        <div class="span-two-cols">
            <h2 class="margin-top-bottom-med">Border Countries:</h2>
            <div class="flex wrap gap-small">
                {#each BORDERS as border}
                <a href="/{border.name}">
                    <div class="label">
                        <img class="label-img" src={border.flag} alt="">
                        <h4>{border.name}</h4>
                    </div>
                </a>
                {/each}
            </div>
        </div>
    </div>
</div>
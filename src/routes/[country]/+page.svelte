<script>
    import { BackButton } from "@components/button";

    export let data;
    
    /**
     * Reactive shorthand for assigning country.
     */
    $: COUNTRY = data ? data.country : undefined;

    $: BORDERS = data ? data.borders : undefined;

</script>

<div id="country-information">
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
        <div class="flex wrap gap-small span-two-cols">
            {#each BORDERS as border}
                <div class="label"><img class="label-img" src={border.flag} alt="">{border.name}</div>
            {/each}
        </div>
    </div>
</div>
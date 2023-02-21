<script>
    export let data;
    
    /**
     * Reactive shorthand for assigning country.
     */
    $: COUNTRY = data ? data.country : undefined;
</script>

<div id="country-information">
    <div>
        <button class="border-radius-small secondary-bg-col primary-font-col"><i class="fa-solid fa-arrow-left-long"></i>Back</button>
    </div>
    <div class="flag">
        <img src={COUNTRY.flags.svg} alt="">
    </div>
    <div class="data">
        <h1>{COUNTRY.name}</h1>
    </div>
</div>
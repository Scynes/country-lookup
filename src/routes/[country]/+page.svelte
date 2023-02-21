<script>
    import { BackButton } from "@components/button";

    export let data;
    
    /**
     * Reactive shorthand for assigning country.
     */
    $: COUNTRY = data ? data.country : undefined;
</script>

<div id="country-information">
    <div>
        <BackButton />
    </div>
    <div class="flag">
        <img src={COUNTRY.flags.svg} alt="">
    </div>
    <div class="data">
        <h1>{COUNTRY.name}</h1>
    </div>
</div>
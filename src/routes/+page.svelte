<script>
    export let data;
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
    {#each data.countries as country }
        <div class="card">
            {country.name}
        </div>
    {/each}
</div>
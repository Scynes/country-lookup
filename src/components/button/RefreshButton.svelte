<script>

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
    <button class="refresh border-radius-small secondary-bg-col primary-font-col">
        <i class="fa-solid fa-arrows-rotate"></i>
    </button>
    <input class="secondary-bg-col primary-font-col text-center" type="number" placeholder="Amount" value="10" max="100">
</div>
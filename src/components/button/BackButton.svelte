<script>
    const goBack = () => {
        window.history.back();
    }
</script>

<button on:click|once={goBack} class="border-radius-small secondary-bg-col primary-font-col"><i class="fa-solid fa-arrow-left-long"></i>Back</button>
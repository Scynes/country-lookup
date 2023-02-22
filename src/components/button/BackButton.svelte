<script>
    const goBack = () => {
        history.go(-1);
    }
</script>

<button on:click|once={goBack} class="border-radius-small secondary-bg-col primary-font-col"><i class="fa-solid fa-arrow-left-long"></i>Back</button>
<script>
    import '@public/style.css'

    import { NavBar } from '@components/navigation'
</script>

<div id="page-container">
    <header>
        <NavBar />
    </header>
    <slot />
</div>
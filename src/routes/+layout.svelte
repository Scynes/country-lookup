<script>
    import '@public/style.css'

    import { NavBar } from '@components/navigation'
</script>

<div id="page-container">
    <header class="secondary-bg-col">
        <NavBar />
    </header>
    <main>
        <slot />
    </main>
</div>
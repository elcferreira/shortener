<template>
  <section class="header">
    <h1 class="header__title">Shortener Link</h1>
    <h3 class="header__subtitle">Enter below the URL to shorten</h3>
    <HeaderForm />
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
import HeaderForm from '~/components/HeaderForm.vue'
export default {
  components: { HeaderForm }
}
</script>

<style lang="sass">
</style>

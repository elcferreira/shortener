<template>
  <section class="header">
    <div class="header__wrapper">
      <h1 class="header__title">Shortener Link</h1>
      <h3 class="header__subtitle">Enter below the URL to shorten</h3>
      <HeaderForm />
    </div>
  </section>
</template>

<script>
import HeaderForm from '~/components/HeaderForm.vue'
export default {
  components: { HeaderForm }
}
</script>

<style lang="sass">
.header
  width: 100%
  background-color: #C6DEA6
  border-radius: 2px
  padding: 40px 20px 60px
  min-height: 30vh
  display: flex
  align-items: center
  justify-content: center
  @media(min-width: 50em)
    padding: 60px 20px 80px

  &__wrapper
    width: 100%
    max-width: 780px

  &__title
    font-weight: 900
    font-size: 26px
    padding-bottom: 0.4em
    @media(min-width: 40em)
      font-size: 33px
    @media(min-width: 60em)
      font-size: 53px

  &__subtitle
    font-size: 16px
    font-weight: 400


</style>

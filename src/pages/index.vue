<template>
  <div class="home" >
    <Header />
    <List />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import List from '~/components/List.vue'

export default {
  components: { Header, List }
}
</script>

<style lang="sass">
.home
  padding: 10px
  width: 100%

  @media(min-width: 35em)
    padding: 20px

  @media(min-width: 45em)
    padding: 30px

  @media(min-width: 58em)
    padding: 40px

  @media(min-width: 72em)
    padding: 60px

  @media(min-width: 80em)
    padding: 80px


</style>

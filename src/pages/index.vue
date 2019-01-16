<template>
  <div class="home" >
    <transition name="header" :duration="1000" appear>
      <Header v-if="!detectHasRoute" />
    </transition>
    <List v-if="!detectHasRoute" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import List from '~/components/List.vue'

export default {
  components: { Header, List },
  data () {
    return {
      detectHasRoute: true
    }
  },
  mounted () {
    this.detectHasRoute = !!this.$route.path.replace(/\//g, '')
  }
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

.header
  $c : &
  &-appear, &-enter
    transform: translateY(40px)
    opacity: 0
    #{$c}__title, #{$c}__subtitle, .header-form
      transform: translateY(40px)
      opacity: 0
    &-active
      transition: .39s cubic-bezier(0.8, 0.04, 0.25, 1)
      #{$c}__title
        transition: .43s cubic-bezier(0.8, 0.04, 0.25, 1)
      #{$c}__subtitle
        transition: .47s cubic-bezier(0.8, 0.04, 0.25, 1)
      .header-form
        transition: .51s cubic-bezier(0.8, 0.04, 0.25, 1)
    &-to
      transform: translateY(0px)
      opacity: 1
      #{$c}__title, #{$c}__subtitle, .header-form
        transform: translateY(0px)
        opacity: 1


</style>

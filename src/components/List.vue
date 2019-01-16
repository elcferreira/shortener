<template>
  <ul class="list">
    <ListItem v-for="(item, index) in linksList.slice().reverse()" :class="{ 'list-item--first': index === 0 }" :item="item" :key="item.shorter" />
  </ul>
</template>

<script>
import ListItem from '~/components/ListItem.vue'
import getCookie from '~/assets/scripts/helpers/getCookie.js'

export default {
  components: { ListItem },
  data () {
    return {
      linksList: []
    }
  },
  methods: {
    async getList(session) {
      await this.$axios.$get(`${process.env.api}/links?orderKey=session&filterValue=${session}&valueType=string`)
        .then(res => {
          if (res.result) {
            const filters = Object.keys(res.result).filter(item => (res.result[item].session === session))
            filters.slice().reverse().map(item => this.linksList.push(res.result[item]))
          }
        })
    },
  },
  created () {
    this.$root.$on('updateList', newList => {
      this.linksList.push(newList)
    })

  },
  mounted () {
    this.getList(getCookie('session-user'))
  }
}
</script>

<style lang="sass">
.list
  width: 100%
  max-width: 500px
  margin: 0 auto
  padding: 30px 20px 0
  @media(min-width: 40em)
    padding: 40px 20px 0 
  @media(min-width: 60em)
    padding: 60px 20px 0 
  @media(min-width: 72em)
    padding: 80px 20px 0 

</style>

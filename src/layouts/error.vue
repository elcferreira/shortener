<template>
  <div class="shorten-page">aguarde</div>
</template>

<script>
export default {
  methods: {
    getShorten() {
      return this.$axios.$get(`${process.env.api}/links/${this.$route.path.replace(/\//g, '')}`)
    },
    updadeView(currentView) {
      const newView = currentView+1
      return this.$axios.$put(`${process.env.api}/links/${this.$route.path.replace(/\//g, '')}/views`, {value: newView})
    }
    
  },
  mounted () {
    const updateView = this.updadeView
    this.getShorten()
      .then(res => {
        const { url, views: { value } } = res.result
        updateView(parseInt(value))
          .then(response => {
             window.location = url
          })
      })
  }
}
</script>

<style lang="sass">
.shorten-page
  color: white
</style>

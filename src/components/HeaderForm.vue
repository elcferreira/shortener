<template>
  <form class="header-form" @submit="onSubmit">
    <input 
      type="text" 
      v-model="inputUrl" 
      placeholder="your URL here"
      class="header-form__input"
      >
    <button tile="Shorten here" class="header-form__button">Shorten here</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      inputUrl: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log('submit', this.$axios)
    }
  }
}
</script>

<style lang="form-shorter">
</style>

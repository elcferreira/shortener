<template>
  <div class="app">
    <nuxt/>
  </div>
</template>

<script>
import setCookie from '~/assets/scripts/helpers/setCookie.js'
import getCookie from '~/assets/scripts/helpers/getCookie.js'
import getRandom from '~/assets/scripts/helpers/getRandom.js'

export default {
  mounted () {
    const sessionUser = getCookie('session-user')
    !sessionUser && setCookie('session-user', getRandom(), 7)
  }
}
</script>

<style>
html {
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

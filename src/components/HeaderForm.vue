<template>
  <div class="header-form">
    <form class="header-form__wrapper" @submit="onSubmit">
      <input 
        type="text" 
        v-model="inputUrl" 
        placeholder="http://your-url.here"
        class="header-form__input"
        @keyup="firstInput=false"
        >
      <button 
        tile="Shorten here" 
        class="header-form__button"
        :disabled="inputError"
        >
          <span class="header-form__button-text">Shorten here</span>
        </button>
      <transition name="header-form__error">
        <span v-if="inputError && !firstInput" class="header-form__error">Unavailable URL</span>
      </transition>
    </form>
  </div>
</template>

<script>
import getRandom from 'assets/scripts/helpers/getRandom'
import isUrl from 'assets/scripts/helpers/isUrl'
import verifyProtocol from 'assets/scripts/helpers/verifyProtocol'
import getTitle from 'assets/scripts/helpers/getTitle'
import getCookie from '~/assets/scripts/helpers/getCookie.js'

export default {
  data () {
    return {
      inputUrl: '',
      firstInput: true
    }
  },
  methods: {
    async saveUrl(data) {
      await this.$axios.$post(`${process.env.api}/links/${data.shorten}`, data)
        .then(res => {
          this.$root.$emit('updateList',data)
        })
    },
    onSubmit (e) {
      e.preventDefault()
      const url = verifyProtocol(this.inputUrl)
      const data = {
        shorten: getRandom(),
        url,
        views: {value: 0},
        session: getCookie('session-user') 
      }
      getTitle(url)
        .then(title => {
          data.title = title
          this.saveUrl(data)
          this.inputUrl = ''
          this.firstInput = true
        })
        .catch(err => {
          data.title = data.shorten
          this.saveUrl(data)
          this.inputUrl = ''
          this.firstInput = true
        })
    }
  },
  computed: {
    inputError () {
      return !isUrl(this.inputUrl) 
    }
  }
}
</script>

<style lang="sass">
$ease : cubic-bezier(0.7, 0.04, 0.25, 1)

.header-form
  padding: 10px 0 0 0

  &__wrapper
    position: relative

    @media(min-width: 29em)
      display: flex
      justify-content: space-between
 
  &__input
    width: 100%
    display: block
    padding: 14px 12px
    font-size: 16px
    border: 0
    font-family: 'Roboto', sans-serif
    appearance: none
    border-radius: 0
    @media(min-width: 29em)
      width: calc(65% - 15px)

  &__button
    width: 100%
    display: block
    border-radius: 4px
    background-color: #49B3BC
    appearance: none
    margin-top: 10px
    border: 0
    letter-spacing: .03em
    color: white
    font-weight: 900
    font-size: 14px
    padding: 14px 12px
    position: relative
    overflow: hidden
    font-family: 'Roboto', sans-serif
    cursor: pointer
    &:before
      content: ''
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background-color: darken(#49B3BC, 10)
      transform-origin: center bottom
      transform: scaleY(0)
      transition: transform .32s $ease
      z-index: 0
    &:hover, &:focus
      &:before
        transform-origin: center top
        transform: scaleY(1)
    &:disabled
      background-color: #acb4b5
      cursor: not-allowed
      &:before
        background-color: #959fa0
    @media(min-width: 29em)
      width: 35%
      margin-top: 0px

    &-text
      position: relative
      z-index: 1

  &__error
    position: absolute
    bottom: -5px
    font-size: 12px
    color: #BC4B51
    font-weight: 900
    transform: translateY(100%)

    &-enter
      transform: translateY(0)
      opacity: 0
      &-active
        transition: .32s $ease
      &-to
        transform: translateY(100%)
        opacity: 1

    &-leave
      transform: translateY(100%)
      opacity: 1
      &-active
        transition: .32s $ease
      &-to
        transform: translateY(0%)
        opacity: 0
    

</style>

<template>
  <transition name="list-item" >
    <li class="list-item">
      <h3 class="list-item__title">{{ item.title }}</h3>
      <div class="list-item__shorten">
        <a :href="shortenLink" title="Your shorten url" class="list-item__shorten-link">{{shortenLink}}</a>
        <button type="button" @click="copyToClipboard($event, shortenLink)" title="Copy link" class="list-item__shorten-button">
          <svg version="1.1" class="list-item__shorten-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 561 561" style="enable-background:new 0 0 561 561;" xml:space="preserve">
            <path d="M395.25,0h-306c-28.05,0-51,22.95-51,51v357h51V51h306V0z M471.75,102h-280.5c-28.05,0-51,22.95-51,51v357
              c0,28.05,22.95,51,51,51h280.5c28.05,0,51-22.95,51-51V153C522.75,124.95,499.8,102,471.75,102z M471.75,510h-280.5V153h280.5V510
              z"/>
          </svg>
        </button>
      </div>
      <a :href="item.url" title="Your complete url" class="list-item__url">{{item.url}}</a>
      <span class="list-item__views">{{item.views.value}} view{{item.views > 1 ? 's' : ''}}</span>
    </li>
  </transition>
</template>

<script>
import copyToClipboard from 'assets/scripts/helpers/copyToClipboard.js'

export default {
  methods: {
    copyToClipboard
  },
  computed: {
    shortenLink () {
      return `${window.location.origin}/${this.item.shorten}`
    }
  },
  props: [ 'item' ],
}
</script>

<style lang="sass">
.list-item
  list-style: none
  margin-bottom: 10px
  border-bottom: 1px solid #f1f1f1
  padding: 17px 10px
  position: relative
  @media(min-width: 50em)
    margin-bottom: 0px
    padding: 30px 20px

  $c : &

  &--first
    background-color: #f1f1f1
    border-radius: 3px

    #{$c}__title
      font-size: 25px

  &__title
    color: #000

  &__shorten
    padding: 10px 0

    &-link
      color: #000
      padding-right: 10px

    &-button
      width: 35px
      height: 35px
      padding: 0
      border-radius: 50%
      border: 1px solid #f1f1f1
      background-color: white
      cursor: pointer
      appearance: none
      &:hover, &:focus
        transform: scale(.9)

    &-icon
      width: 15px
      height: 15px

  &__url
    color: #504c4c
    font-size: 12px
    display: block
    text-decoration: none
    overflow: hidden
    text-overflow: ellipsis
    width: 70%
    white-space: nowrap

  &__views
    position: absolute
    right: 10px
    bottom: 17px
    font-size: 12px
    color: #504c4c 
    @media(min-width: 50em)
      right: 20px
      bottom: 30px

  &-enter
    transform: translateY(30px)
    opacity: 0
    &-active
      transition: .32s cubic-bezier(0.68, 0.04, 0.25, 1)
    &-to
      transform: translateY(0px)
      opacity: 1

</style>

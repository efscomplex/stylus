<template lang="pug">
#app
  Header(title="Stylus Vendor Overrides" class="header").header
  Main
    .collection
      Form.form
      Content
  Footer.footer
    p powered by @efscomplex
</template>
<script>
export default {
    components:{
        Header: ()=> import('@/components/core/Header'),
        Main: ()=> import('@/components/core/Main'),
        Footer: ()=> import('@/components/core/Footer')
    }
}
</script>
<style lang="stylus">
@import 'styles/styles'
*
    margin 0
    padding 0
    box-sizing border-box
#app
    height 100vh
    display grid
    grid-template-rows min-content 1fr min-content
.header
    padding 1.4rem
    text-align center
    background-color #333
    color text
.title
    text-align center
.collection
    display flex
    flex-wrap wrap
    justify-content space-evenly
    align-items:flex-start
    & > *
        margin 1rem
form
  background-color white
  @extend .dark
+btn()
  background-color primary
</style>

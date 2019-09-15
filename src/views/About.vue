<template>
  <div class="about">

    <h1>This is an about page</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  methods:{
    handleScroll: function () {
      if (window.scrollY < -1) {
        this.$router.push({name:'home'})
      }
    }
  }
}
</script>

<style lang="scss">

</style>

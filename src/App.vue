<script>
import NavBar from './components/NavigationBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar/>
  <RouterView />
</template>

<style>
body {
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>

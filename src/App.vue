<template>
<div class="style-body">
  <NavBar/>
  <router-view />
</div>
  
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    

  }
  
}
</script>

<style>
.style-body{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
}


</style>


<template>
<div id="app">
     <router-view></router-view>
</div>
</template>

<script>

export default {
   mounted() {
    
    const { NODE_ENV } = process.env;
    document.documentElement.className = NODE_ENV;
  }
}
</script>

<style>

</style>

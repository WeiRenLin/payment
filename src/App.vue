<template>
     <router-view></router-view>
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

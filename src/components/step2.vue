<template>
  <div class="step2">
    <Header :onFinished="onFinished"></Header>
    <div class="">
      
    </div>
  </div>
</template>

<script>
import Header from './shared/header'
export default {
  components: {
    Header
  },
  data(){
    return{
      onFinished:true,
    }
  },
  methods:{
    
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

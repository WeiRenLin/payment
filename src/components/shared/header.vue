<template>
<div>
<div class="icon">
       <i class="fas fa-shopping-cart"></i> Payment
    </div>
    <div class="step">
      <ul>
        
        <li class="number1" v-if="onFinished == false">確認購物車</li>
        <li class="number1__finished" v-else-if="onFinished == true"><i class="far fa-check-circle"></i>確認購物車</li>
        <i class="fas fa-chevron-right"></i>
        <li class="number2">選擇配送付款方式</li>
        <i class="fas fa-chevron-right"></i>
        <li class="number3">確認訂購</li>
      </ul>
    </div>
    <div class="header">
      <div class="header__space"></div>
      <div class="header__title">
        <h1>訂單明細</h1><h5>(JC293016)</h5>
        </div>
      <div class="header__others">
        
        <div >商品小計 NT${{merchandisePrice}}</div> 
        <div>運費 NT${{shipPrice}}</div> 
        <div> 總金額 <span>NT${{totalPrice}}</span></div>  
      </div>
      
      </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      merchandisePrice:880,
      shipPrice:60,
      totalPrice:940,
    }
  },
  props:['onFinished'],
  mounted(){
    // console.log(this.onFinished)
  }

}
</script>

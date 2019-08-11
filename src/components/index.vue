<template>
  <div class="index">
    <Header></Header>
    <div class="main">
      <div class="main__convenience">
          <div class="unckeck"  @click="check1" v-if="oncheck1 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" v-else-if="oncheck1 === true">
              <i class="fas fa-check-circle"></i>
            </div>
        <i class="fas fa-store"></i>
         <span class="description">
        <h5>超商取貨 付款</h5>
        <h4>24隔日取貨說明</h4>
         </span>
      </div>
      <div class="main__credit">
        <div class="unckeck"  @click="check2" v-if="oncheck2 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" v-else>
              <i class="fas fa-check-circle"></i>
            </div>
            <i class="far fa-credit-card"></i>
        <span class="description">
        <span>信用卡付款</span>
        </span>
      </div>
      <div class="main__linePay">
          <div class="unckeck"  @click="check3" v-if="oncheck3 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" v-else>
              <i class="fas fa-check-circle"></i>
            </div>
          <img src="../../public/static/image/linePay.jpg">
        <span>LINE Pay付款</span>
      </div>
      <div class="main__unionPay">
          <div class="unckeck"  @click="check4" v-if="oncheck4 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" v-else>
              <i class="fas fa-check-circle"></i>
            </div>
          <img src="../../public/static/image/unionPay.png">
        <span>銀聯卡付款</span>
        </div>
      <div class="main__atm">
         <div class="unckeck"  @click="check5" v-if="oncheck5 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" v-else>
              <i class="fas fa-check-circle"></i>
            </div>
          <i class="flaticon-business-and-finance
            Author: prettycons"></i>
        <span>Web ATM付款</span>
      </div>
      <div class="main__space">
      </div>
      <div class="main__precautions">
        <ul>
          <li>請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
          <li>使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
          <li>每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
          <li>若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
          <li>若您對取貨或付款的方式有疑問，請詳閱「購買說明」。</li>
          <li>請確認您已詳閱並瞭解本站「購買說明」內容，訂單完成即表示您已同意其中的各項說明。</li>
        </ul>
      </div>
      <div class="main__step__button">
         <router-link >
        <button class="previous">上一步</button>
         </router-link>
        <router-link >
          <button class="next">下一步</button>
        </router-link>
        
      </div>
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
      oncheck1:false,
      oncheck2:false,
      oncheck3:false,
      oncheck4:false,
      oncheck5:false,

    }
  },
  methods:{
    check1:function(){
      this.oncheck1 = true;
      this.oncheck2 = false;
      this.oncheck3 = false;
      this.oncheck4 = false;
      this.oncheck5 = false;
      
    },
    check2:function(){
      this.oncheck2 = true;
      this.oncheck1 = false;
      this.oncheck3 = false;
      this.oncheck4 = false;
      this.oncheck5 = false;

    },
    check3:function(){
      this.oncheck3 = true;
      this.oncheck1 = false;
      this.oncheck2 = false;
      this.oncheck4 = false;
      this.oncheck5 = false;

    },
    check4:function(){
      this.oncheck4 = true;
      this.oncheck1 = false;
      this.oncheck2 = false;
      this.oncheck3 = false;
      this.oncheck5 = false;

    },
    check5:function(){
      this.oncheck5 = true;
      this.oncheck1 = false;
      this.oncheck2 = false;
      this.oncheck3 = false;
      this.oncheck4 = false;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

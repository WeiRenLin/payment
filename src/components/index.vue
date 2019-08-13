<template>
  <div class="index">
    <Header :onFinished="onFinished"></Header>
    <div class="main">
      <div class="main__convenience" id="main__convenience">
          <div class="unckeck"  @click="check1" v-if="oncheck1 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check"  @click="check1" v-else-if="oncheck1 === true">
              <i class="fas fa-check-circle"></i>
            </div>
        <i class="fas fa-store"></i>
         <span class="description">
        <h5>超商取貨 付款</h5>
        <h4>24隔日取貨說明</h4>
         </span>
      </div>
      <div class="main__credit" id="main__credit">
        <div class="unckeck"  @click="check2" v-if="oncheck2 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" @click="check2" v-else-if ="oncheck2 == true">
              <i class="fas fa-check-circle"></i>
            </div>
            <i class="far fa-credit-card"></i>
        <span class="description">
        <h5>信用卡付款</h5>
        <h4>VISA, Master, JCB, 聯合信用卡</h4>
        </span>
      </div>
      <div class="main__linePay" id="main__linePay">
          <div class="unckeck"  @click="check3" v-if="oncheck3 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" @click="check3" v-else-if ="oncheck3 == true">
              <i class="fas fa-check-circle"></i>
            </div>
          <img src="../../public/static/image/linePay.png">
          <span class="description">
            <h5>LINE Pay付款</h5>
            <h4>使用line point折抵消費</h4>
          </span>
      </div>
      <div class="main__unionPay" id="main__unionPay">
          <div class="unckeck"  @click="check4" v-if="oncheck4 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" @click="check4" v-else-if ="oncheck4 == true">
              <i class="fas fa-check-circle"></i>
            </div>
          <img src="../../public/static/image/unionPay.png">
          <span class="description">
            <h5>銀聯卡付款</h5>
            <h4>支付成功頁面僅為銀聯卡回覆訊息，交易是否完成請需以本商店通知為準</h4>
          </span>
        </div>
      <div class="main__atm" id="main__atm">
         <div class="unckeck"  @click="check5" v-if="oncheck5 === false">
           <i class="far fa-circle"></i>
          </div>
            <div class="check" @click="check5" v-else-if ="oncheck5 == true">
              <i class="fas fa-check-circle"></i>
            </div>
          <i class="flaticon-business-and-finance
            Author: prettycons"></i>
        <span class="description">
         <h5>Web ATM付款</h5> 
        <h4>網路銀行ATM操作說明</h4> 
         </span>
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
        <button class="previous">上一步</button>
        <router-link to="/Step2">
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
      onFinished:false,
    }
  },
  ready(){
    window.addEventListener('beforeunload',this.check1);
  },
  methods:{
    check1:function(){
      var convenience = document.getElementById('main__convenience');
      var vm = this;
      vm.oncheck1 = !vm.oncheck1;
      
      if(vm.oncheck1 == true){
        convenience.style.background = '#f0f2f5';
        vm.oncheck2 = false;
        vm.oncheck3 = false;
        vm.oncheck4 = false;
        vm.oncheck5 = false;
      }
      else{
        convenience.style.background = '#fff';
      }
    },
    check2:function(){
      var credit = document.getElementById('main__credit');
       var vm  = this;
        this.oncheck2 = !this.oncheck2;
      if(vm.oncheck2 == true){
        credit.style.background = '#f0f2f5';
      this.oncheck1 = false;
      this.oncheck3 = false;
      this.oncheck4 = false;
      this.oncheck5 = false;
      }
      else{
        credit.style.background = '#fff';
      }

    },
    check3:function(){
       var linePay = document.getElementById('main__linePay');
      var vm  = this;
      this.oncheck3 = !this.oncheck3;
      
      if(vm.oncheck3 == true){
        linePay.style.background = '#f0f2f5';
        this.oncheck1 = false;
      this.oncheck2 = false;
      this.oncheck4 = false;
      this.oncheck5 = false;
      }
      else{
        linePay.style.background = '#fff';
      }

    },
    check4:function(){
       var unionPay = document.getElementById('main__unionPay');
             var vm  = this;
      this.oncheck4 = !this.oncheck4;
      
      if(vm.oncheck4 == true){
        unionPay.style.background = '#f0f2f5';
        this.oncheck1 = false;
      this.oncheck2 = false;
      this.oncheck3 = false;
      this.oncheck5 = false;
      }
      else{
        unionPay.style.background = '#fff';
      }
    },
    check5:function(){
       var atm = document.getElementById('main__atm');
        var vm  = this;
      this.oncheck5 = !this.oncheck5;
      
      if(vm.oncheck5 == true){
        atm.style.background = '#f0f2f5';
        this.oncheck1 = false;
        this.oncheck2 = false;
        this.oncheck3 = false;
        this.oncheck4 = false;
      }
      else{
        atm.style.background = '#fff';
      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

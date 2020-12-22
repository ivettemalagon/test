<template>
  <div id="app" class="app">

    <div class="header">

      
      <nav>
        <button v-on:click="init" v-if="is_auth" > INICIO </button>
        <button v-on:click="getBalance" v-if="is_auth" > BUSCAR PRODUCTO </button>
        <button v-on:click="doTransaction" v-if="is_auth" > MODIFICAR PRODUCTO </button>
        <button v-on:click="logOut" v-if="is_auth" >SALIR</button>
      </nav>
    </div>
    
    

    <div class="main-component">
      <router-view  v-on:log-in="logIn" ></router-view>
    </div>
    

  

    <div class="footer">
      <h2>     <br/>Ivette Malagon<br/>G1M2<br/></h2>
      
    </div>


  </div>
</template>









<script>


import vueRouter from 'vue-router'

export default {
  name: 'App',

  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      

        
      }    
  },

  components: {
  },

  methods:{
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    logOut: function(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    },

    init: function(){
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
      
    },

    getBalance: function(){
      if(this.$route.name != "user_balance"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_balance", params:{ username: username }})
      }
    },


    doTransaction: function(){
      
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_transaction", params:{ username: username }})
    }
    
  },

  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }
  

}
</script>









<style>
  body{
    margin: 0 0 0 0;
    background-color:#414141;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #93BF47 ;
    color:#414141 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
  .header nav button{
    color: #000000;
    background: #93BF47;
    border: 1px solid #93BF47;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: "Roboto-Bold", Helvetica, Arial, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .header nav button:hover{
    color: #414141;
    background: #E6B06B;
    border: 1px solid #E6B06B;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #414141 ;
  }
  .footer{
    position:absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    background-color: #93BF47;
    color: #000000;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    left:calc(50.6% - 30px);
    position:absolute;
    justify-content: center;
    align-items: center;
    font-family: "Roboto-Regular", Helvetica, Arial, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }

  }

  .footer h2{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>




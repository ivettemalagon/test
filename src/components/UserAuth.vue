<template>

    <div id="AuthUser" class="auth_user">
        
        <div class="container_auth_user">
            <h2>INICIAR SESIÓN</h2>

            <form v-on:submit.prevent="processAuthUser" >
                <input type="text" v-model="user_in.username" placeholder="Username">
                <br>
                <input type="password" v-model="user_in.password" placeholder="Password">
                <br>
                <button type="submit">Iniciar Sesion</button>

            </form>
        </div>

    </div>


</template>




<script>
import axios from 'axios';

export default {
    name: "UserAuth",

    data: function(){
        return {
            user_in: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processAuthUser: function(){
            var self = this
            axios.post("https://infinapp-api.herokuapp.com/user/auth/", self.user_in,  {headers: {}})
                .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
                .catch((error) => {
                    
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");  
                });
        }
    }
}
</script>






<style>

    .auth_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .container_auth_user {
        width: 40%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .auth_user h2{
        font-size: 50px;
        color: #ffffff;
        text-align: center;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;

    }

    .auth_user form{
        width: 50%;
        
    }

    .auth_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
        
    }

    

    .auth_user button{
        width: 100%;
        height: 40px;

        color: #283747;
        background: #E6B06B;
        border: 1px solid #E6B06B;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .auth_user button:hover{
        color: #414141;
        background: #93BF47;
        border: 1px solid #93BF47;
    }

</style>

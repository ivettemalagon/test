<template>
    <div id="Modify" class="modify_product">       
        <div class="container_modify_product">
            <h2>Modificar Producto</h2>
            <form v-on:submit.prevent="processModify">
                <select name="Producto">
                    <option selected value="0"> Productos Disponibles </option>
                    <option value="Pan">Pan</option>
                    <option value="Jabon">Jabon</option>
                    <option value="Margarina">Margarina</option>
                    <option value="Jugo">Jugo</option>
                    <option value="Huevo">Huevo</option>
                    <option value="Agua">Agua</option>
                    <option value="Arroz">Arroz</option>
                </select>
                <input type="text" v-model="nombre_producto" placeholder="Nombre (Obligatorio)"><br>
                <input type="text" v-model="cantidad" placeholder="Cantidad"><br>
                <input type="text" v-model="precio_compra" placeholder="Precio de compra"><br>
                <input type="text" v-model="pvp" placeholder="Precio al publico"><br>
                <input type="text" v-model="fecha_vencimiento" placeholder="Fecha de vencimiento">
                <button type="submit">Modificar</button>
            </form>
        </div>
        <div class="container_data">
            <h2>INFORMACIÓN DEL PRODUCTO</h2>
            <h3>Nombre: {{nombre_producto}}<br/>
                Cantidad: {{cantidad}} <br/>
                Precio de compra: {{precio_compra}} <br/>
                Precio al publico: {{pvp}} <br/>
                Fecha de vencimiento: {{fecha_vencimiento}}
            </h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "UserAuth",

    data: function(){
        return {
            nombre_producto: "",
            cantidad: "",
            precio_compra: "",
            pvp: "",
            fecha_vencimiento: ""
        }
    },

    methods: {
        processModify(){
            var self = this
            let modificar_producto = {
                nombre_producto: this.nombre_producto,
                cantidad: this.cantidad,
                precio_compra: this.precio_compra,
                pvp: this.pvp,
                fecha_vencimiento: this.fecha_vencimiento
            }
            axios.put("https://infinapp-api.herokuapp.com/inventory/product/modify/", modificar_producto)
                .then((result) => {
                     alert("Producto modificado exitosamente");
            })
            .catch((error) => {
                    alert("ERROR 404: Producto no encontrado.");
            });
        }
    },
        
}
</script>

<style>

    .modify_product{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        left:calc(20.6% - 30px);
        position:relative;
        justify-content: left;
        align-items: center;

    }

    .container_modify_product {
        width: 30%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .modify_product h2{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
    }

    .modify_product form{
        width: 80%;
        
    }

    .modify_product input{
        height: 40px;
        width: 100%;
        
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #E5E7E9;
        
    }
    .modify_product select{
        height: 40px;
        width: 100%;
        
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #E5E7E9;
        
    }
    .modify_product button{
        width: 100%;
        height: 40px;

        color: #283747;
        background: #E6B06B;
        border: 1px solid #E6B06B;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;

    }

    .modify_product button:hover{
        color: #414141;
        background: #93BF47;
        border: 1px solid #93BF47;
    }

    .container_data{
        margin: 0;
        padding: 0%;
        height: 50%;
        width: 30%;
    
        display: flex;
        left:calc(20.6% - 30px);
        position:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background: #686868;
        border: 1px solid #686868;
        border-radius: 10px;
    }
    
    .container_data h2{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        justify-content: center;
    }
    .container_data h3{
        color: #E5E7E9;
        font-family: "Roboto-Bold", Helvetica, Arial, serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        justify-content: left;
    }

</style>

<script setup lang="ts">
import ModelGlB from "@/components/ModelGlB.vue"
import Header from "@/layouts/Header.vue"

</script>

<template>

    <Header/>
    <main>
        <section class="containerIndex">
            <div class="IndexInfo">
                <h1>Inmobiliaria</h1>
                <p>Somos una marca líder en el sector inmobiliario con reconocimiento global. Con más de 25 años de experiencia en el mercado inmobiliario de Venezuela, nos hemos consolidado como una de las empresas más prominentes a nivel nacional. Nuestra formación de alta calidad nos distingue, permitiéndonos brindar un servicio excepcional a nuestros clientes y afiliados. Dejamos una huella en el mundo de los servicios inmobiliarios.</p>
                <button>Buscar un hogar</button>
            </div>

            <!--ModelGlB/-->

            <img src="/main.png"/>
        </section>
    </main>
</template>

<style scoped>

.containerIndex{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10vh;
}

.containerIndex img{
  place-items: center;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5));
}

.IndexInfo{
    align-content: center;
    text-align: left;
    margin-left: 100px;
    color: #FFFF;
}

.IndexInfo h1{
    color: rgb(252, 252, 252); 
    font-weight: 600;
    font-size: 30px;
}

.IndexInfo p{
    text-indent: 30px;
    line-height: 28px;
}

.IndexInfo button{
    border: none;
    height: 40px;
    width: 50%;
    border-radius: 20px;
    color: rgb(87, 87, 87); 
    font-weight: 500;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 0px 20px 59px 0px rgba(0,0,0,0.22);
    -webkit-box-shadow: 0px 20px 59px 0px rgba(0,0,0,0.22);
    -moz-box-shadow: 0px 20px 59px 0px rgba(0,0,0,0.22);
}



</style>
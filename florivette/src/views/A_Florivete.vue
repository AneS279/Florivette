<script setup>
</script>
<template>
  <div id ='background_Image'>
  <div id="text">
    A Florivette
    <br />
    <br />
    <p>Criamos Cenografia, Decoração e Ambientação em Eventos.</p>
    <p>Criada em 1996, iniciamos nossa atividade com a criação de Arranjos
    Florais, após um período de estudo na Scuola...(XXX) que com o passar
    dos anos nossos arranjos estavam presentes em diversos eventos na região Sul
    do país.</p>
    <p>Sempre atentas aos eventos nos apaixonamos por Ambientação e então
    Cenografia. Hoje em dia a Florivette está presente em eventos Corporativos
    de todo o Brasil</p>
    </div>
  </div>
</template>
<style>
#background_Image {
    background: url('@/assets/Background 1 - Stage.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;    
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
  
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
  
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
    }
    @media screen and (max-width: 1024px) {
  
      /* Specific to this particular image */
      img.bg {
        left: 50%;
        margin-left: -512px;
        /* 50% */
      }
    }

  #background_Image:after,
  #background_Image:before{
    transition: 0.5s ease-in-out;
  }

  #text{
    background-image: linear-gradient(to bottom, rgba(62, 64, 149, 0), rgba(62, 64, 149, 1));
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Gill Sans,Gill Sans MT,Calibri,sans-serif; 
    color: #fff;
    font-size: 30px;
    padding: 40px;
    bottom: -50px;
    padding-right: 15vw;
  }
</style>

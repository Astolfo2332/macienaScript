<template>
    <div class="home">
      <div class="background-image" :style="{ backgroundImage: 'url(' + fondox + ')' }"></div>
      <div class="content-container">
        <div class="title-container">
          <h1 class="main-title">MaicenaScript</h1>
        </div>
  
        <!-- Nueva sección para la lista -->
        <div class="list-container">
          <ul class="info-list">
            <li><span class="circle">1</span> Estructura de los servicios de salud</li>
            <li><span class="circle">2</span> Modalidad extramural</li>
            <li><span class="circle">3</span> Telemedicina</li>
            <li><span class="circle">4</span> Definiciones</li>
            <li><span class="circle">5</span> Criterios y estandares de habilitacion</li>
            <li><span class="circle">6</span> Infraestructura</li>
            <li><span class="circle">7</span> Prestadores de Servicios de Salud</li>
            <li><span class="circle">8</span> Condiciones de habilitación</li>
          </ul>
        </div>
      </div>
  
      <div class="copyright-container">
        <div class="copyright">
          &copy; 2023 maicenaScript. Todos los derechos reservados.
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        fondox: require('../assets/Post.png'),
      };
    },
  };
  </script>
  
  <style>
  .home {
    text-align: center;
    position: relative;
  }
  
  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
  }
  
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .title-container {
    margin: -5% auto;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .main-title {
    font-size: 3em;
    color: rgb(72, 72, 72);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  }
  
  .list-container {
    text-align: left; 
    position: absolute;
    transform: translateY(70%); 
    left: 5%; 
  }

  .circle {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    border-radius: 50%;
    background-color: #766746; 
    color: rgb(255, 255, 255);
    margin-right: 1em; 
    font-weight: bold; 
    box-shadow: 0.2em 0.2em 0.4em rgba(0, 0, 0, 0.5);
  }

  .info-list li {
    margin-bottom: 0.6em;
    font-size: 1.2em;
    font-weight: bold;
    color: rgb(56, 55, 54);
    display: flex;
    align-items: center; /* Alinea verticalmente el número y el texto */
  }

  
  .copyright-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 75px;
    background-color: #766746;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .copyright {
    color: white;
  }
  </style>
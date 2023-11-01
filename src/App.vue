<template>
  <div id="app">
    <div class="sidebar" :class="{ 'show': showMenu }">
      <nav class="nav-container">
        <router-link class="nav-link" to="/"><i class="fas fa-code"></i>Login</router-link>
        <router-link class="nav-link" to="/cEntity"><i class="fas fa-stethoscope"></i>cEntity</router-link>
        <router-link class="nav-link" to="/eList"><i class="fas fa-list"></i>EntityList</router-link>
        <router-link class="nav-link" to="/cUser"><i class="fas fa-user-plus"></i>cUser</router-link>
        <router-link class="nav-link" to="/lUsers"><i class="fas fa-users"></i>lUser</router-link>
        <router-link class="nav-link" to="/usersxentity"><i class="fas fa-user-friends"></i>usersxentity</router-link>
        <router-link class="nav-link" to="/servicesList"><i class="fas fa-list-alt"></i>lService</router-link>
        <router-link class="nav-link" to="/servicesxEntity"><i class="fas fa-address-book"></i>ServicexEntity</router-link>
        <router-link class="nav-link" to="/cStandard"><i class="fas fa-pager"></i>cStandart</router-link> 
        <router-link class="nav-link" to="/lStandard"><i class="fas fa-list-ol"></i>lStandart</router-link>
        <router-link class="nav-link" to="/StandardxService"><i class="fas fa-handshake"></i>StandardxService</router-link>
        <router-link class="nav-link" to="/cCriteria"><i class="fas fa-clipboard"></i>cCriteria</router-link>
        <router-link class="nav-link" to="/cService"><i class="fas fa-cog"></i>cService</router-link>
        <router-link class="nav-link" to="/lCxs"><i class="fas fa-light fa-address-book"></i>ListCritxserv</router-link>
        <router-link class="nav-link" to="/lCxStan"><i class="fas fa-tasks"></i>ListCritxStan</router-link>
        <router-link class="nav-link" to="/lCxStanxServ"><i class="fas fa-tasks"></i>ListCritxStanxServ</router-link>
      </nav>
    </div>
    <button @click="toggleMenu" class="menu-toggle" :class="{ 'show': showMenu }"><i class="fas fa-bars"></i></button> 
    <div class="center-box">
    <img src="./assets/coco.png" alt="Logo" class="logo" >
    <div class="inner-box">
        <p >Bienvenido </p>
        <p>{{userInfo}}</p>
         <button @click="clearUser"  class="btn btn-danger btn-block mb-4">Salir</button>
    </div>
    </div>
        <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    clearUser(){
        localStorage.removeItem("name");
        localStorage.removeItem("userType");
        localStorage.removeItem("id");
     }
    },
    computed: {
        userInfo(){
            return localStorage.getItem("name");
            }
        }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #503d2c;
  position: relative;
}-
.main-content {
  margin-left: 1%;
}

.logo {
    max-height: 120px;
    max-width: 10 px;
    margin-right: 50 px;
}

.menu-toggle {
  border: none;
  background: none;
  color: rgb(0, 0, 0);
  position: absolute;
  top: 2%;
  left: 2%;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 2;
  transition: left 0.5s;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 14%;
  height: 100%;
  background: linear-gradient(to right, #24a3f7, #ffffff);
  transition: transform 0.5s ease-in-out;
  transform: translateX(-100%);
  z-index: 2; 
}

.sidebar.show {
  transform: translateX(0);
}

.nav-link {
  display: flex;
  text-align: center;
  text-decoration: none;
  color: #282727;
  transition: color;
  display: block;
  margin:2% 0;
}

.nav-link:hover {
  color: #2200ff;
  font-size: 1.1em;
  transition: transform 0.4s;
  transform: translateX(10%); 
}
.nav-link.router-link-active {
  color: #ff1900; 
}
.menu-toggle.show {
  left: 13.4%; 
}
.nav-link i{
  margin-right:5%;
}
.center-box{
display: flex;
justify-content: right;
align-items: center;
    }
.inner-box{
    padding: 20 px;
    text-align: center;
    font-size: 15 px;
}
</style>

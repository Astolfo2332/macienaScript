<template>
  <nav class="nav-container">
    <router-link class="nav-link" to="/">Login</router-link> |
    <router-link class="nav-link" to="/cEntity">cEntity</router-link> |
    <router-link class="nav-link" to="/eList">EntityList</router-link> | 
    <router-link class="nav-link" to="/cUser">cUser</router-link> | 
    <router-link class="nav-link" to="/lUsers">lUser</router-link> | 
  </nav>
  <router-view/>
</template>

<style>
.nav-container {
  background-color: rgba(74, 72, 72, 0.2);
  padding: 5px;
}

.nav-link {
  text-decoration: none; 
  color: #000; 
  transition: color; 
  display: inline; 
}

.nav-link:hover {
  color: #007bff; 
}
</style>

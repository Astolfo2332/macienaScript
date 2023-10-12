<template>
<<<<<<< HEAD
  <nav class="nav-container">
    <router-link class="nav-link" to="/">Login</router-link> |
    <router-link class="nav-link" to="/cEntity">cEntity</router-link> |
    <router-link class="nav-link" to="/eList">EntityList</router-link> | 
    <router-link class="nav-link" to="/cUser">cUser</router-link> | 
    <router-link class="nav-link" to="/lUsers">lUser</router-link> | 
=======
  <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/cEntity">cEntity</router-link> |
    <router-link to="/eList">EntityList</router-link> | 
    <router-link to="/cUser">cUser</router-link> | 
    <router-link to="/lUsers">lUser</router-link> | 
    <router-link to="/usersxentity">UserXEntity</router-link> | 
>>>>>>> 868041ec3563a4192f693e3d53a68ed6ebbfec54
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

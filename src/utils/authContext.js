import Vue from 'vue'

export const authContext = new Vue({
  data(){ return{
    isAuthenticated: false,
    user: null,
  }
}, 
  methods: {
    loginFromServer(response) {
      if (response.valid) {
        this.isAuthenticated = true
        this.user = response.userVO
      } else {
        this.isAuthenticated = false
        this.user = null
      }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    },
  },
})
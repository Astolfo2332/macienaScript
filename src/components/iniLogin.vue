<template>
  
  <!-- Section: Design Block -->
  <section class="text-center text-lg-start">
    <!-- Jumbotron -->
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
            <div class="card-body p-5 text-center">
              <h2 class="fw-bold mb-5">Ingrese sus datos</h2>
              <form>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control" v-model="userName" />
                  <label class="form-label" for="form3Example3">Usuario</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" v-model="passwordUser" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Recuérdame
                  </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryLogin">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img src="../assets/coco.png" class="w-100 rounded-4 shadow-4" alt="" />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</template>

<style scoped>
.cascading-right {
      margin-right: -50px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
  .form-control {
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 136, 136, 0.1); 
  }

  .btn-primary {
    background-color: #007BFF;
    border: none;
    border-radius: 10px;
    transition: background-color 0.3s;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }
  
</style>

<script>
export default{
    methods:{queryLogin(){
        let operation="queryLogin"
        let tna=4
        let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
        let nameUser=this.userName
        let passwordUser=this.passwordUser
        const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
        "&tna="+tna+
        "&nameUser="+nameUser+
        "&passwordUser="+passwordUser+
        "&key="+key

        fetch(url)
        .then(response=>response.json())
        .then(response=>{console.log(response);
        if (response.valid==false){
          alert(response.error)
        }
        
        
        })
        .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
        }
    }
}


</script>
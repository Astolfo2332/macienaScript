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
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Crear usuario</h2>
            <form>
            <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" v-model="nameUser"/>
                    <label class="form-label" for="form3Example1">Nombres</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" v-model="lastnameUser"/>
                    <label class="form-label" for="form3Example2">Apellidos</label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" v-model="passwordUser"/>
                <label class="form-label" for="form3Example4">Contraseña</label>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" v-model="passwordUser2"/>
                <label class="form-label" for="form3Example4">Confirmar Contraseña</label>
              </div>

              <div class="form-outline mb-4">
                <input type="tel" id="form3Example4" class="form-control" v-model="phoneUser" />
                <label class="form-label" for="form3Example4">Teléfono</label>
              </div>

              

              <div class="form-outline mb-4">
                <input type="tel" id="form3Example4" class="form-control" v-model="documentUser"/>
                <label class="form-label" for="form3Example4">Documento de Identidad</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="positionUser"/>
                <label class="form-label" for="form3Example4">Posición de usuario</label>
              </div>

              <div class="form-outline mb-4">
                <input type="number" id="form3Example4" class="form-control" v-model="userType"/>
                <label class="form-label" for="form3Example4">Tipo de usuario</label>
              </div>

              <div class="form-outline mb-4">
                <input type="number" id="form3Example4" class="form-control" v-model="userEntityId"/>
                <label class="form-label" for="form3Example4">ID de entidad</label>
              </div>


              <button type="submit" class="btn btn-primary btn-block mb-4" @click="SaveUser">
                Crear
              </button>
              <button type="reset" class="btn btn-danger btn-block mb-4">
                Limpiar
              </button>

        
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="../assets/coco.png" class="w-100 rounded-4 shadow-4"
          alt="" />
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
</style>

<script>
export default{
methods:{SaveUser(){

    if (this.passwordUser == this.passwordUser2){
      let operation="SaveUser"
      let tna=4
      let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      let name=this.nameUser+","+this.lastnameUser
      let phone=this.phoneUser
      let password=this.passwordUser
      let document=this.documentUser
      let position=this.positionUser
      let userType=this.userType
      let userEntityId=this.userEntityId
      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&nameUser="+name+
      "&phoneUser="+phone+
      "&passwordUser="+password+
      "&documentUser="+document+
      "&positionUser="+position+
      "&userType="+userType+
      "&userEntityId="+userEntityId

      fetch(url)
      .then(response=>response.json())
      .then(response=>{console.log(response);
      if (response.valid==true){
        alert("Usuario creado exitosamente con el id: "+response.userVO.id)
      }
      })
      .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
    }
    else {
      alert("La contraseña debe ser confirmada con la misma contraseña.")
    }
  }

    
}
}



</script>

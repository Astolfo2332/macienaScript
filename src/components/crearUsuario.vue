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
                    <input type="text" id="form3Example1" class="form-control" v-model="nameUser" required/>
                    <label class="form-label" for="form3Example1">Nombres</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" v-model="lastnameUser" required/>
                    <label class="form-label" for="form3Example2">Apellidos</label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" v-model="passwordUser" required/>
                <label class="form-label" for="form3Example4">Contraseña</label>
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" v-model="passwordUser2" required/>
                <label class="form-label" for="form3Example4">Confirmar Contraseña</label>
                <p v-if="passwordUser=!passwordUser2" style="color:red">Contraseñas no coinciden</p>
              </div>

              <div class="form-outline mb-4">
                <input type="tel" id="form3Example4" class="form-control" v-model="phoneUser" required/>
                <label class="form-label" for="form3Example4">Teléfono</label>
              </div>

              

              <div class="form-outline mb-4">
                <input type="tel" id="form3Example4" class="form-control" v-model="documentUser" required/>
                <label class="form-label" for="form3Example4">Documento de Identidad</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="positionUser" required/>
                <label class="form-label" for="form3Example4">Posición de usuario</label>
              </div>

           <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="userType" required>
                  <option v-for="posicion in posiciones" :key="posicion.id" :value="posicion.id"> {{ posicion.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Tipo de usuario</label>
              </div>

              <div class="form-outline mb-4" v-if="permissions < 3">
                <select class='form-select'  id="form3Example4" v-model="userEntityId" required>
                  <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">ID de entidad</label>
              </div>
              <div class="form-outline mb-4" v-else>
                <input type="text" id="itext" v-model="userEntityId" readonly><br>
                <label class="form-label" for="itext">ID de Entidad</label>
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

  .card {
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .form-control {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(75, 75, 75, 0.1); 
  }

  @media (min-width: 992px) {
    .cascading-right {
      margin-right: 50px;
    }
  }
</style>
<script>
export default{
  data(){
        return {
            entidades:[],
            permissions: 0,
            userEntityId : 0,
            posiciones:[{id:1,name:"Super admin"},{id:2,name:"Admin"},{id:3,name:"Admin entidad"},{id:4,name:"Usuario"},]
        }
    },
    created:function(){
        this.queryEntityByTenancy()
        this.condition()
    },
methods:{
  condition() {
            const localStorageValue = localStorage.getItem('userType');
            this.permissionss = localStorageValue;
            this.userEntityId = localStorage.getItem("entityId")
        },
  queryEntityByTenancy(){
            let operation="queryEntityByTenancy"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.entidades=[]
                if(datosRespuesta.valid==true){
                    this.entidades=datosRespuesta.arrayEntity;
                }

            })
            .catch(console.log)
        },
      SaveUser(){

    if (this.passwordUser == this.passwordUser2){
      let operation="SaveUser"
      let tna=4
      let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      let name= encodeURIComponent(this.nameUser+","+this.lastnameUser)
      const nickname=encodeURIComponent(this.nameUser.split(" ")[0]+this.lastnameUser.split(" ")[0]+Math.floor(1000 + Math.random() * 9000))
      let phone=encodeURIComponent(this.phoneUser)
      let password= encodeURIComponent(this.passwordUser)
      let document= encodeURIComponent(this.documentUser)
      let position= encodeURIComponent(this.positionUser)
      let userType= encodeURIComponent(this.userType)
      let userEntityId= encodeURIComponent(this.userEntityId)
      
      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&nameUser="+name+
      "&phoneUser="+phone+
      "&passwordUser="+password+
      "&documentUser="+document+
      "&positionUser="+position+
      "&userType="+userType+
      "&userEntityId="+userEntityId+
      "&nickname="+nickname
      console.log(url)
      fetch(url)
      .then(response=>response.json())
      .then(response=>{console.log(response);
      if (response.userVO){
        console.log(response)
        alert("Usuario creado exitosamente con el id: "+response.userVO.id+" y usuario: "+response.userVO.nickname)
        window.location="/#/lUsers"
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

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
                        <input type="text" id="form3Example1" class="form-control" v-model="usuario.firstName" required/>
                        <label class="form-label" for="form3Example1">Nombres</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example2" class="form-control" v-model="usuario.lastName" required/>
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
                </div>
    
                  <div class="form-outline mb-4">
                    <input type="tel" id="form3Example4" class="form-control" v-model="usuario.phone" required/>
                    <label class="form-label" for="form3Example4">Teléfono</label>
                  </div>
    
                  
    
                  <div class="form-outline mb-4">
                    <input type="tel" id="form3Example4" class="form-control" v-model="usuario.document" required/>
                    <label class="form-label" for="form3Example4">Documento de Identidad</label>
                  </div>
    
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example4" class="form-control" v-model="usuario.position" required/>
                    <label class="form-label" for="form3Example4">Posición de usuario</label>
                  </div>
    
                  <div class="form-outline mb-4">
                    <input type="number" id="form3Example4" class="form-control" v-model="usuario.userType" required/>
                    <label class="form-label" for="form3Example4">Tipo de usuario</label>
                  </div>
    
                  <div class="form-outline mb-4">
                    <select class='form-select'  id="form3Example4" v-model="usuario.entityID" required>
                      <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                    </select>
                    <label class="form-label" for="form3Example4">ID de entidad</label>
                  </div>
    
    
                  <button type="submit" class="btn btn-primary btn-block mb-4" @click="UpdateUser(usuario.nickname)">
                    Modificar
                  </button>
                  <router-link :to="{name:'lUsers'}" class="btn btn-warning btn-block mb-4">Cancelar</router-link>
    
            
                </form>
              </div>
            </div>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="../assets/coco.png" class="w-100 rounded-4 shadow-4"
              alt="coco" />
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
  data(){
    return{
      usuario:{},
      entidades:[]
    }},
    created:function(){
        this.queryEntityByTenancy()
        this.queryUserById()
    },
    methods:{
      queryUserById(){
            let operation="queryUserById"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const id=this.$route.params.id
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&userId="+id
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.usuarios=[]
                if(datosRespuesta.arrayUser){
                    const usuario=datosRespuesta.arrayUser[0];             
                    const parts=usuario.name.split(",")
                    usuario.firstName=parts[0]
                    usuario.lastName=parts[1]
                    this.usuario=usuario
                }

            })
            .catch(console.log)
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
        UpdateUser(nickname){
            if (this.passwordUser == this.passwordUser2){
            let operation="UpdateUser"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            let name=encodeURIComponent(this.usuario.firstName+","+this.usuario.lastName)
            let phone=encodeURIComponent( this.usuario.phone)
            let password=encodeURIComponent( this.passwordUser)
            let document=encodeURIComponent( this.usuario.document)
            let position=encodeURIComponent( this.usuario.position)
            let userType=encodeURIComponent( this.usuario.userType)
            let userEntityId=encodeURIComponent( this.usuario.entityID)
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&nameUser="+name+
            "&phoneUser="+phone+
            "&userId="+this.$route.params.id+
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
            if (response.validVO){
            alert("Usuario modificado exitosamente con el id: "+response.userVO.id)
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
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
            <h2 class="fw-bold mb-5">Crear criterio</h2>
            <form>
            <div class="form-outline mb-4" v-if="permissionss<3">
                <select class='form-select'  id="form3Example4" v-model="userEntityId" required>
                    <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">ID de entidad</label>
            </div>
            <button v-if="permissionss<3" type="submit" class="btn btn-primary btn-block mb-4" @click="queryServiceByEntity">
                Seleccionar Entidad
              </button>
            </form>
            <form>
            <div class="form-outline mb-4" v-if="permissionss<=3">
                <select class='form-select'  id="form3Example4" v-model="idService" required>
                    <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id"> {{ servicio.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Servicio</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryStandardByService(idService)">
                Seleccionar servicio
              </button>
            </form>
            <form>
            
              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="description" required/>
                <label class="form-label" for="form3Example4">Descripción</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="response" required/>
                <label class="form-label" for="form3Example4">Respuesta del criterio</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="observation" required/>
                <label class="form-label" for="form3Example4">Observación del criterio</label>
              </div>

              <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="ids" required>
                  <option v-for="estandar in estandares" :key="estandar.id" :value='{"datos":[estandar.id, estandar.serviceID]}'> {{ estandar.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Estandar</label>
              </div>


              <button type="submit" class="btn btn-primary btn-block mb-4" @click="SaveCriteria">
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
           estandares:[],
           servicios:[],
           userEntityId:0,
           permissionss:9999
        }
    },
    created:function(){
        this.queryEntityByTenancy()
        this.condition()
        this.queryServiceByEntity()
    },
methods:{
  condition() {
            const localStorageValue = localStorage.getItem('userType');
            this.permissionss = localStorageValue;
            const localtorageEntity=localStorage.getItem('entityID');
            console.log(localtorageEntity)
            this.userEntityId = localtorageEntity;
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
        queryStandardByService(idService){
            let operation="queryStandardByService"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&serviceIdStandard="+idService
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.estandares=[]
                if(datosRespuesta.valid==true){
                    this.estandares=datosRespuesta.arrayStandard;
                }

            })
            .catch(console.log)
        },
        queryServiceByEntity(){
            let operation="queryServiceByEntity"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&entityIdService="+this.userEntityId
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.servicios=[]
                if(datosRespuesta.valid==true){
                    this.servicios=datosRespuesta.arrayService;
                }

            })
            .catch(console.log)
        },
        SaveCriteria(){

      let operation="SaveCriteria"
      let tna=4
      let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      let description=encodeURIComponent(this.description)
      let response=encodeURIComponent(this.response)
      let observation=encodeURIComponent(this.observation)
      let standardId=encodeURIComponent(this.ids.datos[0])
      let serviceId=encodeURIComponent(this.ids.datos[1])

      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&descriptionCriteria="+description+
      "&answerCriteria="+response+
      "&observationCriteria="+observation+
      "&standardIdCriteria="+standardId+
      "&serviceIdCriteria="+serviceId

      fetch(url)
      .then(response=>response.json())
      .then(response=>{console.log(response);
      if (response.valid==true){
        alert("Criterio creado exitosamente con el id: "+response.criteriaVO.id)
      }
      })
      .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
    }
  }
}




</script>
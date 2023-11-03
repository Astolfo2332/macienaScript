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
                <h2 class="fw-bold mb-5">Editar Servicio</h2>
                <form v-on:submit.prevent="UpdateService">
                  
                  <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="criterio.description" required/>
                <label class="form-label" for="form3Example4">Descripción</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="criterio.response" required/>
                <label class="form-label" for="form3Example4">Respuesta del criterio</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="criterio.observation" required/>
                <label class="form-label" for="form3Example4">Observación del criterio</label>
              </div>

              <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="ids" required>
                  <option v-for="estandar in estandares" :key="estandar.id" :value='{"datos":[estandar.id, estandar.serviceID]}'> {{ estandar.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Estandar</label>
              </div>

                  <div>
                  <button type="submit" class="btn btn-primary btn-block mb-4" >
                    Modificar
                  </button> 
    
                  <router-link :to="{name:'servicesList'}" class="btn btn-warning btn-block mb-4">Cancelar</router-link>
                  </div>
            
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
      data(){
        return{
          criterio:{}
        }
        
      },
      created:function(){
        this.queryStandardById()
        this.queryServiceByTenancy()
      },
    methods:{
      queryServiceByTenancy(){
                let operation="queryServiceByTenancy"
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
                        this.entidades=datosRespuesta.arrayService;
                    }
    
                })
                .catch(console.log)
            },
      queryStandardById(){
                let operation="queryStandardByTenancy"
                let tna=4
                let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
                const id=this.$route.params.id
                const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
                "&tna="+tna+
                "&key="+key+
                "&id="+id
                fetch(url)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta)
                    if(datosRespuesta.arrayService){
                        this.entidad=datosRespuesta.arrayService;
                    }
                })
                .catch(console.log)
            },
        UpdateCriteria(){
      
        let operation="UpdateCriteria"
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
        "&serviceIdCriteria="+serviceId+
        "&idCriteria="+this.$route.params.id
        console.log(url)
        fetch(url)
        .then(response=>response.json())
        .then(response=>{console.log(response);
        if (response.valid==true){
          alert("Entidad modificada exitosamente con el id: "+response.serviceVO.id)
          window.location="/#/lCxs"
        }
        })
        .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
        
      }
    }
    }
    
    
    
    </script>
    

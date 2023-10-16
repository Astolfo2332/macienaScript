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
                <h2 class="fw-bold mb-5">Crear servicio</h2>
                <form>
                
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example4" class="form-control" v-model="name" required/>
                    <label class="form-label" for="form3Example4">Nombre del servicio:</label>
                  </div>
    
                  <div class="form-outline mb-4">
                    <input type="text" id="form3Example4" class="form-control" v-model="description" required/>
                    <label class="form-label" for="form3Example4">Descripción servicio</label>
                  </div>
    
                  <div class="form-outline mb-4">
                    <select class='form-select'  id="form3Example4" v-model="entityIdService" required>
                      <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                    </select>
                    <label class="form-label" for="form3Example4">Entidad</label>
                  </div>
    
    
                  <button type="submit" class="btn btn-primary btn-block mb-4" @click="SaveService">
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
               entidades:[]
            }
        },
        created:function(){
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
            SaveService(){
    
          let operation="SaveService"
          let tna=4
          let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
          let name=encodeURIComponent(this.name)
          let description=encodeURIComponent(this.description)
          let entityIdService=encodeURIComponent(this.entityIdService)
    
          const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
          "&tna="+tna+
          "&key="+key+
          "&nameService="+name+
          "&descriptionService="+description+
          "&entityIdService="+entityIdService
    
          fetch(url)
          .then(response=>response.json())
          .then(response=>{console.log(response);
          if (response.valid==true){
            alert("Servicio creado exitosamente con el id: "+response.serviceVO.id)
          }
          })
          .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
        }
      }
    }
    
    
    
    
    </script>
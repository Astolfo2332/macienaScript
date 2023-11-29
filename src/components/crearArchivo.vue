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
            <h2 class="fw-bold mb-5">Archivos</h2>
            <form>
              <input type="text" id="form3Example4" class="form-control" v-model="nameFile" required/>
                <label class="form-label" for="form3Example4">Nombre del Archivo</label>
              <input type="text" id="form3Example4" class="form-control" v-model="descriptionFile" required/>
                <label class="form-label" for="form3Example4">Descripción del Archivo</label>
              <input type="text" id="form3Example4" class="form-control" v-model="urlFile" required/>
                <label class="form-label" for="form3Example4">URL del Archivo</label><br>
              <button type="submit" class="btn btn-primary btn-lg btn-block" @click="crearArchivo">
              Crear Archivo
              </button>
            </form>

          </div>
        </div>
      </div>
      <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre del Archivo</th>
                            <th>Descripción del archivo</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="file in archivos" :key="file.id">
                            <td scope="row">{{file.name}}</td>
                            <td>{{file.description}}</td>
                            <td>{{file.link}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <button type="button" v-on:click="deleteFile(file.id)" class="btn btn-danger">Borrar</button>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
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
          archivos:[],
        }
    },
    created:function(){
      this.buscarArchivos()
    },
methods:{
  condition() {
            const localStorageValue = localStorage.getItem('userType');
            this.permissionss = localStorageValue;
            const localtorageEntity=localStorage.getItem('entityID');
            console.log(localtorageEntity)
            this.userEntityId = localtorageEntity;
        },
  crearArchivo(){
    let operation="SaveFile"
      let tna=4
      let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      let name=encodeURIComponent(this.nameFile)
      let description=encodeURIComponent(this.descriptionFile)
      let urlF=encodeURIComponent(this.urlFile)

      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&nameFile="+name+
      "&descriptionFile="+description+
      "&urlFile="+urlF+
      "&fileIdCriteria="+this.$route.params.id

      fetch(url)
      .then(response=>response.json())
      .then(response=>{console.log(response);
      if (response.valid==true){
        alert("Archivo creado exitosamente con el id: "+response.FileVO.id)
      }
      })
      .catch((error=>{console.error("Error:",error)}))
      this.buscarArchivos()
    },
  buscarArchivos(){
      let operation="queryFileByCriteria"
      let tna=4
      let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      console.log(this.$route.params.id)
      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&fileIdCriteria="+this.$route.params.id
      console.log(url)
      fetch(url)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
          console.log(datosRespuesta)
          this.archivos=[]
          if(datosRespuesta.valid==true){
            this.archivos=datosRespuesta.arrayFiles;
          }
        }
      )
    },
    deleteFile(id){
     let operation="DeleteFile"
     let tna=4
     let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
      const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
      "&tna="+tna+
      "&key="+key+
      "&idFile="+id
      fetch(url)
      .then(respuesta=>respuesta.json())
      .then((datosRespuesta)=>{
        alert(datosRespuesta.message)
      })
      .catch(console.log)
      this.buscarArchivos()
    }
  }
}
</script>
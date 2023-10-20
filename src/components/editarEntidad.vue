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
            <h2 class="fw-bold mb-5">Editar entidad</h2>
            <form v-on:submit.prevent="UpdateEntity">
              
              <div class="form-outline mb-4">
                <input type="text" id="form3Example3" class="form-control" v-model="entidad.name" required/>
                <label class="form-label" for="form3Example3">Nombre</label>
              </div>


              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="entidad.phone" required/>
                <label class="form-label" for="form3Example4">Teléfono</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="entidad.adress" required/>
                <label class="form-label" for="form3Example4">Dirección</label>
              </div>

            
              <div>
              <button type="submit" class="btn btn-primary btn-block mb-4" >
                Modificar
              </button> 

              <router-link :to="{name:'EntityList'}" class="btn btn-warning btn-block mb-4">Cancelar</router-link>
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
      entidad:{}
    }
    
  },
  created:function(){
    this.queryEntityByTenancy()
  },
methods:{
  queryEntityByTenancy(){
            let operation="queryEntityById"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const id=this.$route.params.id
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&idEntity="+id
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                if(datosRespuesta.arrayEntity){
                    this.entidad=datosRespuesta.arrayEntity[0];
                }
            })
            .catch(console.log)
        },
    UpdateEntity(){
    let operation="UpdateEntity"
    let tna=4
    let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
    let name=encodeURIComponent(this.entidad.name)
    let phone=encodeURIComponent(this.entidad.phone)
    let adress=encodeURIComponent(this.entidad.adress)
    const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
    "&tna="+tna+
    "&key="+key+
    "&nameEntity="+name+
    "&phoneEntity="+phone+
    "&adressEntity="+adress+
    "&idEntity="+this.$route.params.id
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(response=>{console.log(response);
    if (response.valid==true){
      alert("Entidad modificada exitosamente con el id: "+response.entityVO.id)
      window.location="/#/eList"
    }
    })
    .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
    
  }
}
}



</script>

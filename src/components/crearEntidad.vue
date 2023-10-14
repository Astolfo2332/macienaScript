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
            <h2 class="fw-bold mb-5">Crear entidad</h2>
            <form>
              

              <div class="form-outline mb-4">
                <input type="text" id="form3Example3" class="form-control" v-model="name" required/>
                <label class="form-label" for="form3Example3">Nombre</label>
              </div>


              <div class="form-outline mb-4">
                <input type="tel" id="form3Example4" class="form-control" v-model="phone" required/>
                <label class="form-label" for="form3Example4">Teléfono</label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form3Example4" class="form-control" v-model="adress" required/>
                <label class="form-label" for="form3Example4">Dirección</label>
              </div>

            

              <button type="submit" class="btn btn-primary btn-block mb-4" @click="SaveEntity">
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
  margin-right: -5px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
.card {
  border-radius: 15px; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
}

.form-outline input {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
}

.btn-primary, .btn-danger {
  border-radius: 3px; 
}

</style>
<script>
export default{
methods:{SaveEntity(){
    let operation="SaveEntity"
    let tna=4
    let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
    let name=encodeURIComponent(this.name)
    let phone=encodeURIComponent(this.phone)
    let adress=encodeURIComponent(this.adress)
    const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
    "&tna="+tna+
    "&key="+key+
    "&nameEntity="+name+
    "&phoneEntity="+phone+
    "&adressEntity="+adress

    fetch(url)
    .then(response=>response.json())
    .then(response=>{console.log(response);
    if (response.entityVO){
      alert("Entidad creada exitosamente con el id: "+response.entityVO.id)
    }
    })
    .catch((error=>{console.error("Error:",error);alert("Paso algo no sé que fue")}))
    }
}
}



</script>

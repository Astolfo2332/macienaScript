<template>
    <div class="container">
        <div class="p-5 bg-image" style="
        background-image: url('https://tinyurl.com/5du55a95');
        height: 300px;
        "></div>
  <!-- Background image -->

  <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
        <div class="card">
            <div class="card-header">
                Lista de estandares
            </div>
            <form>
            <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="idService" required>
                    <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id"> {{ servicio.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Servicio</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryStandardByService(idService)">
                Buscar
              </button>
            </form>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="estandar in estandares" :key="estandar.id">
                            <td scope="row">{{estandar.id}}</td>
                            <td>{{estandar.name}}</td>
                            <td>{{ estandar.description }}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'editStandard', params:{id:estandar.id}}" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="DeleteStandard(estandar.id)" class="btn btn-danger">Borrar</button>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            </div>
            <div class="card-footer text-muted">
                Copyright: maicenaScript 2023
            </div>
        </div>
    </div>
        

    </div>
</template>
<style>

.card {
  border-radius: 10px;
  margin: 10px;
}

.card-header {
  background-color: #436991;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.btn-info {
  background-color: #17a2b8;
  color: #fff;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}
</style>
<script>
export default {
    data(){
        return {
            estandares:[],
            servicios:[]
        }
    },
    created:function(){
        this.queryStandardByService()
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
                this.servicios=[]
                if(datosRespuesta.valid==true){
                    this.servicios=datosRespuesta.arrayService;
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
        DeleteStandard(id){
            let operation="DeleteStandard"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&idStandard="+id
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                alert(datosRespuesta.message)
                window.location="/"
            })
            .catch(console.log)
        }

    }
}
</script>
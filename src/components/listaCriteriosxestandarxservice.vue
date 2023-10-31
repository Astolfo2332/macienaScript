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
                Lista de criterios por estandar por servicio
            </div>
            
            <form>
            <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="serviceIdCriteria" required>
                    <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id"> {{ servicio.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Servicio</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryStandardByService(serviceIdCriteria)">
                Buscar estandares
              </button>
        </form>
        <form>
            <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="estandarIdCriteria" required>
                    <option v-for="estandar in estandares" :key="estandar.id" :value="estandar.id"> {{ estandar.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">Estandar</label>
                <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryCriteriaByStand(estandarIdCriteria)">
                    Buscar criterios
              </button>
            </div>
            </form>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descripción</th>
                            <th>Respuesta del criterio</th>
                            <th>Observación del criterio</th>
                            <th>Entidad</th>
                            <th>Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="criterio in criterios" :key="criterio.id">
                            <td scope="row">{{criterio.id}}</td>
                            <td>{{criterio.description}}</td>
                            <td>{{criterio.answer}}</td>
                            <td>{{criterio.observation}}</td>
                            <td>{{criterio.entityName}}</td>
                            <td>{{criterio.servicedName}}</td>
                            
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <input class="form-check-input" type="checkbox">
                                    <router-link :to="{name:'eCriteria', params:{id:criterio.id}}" class="btn btn-info">Editar</router-link> 
                                    <button type="button" v-on:click="DeleteCriteria(criterio.id)" class="btn btn-danger">Borrar</button>
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

<script>
export default {
    data(){
        return {
            criterios:[],
            estandares:[],
            servicios:[]
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
        queryCriteriaByStand(idStandard){
            let operation="queryCriteriaByStandard"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            console.log(operation)
            console.log(tna)
            console.log(key)
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+"&tna="+tna+"&key="+key+"&standardIdCriteria="+idStandard
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                this.criterios=[]
                if(datosRespuesta.valid==true){
                    this.criterios=datosRespuesta.arrayCriteria;
                }

            })
            .catch(console.log)
        },
        DeleteCriteria(id){
            let operation="DeleteCriteria"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&idCriteria="+id
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                alert(datosRespuesta.message)
                window.location="/#/lUsers"
            })
            .catch(console.log)
        }

    }
}
</script>
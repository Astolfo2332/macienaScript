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
            
            <div class="row">
            <div class="col-md-6">
                <div class="form-outline mb-4">
                    <select class="form-select" id="form3Example4" v-model="servicelist" required>
                    <option v-for="servicio in servicios" :key="servicio.id" :value="servicio.id">{{ servicio.name }}</option>
                    </select>
                    <label class="form-label" for="form3Example4">Servicio</label>
                </div>
            </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Estandar</th>
                            <th>Descripción</th>
                            <th>Respuesta del criterio</th>
                            <th>Observación del criterio</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="criterio in criterios" :key="criterio.id">
                            <td scope="row">{{criterio[0].id}}</td>
                            <td>{{criterio[2]}}</td>
                            <td>{{criterio[0].description}}</td>
                            <td>{{criterio[0].answer}}</td>
                            <td>{{criterio[0].observation}}</td>
                            <td>
                                <select class="form-select" id="form3Example10" v-model="state">
                                    <option>C</option>
                                    <option>NC</option>
                                    <option>NA</option>
                                </select>
                            </td>   
                            <td>
                                <div class="btn-group" role="group" aria-label="">
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
            servicios:[],
            servicelist:99999,
        }
    },
    created:function(){
        this.queryServiceByEntity()
    },
    watch: {
        servicelist: function (nuebo) {
            this.queryStandardByService(nuebo);
        },
    },
    methods:{
        queryServiceByEntity(){
            let operation="queryServiceByEntity"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const ide=this.$route.params.id
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&entityIdService="+ide
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
        queryCriteriaByStand(){
            let operation="queryCriteriaByStandard"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            console.log(this.estandares.length)
            for (let i=0;i<this.estandares.length;i++){
                console.log(this.estandares)
                console.log("LLAMEN A LA POLICIA")
                const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+"&tna="+tna+"&key="+key+"&standardIdCriteria="+this.estandares[i].id
                fetch(url)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    
                    if(datosRespuesta.valid==true){
                        for (let j=0;j<datosRespuesta.arrayCriteria.length;j++){
                            datosRespuesta.arrayCriteria.sort(function(a,b){
                                return a.id - b.id;
                            })
                            this.criterios.push([datosRespuesta.arrayCriteria[j], this.estandares[i].id, this.estandares[i].name]);
                        }
                        console.log(this.criterios)
                        this.criterios.sort(function(a, b) {
                        return a[1] - b[1];
                        });
                    }
                })
                .catch(console.log)
            }
        },
        queryStandardByService(service){
            let operation="queryStandardByService"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&serviceIdStandard="+service
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.estandares=[]
                if(datosRespuesta.valid==true){
                    this.estandares=datosRespuesta.arrayStandard;
                }
                this.criterios = []
                this.queryCriteriaByStand()
                
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
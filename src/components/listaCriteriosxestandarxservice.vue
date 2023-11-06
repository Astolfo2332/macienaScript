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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="criterio in criterios" :key="criterio.id">
                            <td scope="row">{{criterio[0].id}}</td>
                            <td>{{criterio[2]}}</td>
                            <td>{{criterio[0].description}}</td>
                            <td>
                                <select class="form-select" id="form3Example4" v-model="criterio[0].answer" @change="updateObservation(criterio[0].id,criterio[0].description,criterio[0].answer,criterio[0].standardID,criterio[0].serviceID, criterio[0].observation)">
                                    <option value="C" :selected="criterio[0].answer === 'C'">Cumple</option>
                                    <option value="NC" :selected="criterio[0].answer === 'NC'">No Cumple</option>
                                    <option value="NA" :selected="criterio[0].answer === 'NA'">No Aplica</option>
                                </select>
                            </td>
                            <td><input class="form-control" placeholder="Observacion" type="text" v-model="criterio[0].observation" @blur="updateObservation(criterio[0].id,criterio[0].description,criterio[0].answer,criterio[0].standardID,criterio[0].serviceID, criterio[0].observation)"></td>
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
            for (let i=0;i<this.estandares.length;i++){
                const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+"&tna="+tna+"&key="+key+"&standardIdCriteria="+this.estandares[i].id
                fetch(url)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta.arrayCriteria)
                    if(datosRespuesta.valid==true){
                        for (let j=0;j<datosRespuesta.arrayCriteria.length;j++){
                            datosRespuesta.arrayCriteria.sort(function(a,b){
                                return a.id - b.id;
                            })
                            this.criterios.push([datosRespuesta.arrayCriteria[j], this.estandares[i].id, this.estandares[i].name]);
                        }
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
        },
        updateObservation(id, description, answer, standardId, serviceId, observation){
            let operation="UpdateCriteria"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"            


            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&descriptionCriteria="+encodeURIComponent(description)+
            "&answerCriteria="+encodeURIComponent(answer)+
            "&observationCriteria="+encodeURIComponent(observation)+
            "&standardIdCriteria="+encodeURIComponent(standardId)+
            "&serviceIdCriteria="+encodeURIComponent(serviceId)+
            "&idCriteria="+id
            console.log(url)
            fetch(url)
            .then(response=>response.json())
            .then(response=>{console.log(response);
            })
            
        }

    }
}
</script>
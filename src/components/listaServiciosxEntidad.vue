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
                Lista de servicios
            </div>
            <form>
            <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="idEntity" required>
                    <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">ID de entidad</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryServiceByEntity(idEntity)">
                Buscar
              </button>
            </form>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción del Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="servicio in servicios" :key="servicio.id">
                            <td scope="row">{{servicio.id}}</td>
                            <td>{{servicio.name}}</td>
                            <td>{{servicio.description}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <!-- <router-link :to="{name:'editServices', params:{id:servicio.id}}" class="btn btn-info">Editar</router-link> -->
                                    <button type="button" v-on:click="DeleteService(servicio.id)" class="btn btn-danger">Borrar</button>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
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
            servicios:[],
            entidades:[]
        }
    },
    created:function(){
        this.queryServiceByEntity()
        this.queryEntityByTenancy()
    },
    methods:{
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
        queryServiceByEntity(idEntity){
            console.log(idEntity)
            let operation="queryServiceByEntity"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&entityIdService="+idEntity
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
        DeleteService(id){
            let operation="DeleteService"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&idService="+id
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                alert(datosRespuesta.message)
                window.location.href="/"
            })
            .catch(console.log)
        }

    }
}
</script>
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
                Lista de entidades
            </div>
            <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entidad in entidades" :key="entidad.id">
                            <td scope="row">{{entidad.id}}</td>
                            <td>{{entidad.name}}</td>
                            <td>{{ entidad.phone }}</td>
                            <td>{{entidad.adress}}</td>
                            <td></td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'eEntity', params:{id:entidad.id}}" class="btn btn-info">Editar</router-link> 
                                    <button type="button" v-on:click="DeleteEntity(entidad.id)" class="btn btn-danger">Borrar</button>
                                    <router-link :to="{name:'listCritxStandardxStan', params:{id:entidad.id}}" class="btn btn-info">Criterios</router-link> 
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
            entidades:[]
        }
    },
    created:function(){
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
        DeleteEntity(id){
            let operation="DeleteEntity"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&idEntity="+id
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
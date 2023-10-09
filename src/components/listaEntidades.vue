<template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                Titulo
            </div>
            <div class="card-body">
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
                            <td>{{ entidad.adress}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'eEntity', params:{id:entidad.id}}" class="btn btn-info">Editar</router-link> 
                                    <button type="button" v-on:click="borrarPaciente(entidad.id)" class="btn btn-danger">Borrar</button>
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
</template>

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
        borrarPaciente(id){
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
                window.location.href="EntityList"
            })
            .catch(console.log)
        }

    }
}
</script>
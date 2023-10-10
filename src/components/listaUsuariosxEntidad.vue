<template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                Titulo
            </div>
            <form>
            <div class="form-outline mb-4">
                <select class='form-select'  id="form3Example4" v-model="userEntityId" required>
                    <option v-for="entidad in entidades" :key="entidad.id" :value="entidad.id"> {{ entidad.name }} </option>
                </select>
                <label class="form-label" for="form3Example4">ID de entidad</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4" @click="queryUserByTenancy(userEntityId)">
                Buscar
              </button>
        </form>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Documento</th>
                            <th>Posición</th>
                            <th>Tipo de usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td scope="row">{{usuario.id}}</td>
                            <td>{{usuario.name}}</td>
                            <td>{{usuario.phone}}</td>
                            <td>{{usuario.document}}</td>
                            <td>{{usuario.position}}</td>
                            <td>{{usuario.userType}}</td>
                            
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                     <router-link :to="{name:'editUsers', params:{id:usuario.id}}" class="btn btn-info">Editar</router-link> 
                                    <button type="button" v-on:click="DeleteUser(usuario.id)" class="btn btn-danger">Borrar</button>
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
            usuarios:[],
            entidades:[]
        }
    },
    created:function(){
        this.queryEntityByTenancy()
        this.queryUserByTenancy()
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
        queryUserByTenancy(UserEntidad){
            let operation="queryUserByTenancy"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            let userEntityId=this.userEntityId
            let datosRespuesta2 = {}

            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&userEntityId="+userEntityId
            fetch(url)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                this.usuarios=[]
                for (let k = 0; k<datosRespuesta['arrayUser'].length ;k++){
                    if (datosRespuesta['arrayUser'][k]['entityID'] == UserEntidad){
                        datosRespuesta2[k]=datosRespuesta['arrayUser'][k]
                    }
                }
                datosRespuesta['arrayUser']=datosRespuesta2
                if(datosRespuesta.valid==true){
                    this.usuarios=datosRespuesta.arrayUser;
                }

            })
            .catch(console.log)
        },
        DeleteUser(id){
            let operation="DeleteUser"
            let tna=4
            let key="5c887ca4-bb45-4a92-ac2b-93602162dff9"
            const url="https://redb.qsystems.co/QS3100/QServlet?operation="+operation+
            "&tna="+tna+
            "&key="+key+
            "&userId="+id
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
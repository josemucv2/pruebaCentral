<template>
   <div class="box-estadisticas">
       <div class="box-interal-metodos">
            <p class="text-estadisticas text-estadisticas-mobile">Metodos de pago</p>
            <button class="add-account add-account-mobile" @click="goTransacciones">Portafolio</button>
        </div>


        <div class="container container-mobile">
        <section class="form">
            
            <form action="" class="text-center">

                <input 
                v-model="$store.state.nombre" 
                type="text"  
                placeholder="Nombre"
                class="form-control form-control-mobile"
                />

                <input 
                v-model="$store.state.accountNumber" 
                type="number" 
                name="accountNumber" 
                placeholder="Numero de Cuenta"
                class="form-control form-control-mobile"
                />
                <input 
                v-model="$store.state.numberIdentific" 
                type="number" 
                name="numberIdentific" 
                placeholder="Cedula"
                class="form-control form-control-mobile"
                />

                <input @click="$store.dispatch('crearCuenta')" type="button" value="Añadir" class="btn-success add-account-mobile"/>
                
                <p class="Error">{{ $store.state.textError }}</p>
            </form>
            
        </section>

        <section class="data data-mobile">
            <p class="text-center">Cuentas bancarias asociadas</p>
            <table class="table table-mobile">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre del banco</th>
                        <th scope="col">Numero De Cuenta</th>
                        <th scope="col">Cedula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cuentaBancaria, index) in $store.state.cuentaBancaria" :key="index">
                        <td class="text-center">{{ cuentaBancaria.id }}</td>
                        <td>
                            <span v-if="$store.state.formActualizar && $store.state.idActualizar == index">
                                <input v-model="$store.state.nombreActualizar" type="text" class="form-control-editar">
                            </span>
                            <span v-else class="text-center">
                                {{ cuentaBancaria.nombre }}
                            </span>
                        </td>

                        <td>
                            <span v-if="$store.state.formActualizar && $store.state.idActualizar == index">
                                <input v-model="$store.state.accountNumberActualizar" type="text" class="form-control-editar">
                            </span>
                            <span v-else class="text-center">
                                {{ cuentaBancaria.accountNumber  }}
                            </span>
                        </td>
                        <td>
                            <span v-if="$store.state.formActualizar && $store.state.idActualizar == index">
                                <input v-model="$store.state.numberIdentificActualizar" type="text" class="form-control-editar">
                            </span>
                            <span v-else class="text-center">
                                {{ cuentaBancaria.numberIdentific }}
                            </span>
                        </td>

                        <td class="btns-mobile">
                            <span v-if="$store.state.formActualizar && $store.state.idActualizar == index">
                                <button @click="$store.dispatch('saveActualizacion',index)" class="btn-success-editar">Guardar</button>
                            </span>
                            <span v-else class="flex-bottom ">
                                <button @click="$store.dispatch('vistaForm',index)" class="btn-warning btn btn-warning-mobile">Actualizar</button>
                                <button @click="$store.dispatch('deleteCuenta',index)" class="btn-danger">Borrar</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
   </div>
   
</template>

<script>


export default {

    
    name:'AddCuentas',
    props: {
        
        goTransacciones: {
            type: Function,
            required: true
        }
    },

    
    


    
}


</script>

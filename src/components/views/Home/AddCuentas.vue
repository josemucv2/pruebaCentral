<template>
   <div class="box-estadisticas">
       <div class="box-interal-estadisticas">
            <p class="text-estadisticas">Agregar Cuentas</p>
            <button class="add-account" @click="goEstadisticas()">Regresar</button>
        </div>
   </div>
</template>

<script>

export default {
    name:'AddCuentas',
    props: {
        cuenta: {
            type: Boolean,
            default: false
        },
        transacciones: {
            type: Boolean,
            default: true
        }
    
    },

    methods: {
        goEstadisticas(){
            this.props.cuenta = false
            this.props.transacciones = true
        }
    }

    
}


</script>
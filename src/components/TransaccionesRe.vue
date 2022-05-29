<template>

<div class="box-transacciones"> 
    <div class="order-title-trans">
        <p class="title-trans">Transacciones Recientes</p>
        <a href="#" class="viewAll">Ver Todo</a>
    </div>

    <div class="box-montos">
        <div class="iconsAndTrans">
            <i class="IconTrans">
                <IconRecarga/>
            </i>
            <div>
                <p class="namePago">Recarga</p>
                <p class="transsaccionID">8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8</p>
            </div>
        </div>

        <div>
            <p class="montoTrans">$ 20.00</p>
            <p class="dateTrans">20-02 5:06pm</p>
        </div>
    </div>

    <div class="box-montos">
        <div class="iconsAndTrans">
            <i class="IconTrans">
                <IconRetiro/>
            </i>
            <div>
                <p class="namePago">Retiro</p>
                <p class="transsaccionID">8ade22fd-f6b6-41df-a0ae-432a6a5b3bc8</p>
            </div>
        </div>

        <div>
            <p class="montoTrans">$ 100.00</p>
            <p class="dateTrans">20-02 5:06pm</p>
        </div>
    </div>
</div>


</template>

<script>

import IconRecarga from "../components/Icons/IconRecargar.vue"
import IconRetiro from "../components/Icons/IconRetiro.vue"


export default {
    name: 'TransaccionesRe',
    components: {
        
        IconRecarga,
        IconRetiro,
       
    }
}


</script>


<style scoped>



</style>
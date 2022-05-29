<template>
  <div class="homeProfile">
    <div class="boxRight">
      <div class="data-balance">
        
        <div class="box-balance">
            <p class="text-balance">Balance Total</p>

            <div class="direction-number"><p class="number-balance">φ 1,102.84 =</p><p class="dolar-equivalencia">$230.00</p></div>
          </div>
         

         <ul class="style-list-procesos">
           <li class="list-item-procesos">
             <div class="IconProcesos">
               <IconPagar/>
             </div>
             <p class="text-procesos">Pagar</p>
           </li>

           <li class="list-item-procesos">
             <div class="IconProcesos">
               <IconConvertir/>
             </div>
             <p class="text-procesos">Convertir</p>
           </li>

           <li class="list-item-procesos">
             <div class="IconProcesos">
               <IconRetiro/>
             </div>
             <p class="text-procesos">Retirar</p>
           </li>

           <li class="list-item-procesos">
             <div class="IconProcesos">
               <IconRecarga/>
             </div>
             <p class="text-procesos">Recargar</p>
           </li>
          </ul>
        </div>
        
        <div class="box-estadisticas" v-if="transacciones">
          
            <div class="box-interal-estadisticas">
              <p class="text-estadisticas">Estadisticas</p>
              <button class="add-account" @click="goAddCuentas()">Agregar Cuenta -></button>
            </div>
            
          <div class="box-activos">
              
            <p class="text-estadisticas">Activos</p>
              <div>
                <p class="title-green">Monedas Nacionales</p>
                <div class="order-activos">
                  
                  <div class="order-icon-pais">
                    <img src="../../../assets/image/Banderas/USA.png" alt="USA" class="style-banderas">
                    <div class="style-text-moneda">USA Dollar</div>
                  </div>

                  <div>
                    <p class="monto-green">$ 983.00</p>
                  </div>
                
                </div>
              </div>
              
              <div>
                <p class="title-green">Criptomonedas</p>
                
                <div class="order-activos">
                  
                  <div class="order-icon-pais">
                    <img src="../../../assets/image/Banderas/Thether.png" alt="USA" class="style-banderas">
                    <div class="style-text-moneda">Theter</div>
                  </div>

                  <div class="positions-valor">
                    <div class="monto-green">20 USDT</div>
                  </div>

                </div>
              </div>
            </div>
        </div>

       <AddCuentas v-else 
       :cuenta="this.cuenta"
       :transacciones="this.transacciones"
       />

    </div>
      <!-- Inicio de Mensaje Y Transacciones -->
      <div class="boxLeft ">
        <div class="box-mensajes ">
          <h3 class="text-mensajes">Bienvenido Jose</h3>
          <p class="text-sub-mensajes">Completa tu verificacion de perfil para<br>disfrutar de totas las funciones de Central+</p>
          <button class="button-verify">Verificar Perfil</button>
        </div>
        <TransaccionesRe/>
       </div>
      
  </div>
</template>

<script>

import IconConvertir from '../../Icons/IconConvertir.vue'
import IconRetiro from '../../Icons/IconRetiro.vue'
import IconRecarga from '../../Icons/IconRecargar.vue'
import TransaccionesRe from '../../TransaccionesRe.vue'
import IconPagar from '../../Icons/IconPagar.vue'
import AddCuentas from './AddCuentas.vue'

export default {
  name: 'HomeUser',
  components: {
    IconConvertir,
    IconRetiro,
    IconRecarga,
    TransaccionesRe,
    IconPagar,
    AddCuentas,
  },

  data()  {
    return {
         transacciones: true,
         cuenta: false
    }
  },

  methods: {
     goAddCuentas(){
       this.cuenta = true
       this.transacciones = false
     }
  }
  
}


</script>


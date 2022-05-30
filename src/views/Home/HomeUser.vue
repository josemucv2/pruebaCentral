<template>

    <div class="homeProfile homeProfile-mobile">
      <div class="boxRight boxRight-mobile">
        <div class="data-balance data-balance-mobile">
          
          <div class="box-balance box-balance-mobile ">
            <p class="text-balance">Balance Total</p>
            <div class="direction-number direction-number-mobile"><p class="number-balance">φ 1,102.84 =</p><p class="dolar-equivalencia">$230.00</p></div>
          </div>
          
          
          <ul class="style-list-procesos style-list-procesos-mobile">
            
            <li class="list-item-procesos list-item-procesos-mobile">
              <div class="IconProcesos"><IconPagar/></div>
              <p class="text-procesos">Pagar</p>
            </li>
            
            <li class="list-item-procesos list-item-procesos-mobile">
              <div class="IconProcesos"><IconConvertir/></div>
              <p class="text-procesos">Convertir</p>
            </li>
            
            <li class="list-item-procesos list-item-procesos-mobile">
              <div class="IconProcesos"><IconRetiro/></div>
              <p class="text-procesos">Retirar</p>
            </li>
            
            <li class="list-item-procesos list-item-procesos-mobile">
              <div class="IconProcesos"><IconRecarga/></div>
              <p class="text-procesos">Recargar</p>
            </li>
          
          </ul>
        
        </div>
        
        <div class="box-estadisticas box-estadisticas-mobile" v-if="transacciones">
        
        <div class="box-interal-estadisticas box-interal-estadisticas-mobile">
          <p class="text-estadisticas text-estadisticas-mobile">Estadisticas</p>
          <button class="add-account add-account-mobile" @click="goAddCuentas()">Metodos de pago</button>
        </div>
        
        <div class="box-activos">
          <p class="text-estadisticas text-estadisticas-mobile">Activos</p>
          
          <div>
            <p class="title-green">Monedas Nacionales</p>
            
            <div class="order-activos text-estadisticas-mobile">
              
              <div class="order-icon-pais ">
                <img src="../../assets/image/Banderas/USA.png" alt="USA" class="style-banderas">
                <div class="style-text-moneda">USA Dollar</div>
              </div>
              
              <div>
                <p class="monto-green">$ 983.00</p>
              </div>
            </div>
          </div>
          
          <div>
            <p class="title-green">Criptomonedas</p>
            <div class="order-activos text-estadisticas-mobile">
              
              <div class="order-icon-pais">
                <img src="../../assets/image/Banderas/Thether.png" alt="USA" class="style-banderas">
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
       :goTransacciones="goTransacciones"
       />
       
       </div>
      <!-- Inicio de Mensaje Y Transacciones -->
      <div class="boxLeft boxLeft-mobile" >
        <div class="box-mensajes box-mensajes-mobile">
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
import TransaccionesRe from '../../components/TransaccionesRe.vue'
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
         cuenta: false,

    }
  },

  methods: {
     goAddCuentas(){
       this.cuenta = true
       this.transacciones = false
     },

     goTransacciones(){
       this.cuenta = false
       this.transacciones = true
     }
  }
  
}


</script>


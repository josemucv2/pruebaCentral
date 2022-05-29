<template>
<nav class="style-nav">
    <div>
        <Logo/>
    </div>
    
    
    <ul class="style-list-nav">
        
        <li class="style-list-item">
            <router-link to="/" class="style-link-nav" >
                <img src="../assets/image/IconNavBar/home.png" 
                alt="icon home" 
                class="icons-style">
                
                <span class="text-list-nav" >Home</span>
            
            </router-link>
        </li>

            <li class="style-list-item">
                <router-link to='/Notifications' class="style-link-nav">
                    <img src="../assets/image/IconNavBar/Notificaciones.png" alt="icon notificaciones" class="icons-style">
                    <span class="text-list-nav">Notificaciones</span>
                </router-link>
            </li>

            <li class="style-list-item">
                <router-link to="Wallet" class="style-link-nav">
                    <img src="../assets/image/IconNavBar/Wallets.png" alt="icon wallet" class="icons-style">
                    <span class="text-list-nav">Wallet</span>
                </router-link>
            </li>
            
            <li class="style-list-item">
                <router-link to="/Inversiones" class="style-link-nav">
                    <img src="../assets/image/IconNavBar/inversion.png" alt="icon Inversiones" class="icons-style">
                    <span class="text-list-nav">Inversion</span>
                </router-link>
            </li>

            <li class="style-list-item">
                <router-link to="/FAQ" class="style-link-nav">
                <img src="../assets/image/IconNavBar/FQA.png" alt="icon FAQ" class="icons-style">
                    <span class="text-list-nav">FAQ</span>
                </router-link>
            </li>
        </ul>

        <div class="end-profile">
            <a href="#" class="style-link-nav logout">
                <span class="text-log">Cerrar Sesión</span>
            </a>

            <div class="name-email">
                <img src="../assets/image/IconNavBar/profile.jpg" class="PhotoProfile">
                <div class="order-datos">
                    <span class="name">Jose Martinez</span>
                    <span class="emails emails-mobile ">martinezcaceresjose@gmail.com</span>
                </div>
            </div>
        </div>

  


</nav>
</template>


<script>

import Logo from './CentralLogo.vue'

export default {
  name: 'NavBar',
  components: {
    Logo,
    
  },

 

  
}

</script>
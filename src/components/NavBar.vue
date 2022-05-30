<template> 
        <nav class="style-nav style-list-nav-mobile">
            <div>
                <Logo/>
            </div>
            
            <ul class="style-list-nav">
                
                <li class="style-list-item">
                    <router-link to="/" class="style-link-nav">
                        <img src="../assets/image/IconNavBar/home.png" alt="icon home" class="icons-style">
                        <span class="text-list-nav text-list-nav-mobile">Home</span>
                    </router-link>
                </li>
                
                <li class="style-list-item">
                    <router-link to='/Notifications' class="style-link-nav">
                        <img src="../assets/image/IconNavBar/Notificaciones.png" alt="icon notificaciones" class="icons-style">
                        <span class="text-list-nav text-list-nav-mobile">Notificaciones</span>
                    </router-link>
                </li>
                
                <li class="style-list-item">
                    <router-link to="Wallet" class="style-link-nav">
                        <img src="../assets/image/IconNavBar/Wallets.png" alt="icon wallet" class="icons-style">
                        <span class="text-list-nav text-list-nav-mobile">Wallet</span>
                    </router-link>
                </li>
                
                <li class="style-list-item">
                    <router-link to="/Inversiones" class="style-link-nav">
                        <img src="../assets/image/IconNavBar/inversion.png" alt="icon Inversiones" class="icons-style">
                        <span class="text-list-nav text-list-nav-mobile">Inversion</span>
                    </router-link>
                </li>
                
                <li class="style-list-item">
                    <router-link to="/FAQ" class="style-link-nav">
                        <img src="../assets/image/IconNavBar/FQA.png" alt="icon FAQ" class="icons-style">
                        <span class="text-list-nav text-list-nav-mobile">FAQ</span>
                    </router-link>
                </li>
            
            </ul>
            
            <a href="#" class="style-link-nav logout logout-mobile">
                <span class="text-log text-log-mobile">Cerrar Sesión</span>
            </a>
            
            <div class="name-email name-email-mobile">
                <img src="../assets/image/IconNavBar/profile.jpg" class="PhotoProfile">
                <div class="order-datos">
                    <span class="name name-mobile">Jose Martinez</span>
                    <span class="emails emails-mobile ">martinezcaceresjose@gmail.com</span>
                </div>
            </div>
        </nav>
</template>


<script>

import Logo from '../Icons/CentralLogo.vue'

export default {
  name: 'NavBar',
  components: {
    Logo,
},

}

</script>
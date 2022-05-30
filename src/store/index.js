import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nombre: '',
        accountNumber: '',
        numberIdentific: '',
        formActualizar: false,
        idActualizar: -1,
        nombreActualizar: '',
        accountNumberActualizar: '',
        numberIdentificActualizar: '',
        cuentaBancaria: [] ,
        textError: '',
        
    },
    getters:{
    
    },
    mutations: {
        crearCuenta:(state) => {
            if (state.nombre == '' || state.accountNumber == '' || state.numberIdentific == '') {
                state.textError = 'Todos los campos son obligatorios'
                return
            } else {
                 state.cuentaBancaria.push({
                    id: + new Date(),
                    nombre: state.nombre,
                    accountNumber: state.accountNumber,
                    numberIdentific: state.numberIdentific
                });
                state.nombre = '';
                state.accountNumber = '';
                state.numberIdentific = '';
                state.textError = 'Cuenta agregada con Exito';
            }
        },
        verFormActualizar: (state,cuentas_id)=> {
                state.idActualizar = cuentas_id;
                state.nombreActualizar = state.cuentaBancaria[cuentas_id].nombre;
                state.accountNumberActualizar = state.cuentaBancaria[cuentas_id].accountNumber;
                state.numberIdentificActualizar = state.cuentaBancaria[cuentas_id].numberIdentific;
                state.formActualizar = true;
            },
            borrarCuenta: (state,cuentas_id) => {
                // Borramos de la lista
                state.cuentaBancaria.splice(cuentas_id, 1);
                state.textError = ""
            },
            guardarActualizacion:  (state,cuentas_id) =>{
                // Ocultamos nuestro formulario de actualizar
                state.formActualizar = false;
                // Actualizamos los datos
                state.cuentaBancaria[cuentas_id].nombre = state.nombreActualizar;
                state.cuentaBancaria[cuentas_id].accountNumber = state.accountNumberActualizar;
                state.cuentaBancaria[cuentas_id].numberIdentific = state.numberIdentificActualizar;
            }

    },
    actions: {
        crearCuenta: (contex) => {
            contex.commit('crearCuenta');
        },

        vistaForm: (contex, cuentas_id) => {
            contex.commit('verFormActualizar',cuentas_id);
        },
        deleteCuenta: (contex, cuentas_id) => {
            contex.commit('borrarCuenta', cuentas_id);
        },
        saveActualizacion: (contex, cuentas_id) => {
            contex.commit('guardarActualizacion', cuentas_id);
        
        }



    },
    modules: {

    }
})
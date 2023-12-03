import {mostrarAlerta,validar} from './funciones.js';
import { obtenerClienteId,actualizaCliente } from "./API.js";

(function(){
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const telefonoInput = document.querySelector('#telefono');
const empresaInput = document.querySelector('#empresa');
const IdInput = document.querySelector('#id');
document.addEventListener('DOMContentLoaded', async ()=>{
    const parametrosUrl= new URLSearchParams(window.location.search);
    const idCliente = parseInt(parametrosUrl.get('id'));
    const cliente= await obtenerClienteId(idCliente);

    mostrarCliente(cliente);
    //submit al formulario
    const formulario= document.querySelector('#formulario');
    formulario.addEventListener('submit',validarInfo);

});

function mostrarCliente(cliente){

    const {nombre,empresa,email,telefono,id}=cliente;
    nombreInput.value= nombre;
    emailInput.value= email;
    telefonoInput.value= telefono;
    empresaInput.value= empresa;
    IdInput.value= id;



}

function validarInfo(e){
    e.preventDefault();
    

const cliente={
    nombre:nombreInput.value,
    email:emailInput.value,
    telefono:telefonoInput.value,
    empresa:empresaInput.value,
    id:parseInt(IdInput.value),
}

if(validar(cliente)){
    mostrarAlerta('Todos los campos son obligatorios');
    return;
}

//reescribe el objeto
actualizaCliente(cliente);
}

})();
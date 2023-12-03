const url = 'http://localhost:4001/clientes';
//crear un nuevo cliente 

export const nuevoCliente= async cliente=>{
console.log(cliente);

try {
    
    await fetch(url,{
        method:'POST',//METODO HTTP QUE SE NECESITA
        body:JSON.stringify(cliente),// LO QUE SE ENVIA EN LA PETICION
        headers:{//SON LA INFO DE QUE TIPO DE DATOS ENVIAMOS
            'Content-Type':'application/json'
        }
    });

    window.location.href='index.html';

} catch (error) {
    console.log(error);
}
}


//obtener los clientes 
export const obtenerClientes= async()=>{
try {
    const resultado= await fetch(url);
    const  clientes= await resultado.json();
    return clientes;

} catch (error) {
    console.log(error);
}
}

//Eliminar un cliente de la API
export const eliminarCliente= async id=>{

try {
     await fetch(`${url}/${id}`,{
        method:'DELETE'
     })
} catch (error) {
    console.log(error);
}

}
//Obtener cliente por id
 export const obtenerClienteId= async id=>{

    try {
       const resultado=  await fetch(`${url}/${id}`);
       const cliente = await resultado.json();
       return cliente;
    } catch (error) {
        console.log(error)
    }
 }
 //actualiza un registro 
 export const actualizaCliente=async cliente=>{

    try {
        await fetch(`${url}/${cliente.id}`,{
            method:'PUT',
            body:JSON.stringify(cliente),
            headers:{
                'Content-Type':'application/json'
            }
         });
         window.location.href='index.html';
    } catch (error) {
        console.log(error);
    }
 }
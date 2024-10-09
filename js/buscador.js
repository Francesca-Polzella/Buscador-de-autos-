//crear los selectores 
const marca=document.querySelector('#marca')
const year=document.querySelector('#year')
const minimo=document.querySelector('#minimo')
const maximo=document.querySelector('#maximo')
const puertas=document.querySelector('#puertas')
const transmision=document.querySelector('#transmision')
const color=document.querySelector('#color')


//generador de años
const years = document.createElement('option')
const max = new Date().getFullYear();
const min= max-10;

for(let i =max; i > min; i --){
    //console.log(i)
    const option = document.createElement('option')
    option.value= i 
    option.innerText= i
    document.querySelector('#year').appendChild(option)
}

// guardar objetos / datos de busquedad 

const datosBusquedad = {
    marca: '',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}

//crear los eventos

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos)
    //este es solo para ver los autos 
})
 
marca.addEventListener('input',e =>{
    datosBusquedad.marca = e.target.value
    //console.log(datosBusquedad.marca)
    filtrarAuto()
})


year.addEventListener('input',e =>{
    datosBusquedad.year = Number(e.target.value)
    //console.log(datosBusquedad.year)
    filtrarAuto()
})

minimo.addEventListener('input',e =>{
    datosBusquedad.minimo = Number(e.target.value)
   // console.log(datosBusquedad.minimo)
    filtrarAuto()
})


maximo.addEventListener('input',e =>{
    datosBusquedad.maximo = Number(e.target.value)
    //console.log(datosBusquedad.maximo)
    filtrarAuto()
})
    

puertas.addEventListener('input',e =>{
    datosBusquedad.puertas = Number(e.target.value)
    //console.log(datosBusquedad.puertas)
    filtrarAuto()
})
    


transmision.addEventListener('input',e =>{
    datosBusquedad.transmision = e.target.value
    //console.log(datosBusquedad.transmision)
    filtrarAuto()
})


color.addEventListener('input',e =>{
    datosBusquedad.color = e.target.value
    //console.log(datosBusquedad.color)
    filtrarAuto()
})


function mostrarAutos (autos){
    limpiarHTML()
    const contenedor= document.querySelector('#resultado')
    //armar el HTML PARA QUE SE VEAN LOS AUTOS 
    autos.forEach(autos => {
        const autosHTML =document.createElement('p')
        autosHTML.innerHTML=
        `<p> ${autos.marca}-${autos.modelo}- ${autos.year}-Puertas:${autos.puertas} - Transmision: ${autos.transmision} -Precio:${autos.precio}- Color:${autos.color}</p>`
        contenedor.appendChild(autosHTML)
    });
}

// limpiar el html
function limpiarHTML(){
  const contenedor =document.querySelector('#resultado') 
  
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild)
  }
}
// para creara la filtracion

function filtrarAuto(){
    const resultado =autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado)
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta','error')
    noResultado.appendChild(document.createTextNode('No hay resultados para su busqueda'))
    document.querySelector('#resultado').appendChild(noResultado)

}

function filtrarMarca(auto){
    if(datosBusquedad.marca){
        return auto.marca === datosBusquedad.marca
    }
    return auto
}



function filtrarYear(auto){
    if(datosBusquedad.year){
        return auto.year === datosBusquedad.year
    }
    return auto
}

function filtrarMinimo(auto){
    if(datosBusquedad.minimo){
        return auto.precio >= datosBusquedad.minimo
    }
    return auto
}
//
function filtrarMaximo(auto){
    if(datosBusquedad.maximo){
        return auto.precio <= datosBusquedad.maximo

    }
    return auto
}




function filtrarPuertas(auto){
    if(datosBusquedad.puertas){
        return auto.puertas === datosBusquedad.puertas
    }
    return auto
}

function filtrarTransmision(auto){
    if(datosBusquedad.transmision){
        return auto.transmision === datosBusquedad.transmision
    }
    return auto
}

function filtrarColor(auto){
    if(datosBusquedad.color){
        return auto.color === datosBusquedad.color
    }
    return auto
}
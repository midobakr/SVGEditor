
function setHeight(){
    let userHeight = document.querySelector('#input').value
    document.querySelector('#svg').setAttribute("viewBox",`0 0 1370 ${userHeight}`)
    document.querySelector('#svgHeight').innerHTML =userHeight
}


function reset(){
    document.querySelector('#svg').setAttribute("viewBox",`0 0 1370 1170 `)
    document.querySelector('#svgHeight').innerHTML ='1170'
    document.querySelector('#input').value = 1170
}
//función de calcular gas natural

document.getElementById('btn-gasnatural').onclick = function(){
  let factorConversion = 10.7056;
  let kwh = 0;
  let consumo = document.getElementById('gasnatural').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
  }else{
    kwh = consumo * factorConversion;
    console.log(kwh);

  }
  let factorEmision = 0.2016;
  let kgco2 = kwh * factorEmision;
  document.getElementById('res-kwh1').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
  document.getElementById('resultado-gasnatural').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//función calcular Gasóleo

document.getElementById('btn-gasoleo').onclick = function(){
  let factorConversion = 10.6;
  let kwh = 0;
  let consumo = document.getElementById('gasoleo').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;
      console.log(kwh);

  }
  let factorEmision = 0.2628;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh2').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-gasoleo').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//función calcular Fuel

document.getElementById('btn-fuel').onclick = function(){
  let factorConversion = 11.1611;
  let kwh = 0;
  let consumo = document.getElementById('fuel').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;
      console.log(kwh);

  }
  let factorEmision = 0.2736;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh3').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-fuel').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//función calcular GLP genérico

document.getElementById('btn-glp').onclick = function(){
  let factorConversion = 12.6389;
  let kwh = 0;
  let consumo = document.getElementById('glp').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;
      console.log(kwh);

  }
  let factorEmision = 0.234;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh4').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-glp').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//Función calcular carbón

document.getElementById('btn-carbon').onclick = function(){
  let factorConversion = 5.6972;
  let kwh = 0;
  let consumo = document.getElementById('carbon').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;
      console.log(kwh);

  }
  let factorEmision = 0.4032;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh5').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-carbon').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//Función carbón de importación

document.getElementById('btn-carImp').onclick = function(){
  let factorConversion = 7.0917;
  let kwh = 0;
  let consumo = document.getElementById('carbon-importacion').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;
      console.log(kwh);

  }
  let factorEmision = 0.3564;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh6').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-carbon-imp').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}

//Función calcular gas butano

document.getElementById('btn-butano').onclick = function(){
  let factorConversion = 12.4389;
  let kwh = 0;
  let consumo = document.getElementById('gas-butano').value;
  if(consumo == 0){
    alert("Inserte consumo");
    location.reload();
    }else{
      kwh = consumo * factorConversion;


  }
  let factorEmision = 0.2383;
  let kgco2 = kwh * factorEmision;
    document.getElementById('res-kwh7').innerHTML += '<b>'+kwh.toFixed(5)+'</b>';
    document.getElementById('resultado-gas-butano').innerHTML += '<b>'+kgco2.toFixed(5)+'</b>';
}



document.getElementById('btn-borrar').onclick = function(){
  location.reload();
}

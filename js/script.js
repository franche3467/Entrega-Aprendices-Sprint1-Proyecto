function calcular(){
    var cantidadpc = document.getElementById("txtcantidad").value;
    if(cantidadpc != "" || Number(cantidadpc) > 0){
        var valorcompra = 1500000;
        var descuento = 0;
        var labeldescuento = 'Sin descuento';
        var valordescuento;
     
        if(cantidadpc => 10 && cantidadpc < 20 ){
         descuento = 0.85;
         labeldescuento = '15%';
        }else if(cantidadpc => 20 && cantidadpc < 30 ) {
         descuento = 0.75;
         labeldescuento = '25%';
        }else if(cantidadpc => 30 ){
          descuento = 0.7;
          labeldescuento = '30%';
        }else {
            descuento = 0;
        }
        
        
        var calcular = cantidadpc * valorcompra;
        if(descuento > 0) calcular = calcular * descuento;
        console.log(calcular);
        
        document.getElementById("valor-compra").value = cantidadpc * valorcompra;
        document.getElementById("valor-descuento").value = labeldescuento;
        document.getElementById("total").value = calcular;

        document.getElementById("msjerror").style.display = 'none';
        document.getElementById("cont-ordencompra").style.display = "block";
        document.getElementById("cont-cantidadcomputadores").style.display = "none";
      }else{
        document.getElementById("msjerror").style.display = 'block';
      }
    
   
}
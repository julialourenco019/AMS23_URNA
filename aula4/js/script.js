function inserir(valor) {
    let numCand = "";
    var valor1 = document.getElementById("txt_num1").value;
    var valor2 = document.getElementById("txt_num2").value;
   
  

    if (valor1 == "") {
        
        document.getElementById("txt_num1").value = valor;
      

    }
    else if(valor2 == "")
    {
        document.getElementById("txt_num2").value = valor;
        numCand = document.getElementById("txt_num1").value + "" + document.getElementById("txt_num2").value;
        if(numCand.length == 2){
            if(numCand == "05"){
                document.getElementById("imgCand").src="img/lelo.jpeg" ;
               
            }
            else if(numCand == "19"){
                document.getElementById("imgCand").src="img/jur.jpeg";
            }
            else if(numCand == "21"){
                document.getElementById("imgCand").src="img/well.jpeg";
            }
            else if(numCand == "13"){
                document.getElementById("imgCand").src="img/leti.jpeg";
            }
            else if(numCand == "27"){
                document.getElementById("imgCand").src="img/kevin2.jpeg";
            }
            else if(numCand == "20"){
                document.getElementById("imgCand").src="img/talia.jpeg";
            }
            else if(numCand == "12"){
                document.getElementById("imgCand").src="img/lolo.jpeg";
            }
            else if(numCand == "15"){
                document.getElementById("imgCand").src="img/mir.jpeg";
            }
            else if(numCand == "24"){
                document.getElementById("imgCand").src="img/sasa.jpeg";
            }
        }
    }
}

function corrigir() {
    document.getElementById("txt_num1").value = "";
    document.getElementById("txt_num2").value = "";
}

/*function branco() {

}*/
var audio = new Audio('sound/confirma-urna.mp3');
    

votar.addEventListener('click' , function () {

    var valor1 = parseInt(document.getElementById("txt_num1").value);
    var valor2 = parseInt(document.getElementById("txt_num2").value);
    var candidato = (valor1 * 10)+valor2;
   
    
    if( valor1.value && valor2.value)
    {
          audio.play();
    }
   
    if(candidato == 21)
    {
        alert(" Confirmado voto no candidato(a) "+candidato+" Well");
   
    }
    else if(candidato == 15) {
        alert(" Confirmado voto no candidato(a) "+candidato+" Mir");
 
        
    }
    else if(candidato == 24){
        alert(" Confirmado voto no candidato(a) "+candidato+" Sara Mel");
   
    }
    else if(candidato == 13){
        alert(" Confirmado voto no candidato(a) "+candidato+" Conitíua");
   
    }
    else if(candidato == 19){
        alert(" Confirmado voto no candidato(a) "+candidato+" Xulia");
  
    }
    else if(candidato == 5){
        alert(" Confirmado voto no candidato(a) "+candidato+" Lelo");

    }
    
    else if(candidato == 27){
        alert(" Confirmado voto no candidato(a) "+candidato+" Suecos");
       
    }
    
    else if(candidato == 12){
        alert(" Confirmado voto no candidato(a) "+candidato+" Loló");
    }
    
    else if(candidato == 20){
        alert(" Confirmado voto no candidato(a) "+candidato+" Tália namo do luffy");
    }
    
    
       
    document.getElementById("txt_num1").value = "";
    document.getElementById("txt_num2").value = "";
});

function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "Cantidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
        }
    }
}

//21 15 24 13 19 05 27 12 20

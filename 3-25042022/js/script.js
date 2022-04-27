function while1 () {


    var i = 0 
     while (i <10) {
      console.log (`contei ${i}`);
       i++;
     }
    }
    
    function while2(){
    
        var operacao = prompt ("digite : \n1-soma\n2-subtrair\n3-multiplicar\n4-dividir\nS-sair");
         while(operacao!="S"){
          var n1 = prompt("Digite um numero") 
           var n2 = prompt("Digite outro numero")
         
        if(operacao == "1"){
          alert(parseInt(n1)+parseInt(n2))  
    
        }  
         
         else if (operacao == "2"){
          alert (parseInt(n1)-parseInt(n2))
        }
    
        else if (operacao == "3"){
            alert (parseInt(n1)*parseInt(n2))
          }
    
          else if (operacao == "4"){
            alert (parseInt(n1)/parseInt(n2))
          }
    
          else {
    
          alert ("o valor digitado nâo e uma operaçâo")
    
    
          }
         

          operacao = prompt(
           "digite : \n1-soma\n2-subtrair\n3-multiplicar\n4-dividir\nS-sair"
          );

     }
    }

    function paleta(){

     /*RGB (vermelho,verde,azul)
     RGB (0-255, 0-255, 0-255)
     vamos usar o comando random da casse math para gerar numeros aleatorios 
     entre 0 e 255. assim iremos formar cores em RGB */

    
    var tabela = "<table>"
    for(var linha = 1 ; linha <= 10 ; linha++){

    tabela+= "<tr>"

    for (var coluna = 1 ; coluna <=20 ; coluna++){

      var r = Math.round(Math.random()*254)
      var g = Math.round(Math.random()*254)
      var b = Math.round(Math.random()*254)
  
    tabela+= `<td style=background-Color:rgb(${r},${g},${b})>Cor</td>`


    } 
    tabela+="</tr>"


    }
    
    tabela += "</table>"

    document.body.innerHTML = tabela;
    }
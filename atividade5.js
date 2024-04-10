let lista = [1,20,53,21,6,7,12,68]

function maiormedia(lista){console.log("Maior q média:") 
    return lista.filter((valor)=>valor>lista.reduce((valor1,valor2)=>valor1+valor2)/lista.length)}console.log(maiormedia(lista),"\n")

function menor(lista){console.log("Menor:")  
    return lista.reduce((valor1,valor2)=>valor1<valor2?valor1:valor2,Infinity)}console.log(menor(lista),"\n")

function soma(lista){console.log("Soma:")
    return lista.reduce((valor1,valor2)=>valor1+valor2,0)}console.log(soma(lista),"\n")

function menor20(lista){console.log("Menor q 20:")
    return lista.filter((valor)=>valor<20)}console.log(menor20(lista),"\n")

function Pri_Ult(lista){console.log("Primeiro e ultimo:")
    return [lista[0],lista[lista.length-1]]}console.log(Pri_Ult(lista),)

var diccionario={"a":'vwxyz',"e":'opqrstu',"i":'edfgh',"o":'ijklmn',"u":'abcd'}
function posicionar(){
    document.getElementById("textoentrada").focus();
}

function obtener(){
    let texto = document.getElementById('textoentrada').value.toString();
    return texto;
}

function regresar(textoFinal){
    document.getElementById("textosalida").innerHTML=textoFinal;
}

function codificar(){
    let textoNormal=obtener();
    let textoDividido=textoNormal.split(' ');
    let textoInvertido="";
    for (let i=0; i<textoDividido.length; i++){
        for(let e=0; e<textoDividido[i].length;e++){
            if(diccionario[textoDividido[i][e]]===undefined){
                textoInvertido=textoInvertido+textoDividido[i][e];
            }
            else{
                textoInvertido=textoInvertido+diccionario[textoDividido[i][e]];
            }
        }
        textoInvertido=textoInvertido+" ";
    }
    regresar(textoInvertido); 
}




function decodificar(){
    let textoCodificado=obtener();
    let arregloCodificado=textoCodificado.split(' ');
    let textoFinal="";
    for(let element=0; element<arregloCodificado.length;element++){
        
        textoFinal=textoFinal+ arregloCodificado[element].replace(/vwxyz/g, 'a').replace(/opqrstu/g, 'e').replace(/edfgh/g, 'i').replace(/ijklmn/g, 'o').replace(/abcd/g, 'u')+" ";

    }
    regresar(textoFinal); 
}




function copiar(){
    let salida=document.getElementById('textosalida').value;
    navigator.clipboard.writeText(salida);
    document.getElementById("textosalida").innerHTML="";
    
    
}


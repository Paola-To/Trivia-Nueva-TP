
//Declarando la variable "correctas", que será el contador de puntuación

let correctas = 0;

//Esta es la función que se ejecutará cuando se pulse el boton de resultados

function aciertosA() {
  const respA1=pregA1.value;
  const respA2=pregA2.value;
  const respA3=pregA3.value;
  if(respA1==="A1A"){
    correctas++;
  }
  if (respA2==="A2B"){
    correctas++;
    }
  if(respA3==="A3C"){
      correctas++
  }
    const errores = (3 - correctas);
    alert("Aciertos:"+ correctas + "\nErrores:"+ errores + "\n ¿Quieres volver a jugar?");
  correctas=0;

}

document.getElementById("inicio").addEventListener("click", ()=>{
  location.href = "index.html"
})

document.getElementById("salir").addEventListener("click", ()=>{
  location.href = "exit.html"
})



    /*Probando esto para sustituir la etiqueta "greeting" por el número de errores y aciertos en el html, pero debemos enfocar la seccion topics, queda pendiente
  document.getElementById("greeting").innerHTML = "Tuviste "+correctas + " aciertos y "+errores + " errores. ¿Quieres intentarlo de nuevo?";*/
  //}

//Pendiente: Aquí al final falta que nos regrese a la seccion de las categorías.

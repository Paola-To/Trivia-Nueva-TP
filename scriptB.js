//Función que se ejecuta al pulsar "resultados" de la categoría B
let correctas = 0;

function aciertosB() {
  const respB1=pregB1.value;
  const respB2=pregB2.value;
  const respB3=pregB3.value;
  if(respB1==="B1C"){
    correctas++;
  }
  if (respB2==="B2B"){
    correctas++;
    }
  if(respB3==="B3A"){
      correctas++;
  }
    const errores = (3 - correctas);
    alert("Aciertos:"+ correctas + "\nErrores:"+ errores + "\n ¿Quieres volver a jugar?");

   correctas=0;
}
document.getElementById("inicio2").addEventListener("click", ()=>{
  location.href = "index.html"
})

document.getElementById("salir2").addEventListener("click", ()=>{
  location.href = "exit.html"
})

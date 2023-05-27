const numero=document.querySelector(".numero");
let contador = 0;
setInterval(() => {
  if(contador==100){
    clearInterval();
  }else{
    contador+=1;
    numero.textContent=contador + "%";
  }
}, 80);
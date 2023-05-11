function contar() {
  var inicio = window.document.getElementById("inicio");
  var fim = window.document.getElementById("fim");
  var passo = window.document.getElementById("passo");
  var res = document.querySelector("div#res");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] faltam dados");
        res.innerHTML=`Impossivel contar!`
    } else {
                res.innerHTML = "Contando: \u{1F47D}";

      var ini = Number(inicio.value);
      var fin = Number(fim.value);
      var cont = Number(passo.value);

      if(cont <= 0){
        window.alert('Passo Inválido, considerando Passo 1')
        cont=1
      }

        if (ini < fin) {
          for (var c = ini; c <= fin; c += cont) {
            console.log(c);
            res.innerText += ` ${c} \u{1F449}`; // += IMPRIME TODOS OS VALORES
          }
        }else{
          for(let c = ini; c >= fin; c -= cont){
            res.innerText += ` ${c} \u{1F449}`; // += IMPRIME TODOS OS VALORES


          }
        }

    res.innerHTML += ` \u{1F308}`;
  }
}

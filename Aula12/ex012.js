var idade = 15;
console.log(`você tem ${idade}`)
if(idade < 16 ){
    console.log('você não pode votar')
}else if(idade >=16 && idade<18 || idade >65 ){
    console.log('voto é opcionla')
}else {
    console.log('vote')
}
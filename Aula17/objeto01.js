let amigo = {//object 
    nome: 'Nicolas',
    sexo: 'masc',
    peso: 60.5,
    engordar(p){
        console.log('Engordou');
        this.peso += p
    }
}
console.log(amigo);

console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(2.5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
/*Objetivo: Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

*/
class ataqueSupremo{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
      if(this.tipo == "Mago"){
        console.log(`${this.nome} é ${this.tipo} e atacou usando magia`)
      }else if(this.tipo == "Guerreiro"){
        console.log(`${this.nome} é ${this.tipo} e atacou usando espada`)
      }else if(this.tipo == "Monge"){
        console.log(`${this.nome} é ${this.tipo} e atacou usando artes marciais`)
      }else if(this.tipo == "Ninja"){
        console.log(`${this.nome} é ${this.tipo} e atacou usando shuriken`)
      }else{
        console.log("Tipo de heroi inválido")
      }
    }
}

let atacando = new ataqueSupremo("Itachi", 30, "Ninja")
let ataque = new ataqueSupremo("Ip man", 45 , "Monge")

atacando.atacar()
ataque.atacar()
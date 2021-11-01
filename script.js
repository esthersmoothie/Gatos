let nome = prompt("Digite seu nome :D")

let mensagem1 = `Olá ${nome} seja bem vinde, esse foi o meu primeiro site :D`

let ano = 2021
let nascimento = prompt("Digite seu ano de nascimento ;D")
let idade = ano - nascimento

let mensagem2 = `Pelo o que você me disse acho que vc tem uns... ${idade} anos ;), você já é um adolecente.`
let mensagem3 = `Pelo o que você me disse acho que vc tem uns... ${idade} anos ;), você é um a criança.`
let mensagem4 = `Pelo o que você me disse acho que vc tem uns... ${idade} anos ;), você já  é um adulto.`
let mensagem5 = ("Fique a vontade ;D")


alert( mensagem1 )

if ( idade >= 12 ) {alert ( mensagem2 ) } 
else if ( idade < 12 ) {alert ( mensagem3 ) } 
else if ( idade >= 18) {alert ( mensagem4 ) }
else {alert( mensagem5) }

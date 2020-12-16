/*
var nome = "Ewerton";
alert("Olá " + nome.toUpperCase());
var idade1 = 13;
var idade2 = 23;
var idade3 = idade1+idade2;
console.log (idade3);
*/

/*
var lista = ["ovo", "laranja", "queijo"];
lista.push("maionese");
alert(lista.join(" | "));
*/

/*
var idade = prompt("Qual sua idade?")

if (idade >= 18){
    alert("maior de idade")
}
else {
    alert ("menor de idade")
}
*/

function ao_clicar() {
    alert("Em desenvolvimento")
}

function alterar_elemento(){
    document.getElementById("agradecimento").innerHTML = "ooiiii";

}

function retorna_elemento(){
    document.getElementById("agradecimento").innerHTML = "a";
}

function yesnoCheck(that) {
    if (that.value == "other") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}
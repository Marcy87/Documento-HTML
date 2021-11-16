//addEventListener: observador.
//O observador ve se a pagina DomContentLoaded está carregada

document.addEventListener("DOMContentLoaded", function ()
{
    console.log("DOM carregado.");  // jerá message na console

    let vnome = "Marcello Di Silvestro"; //let: é um comando; Vnome: é uma variável 
    let vidade = "33 anos"; 
    let vemail = "marcellodisilvestro@outlook.com";

    const p1 = document.getElementById("meu-nome");  //const: costante é um comando
    const p2 = document.getElementById("minha-idade");
    const p3 = document.getElementById("meu-email");

    p1.textContent = vnome;
    p2.textContent = vidade;
    p3.textContent = vemail;

    console.log("Script JS interpretado com sucesso");

    let dataHoje = new Date();
    document.getElementById("anoCorrente").textContent = dataHoje.getFullYear();
});
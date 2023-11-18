function soma(num1, num2){
    num1 = parseInt(prompt("Qual será o primeiro número?"));
    num2 = parseInt(prompt("Qual será o segundo número?"));

    let somadosnum = (num1 + num2)
    console.log(somadosnum)
    window.document.getElementById("rest").innerText = somadosnum
}

function subtrair(num1, num2){
    num1 = parseInt(prompt("Qual será o primeiro número?"));
    num2 = parseInt(prompt("Qual será o segundo número?"));

    let subtrairdosnum = (num1 - num2)
    console.log(subtrairdosnum)
    window.document.getElementById("rest").innerText = subtrairdosnum
}

function multiplicar(num1, num2){
    num1 = parseInt(prompt("Qual será o primeiro número?"));
    num2 = parseInt(prompt("Qual será o segundo número?"));

    let multiplicardosnum = (num1 * num2)
    console.log(multiplicardosnum)
    window.document.getElementById("rest").innerText = multiplicardosnum
}

function divisao(num1, num2){
    num1 = parseInt(prompt("Qual será o primeiro número?"));
    num2 = parseInt(prompt("Qual será o segundo número?"));

    let divisaodosnum = (num1 / num2)
    console.log(divisaodosnum)
    window.document.getElementById("rest").innerText = divisaodosnum
}

function porcentagem(num1, num2){
    num1 = parseInt(prompt("Qual será o primeiro número?"));
    num2 = parseInt(prompt("Qual será o segundo número?"));

    let porcentagemdosnum = ((num1 * num2)/100)
    console.log(porcentagemdosnum)
    window.document.getElementById("rest").innerText = porcentagemdosnum
}

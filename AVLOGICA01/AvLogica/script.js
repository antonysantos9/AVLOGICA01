function media() {

    var nota1 = parseFloat(document.getElementById("m1").value)
    var nota2 = parseFloat(document.getElementById("m2").value)
    var nota3 = parseFloat(document.getElementById("m3").value)
    var nota4 = parseFloat(document.getElementById("m4").value)
    var nota5 = parseFloat(document.getElementById("m5").value)
    var nota6 = parseFloat(document.getElementById("m1").value)
    var nota7 = parseFloat(document.getElementById("m2").value)
    var nota8 = parseFloat(document.getElementById("m3").value)
    var nota9 = parseFloat(document.getElementById("m4").value)
    var nota10 = parseFloat(document.getElementById("m5").value)

    var media = document.getElementById("result")
    var conta = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) / 10

    if (conta < 7) {
        media.textContent = conta.toFixed(2) + " - " + "REPROVOU"
        media.style.color = "red"
    } else if (conta < 10) {
        media.textContent = conta.toFixed(2) + " - " + "PASSOU"
        media.style.color = "green"
    } else {
        media.textContent = conta.toFixed(2) + " - " + "😁👍"
  media.style.color = "blue"
    }
}
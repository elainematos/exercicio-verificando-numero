function verificar() {

	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;

	if(n1 == n2) {
		document.getElementById("mensagem").innerHTML = "Voc� Acertou!";

	}else if (n1 == !isNaN(n2)) {

			document.getElementById("mensagem").innerHTML = "Isso n�o � um n�mero!";

		
		
	}else{
		document.getElementById("mensagem").innerHTML = "Voc� Errou!";

	}
	resetar(n2);
}

 
 function resetar() {
 	document.getElementById("n2").value = "";
 	var r = Math.floor(Math.random() * 100);
 	document.getElementById("n1").innerHTML = r;
 }
 resetar();
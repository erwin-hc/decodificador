// ABRE MODAL CORES
var config = document.getElementById('ico-config');
var light = document.getElementById('ico-light');
var dark = document.getElementById('ico-dark');
var modal = document.getElementById('conf-modal');
var outside = document.getElementById('body');
var inputText = document.getElementById('txt-input');
var outputText = document.getElementById('txt-output');
var imagem = document.getElementById('aside-imagem');
var btnCri = document.getElementById('btn-cri');
var btnDes = document.getElementById('btn-des');
var btnCop = document.getElementById('btn-cop');

// ESCONDE MOSTRA MODAL
function toggle_modal() {
	if (modal.style.display === "none") {
    modal.style.display = "flex";
  	} else {
    modal.style.display = "none";
  	}
}
config.addEventListener("click", toggle_modal);

// SELETOR DE CORES
var cor_azul = document.getElementById('cor_azul');
var cor_vermelho = document.getElementById('cor_vermelho');
var cor_verde = document.getElementById('cor_verde');
var cores = [[0,78,152],[10,93,0],[230,50,10],[229,229,229],[10,10,10]];

// MUDA PARA COR AZUL
cor_azul.addEventListener("click", function() {
	document.documentElement.style.setProperty("--cor-global", cores[0]);
	modal.style.display = "none";

	var icones_svg = document.querySelectorAll('.icones_svg');
	for(var i = 0; i < icones_svg.length; i++) {
	icones_svg[i].classList.add('svg-azul');
	icones_svg[i].classList.remove('svg-verde');
	icones_svg[i].classList.remove('svg-vermelho');
	}	
});

// MUDA PARA COR VERDE
cor_verde.addEventListener("click", function() {
	document.documentElement.style.setProperty("--cor-global", cores[1]);
	modal.style.display = "none";

	var icones_svg = document.querySelectorAll('.icones_svg');
	for(var i = 0; i < icones_svg.length; i++) {
	icones_svg[i].classList.remove('svg-azul');
	icones_svg[i].classList.add('svg-verde');
	icones_svg[i].classList.remove('svg-vermelho');
	}
});

// MUDA PARA COR VERMELHA
cor_vermelho.addEventListener("click", function() {
	document.documentElement.style.setProperty("--cor-global", cores[2]);
	modal.style.display = "none";

	var icones_svg = document.querySelectorAll('.icones_svg');
	for(var i = 0; i < icones_svg.length; i++) {
	icones_svg[i].classList.remove('svg-azul');
	icones_svg[i].classList.remove('svg-verde');
	icones_svg[i].classList.add('svg-vermelho');
	}
});

// DARK MODE
light.addEventListener("click", function() {
	document.documentElement.style.setProperty("--bg-global", cores[3]);
});

// LIGTH MODE
dark.addEventListener("click", function() {
	document.documentElement.style.setProperty("--bg-global", cores[4]);
});

// LIMPA OS CAMPOS AO ABRIR
window.onload = toggle_imagem;
window.onload = limpa_texto;

function limpa_texto() {
	inputText.value = "";
 	outputText.value = "";
};

// ESCONDE MOSTRA IMAGEM
function toggle_imagem() {
	 if (outputText.value == "") {
	 	imagem.style.display = "flex";
	 	btnCop.style.display = 'none';
	 } else {
		imagem.style.display = "none";
	 	btnCop.style.display = 'block';
 	}
};

// REPLACE CODIFICA
btnCri.addEventListener("click", function codifica() {
	outputText.value  = inputText.value.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
	toggle_imagem();

	// ROLA ATE O ULTIMO ELEMENTO DA PAGINA
	outputText.scrollIntoView();
});

// REPLACE DECODIFICA
btnDes.addEventListener("click", function decodifica() {
	outputText.value  = inputText.value.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
	toggle_imagem();
});

// FUNCAO COPIA
btnCop.addEventListener("click", function copia() {
  outputText.select();
  outputText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(outputText.value);  
  outputText.value = "Copiado!";
  setTimeout(limpaOutput, 1000);
  inputText.scrollIntoView();
});

// FUNCAO LIMPA TEXTO DEPOIS DE COPIAR
function limpaOutput() {
	inputText.value = "";
  outputText.value = "";
	imagem.style.display = "flex";
	btnCop.style.display = 'none';
	inputText.focus();
}

// MOSTRA IMAGEM AO APAGAR TEXTAREA DO INPUT
inputText.addEventListener('input', updateValue);
function updateValue(e) {
	if (e.target.value == "") {
		outputText.value = inputText.value;
		toggle_imagem();
	}
}


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

light.addEventListener("click", function() {
	document.documentElement.style.setProperty("--bg-global", cores[3]);
});

dark.addEventListener("click", function() {
	document.documentElement.style.setProperty("--bg-global", cores[4]);
});

window.onload = toggle_imagem;
window.onload = limpa_texto;

function limpa_texto() {
	inputText.value = "";
 	outputText.value = "";
};


function toggle_imagem() {
	 if (outputText.value == "") {
	 	imagem.style.display = "flex";
	 } else {
		imagem.style.display = "none";
 	}
};


btnCri.addEventListener("click", function tranfere_texto() {
	outputText.value = inputText.value;
	toggle_imagem();

});

var textAreas = document.getElementsByTagName('textarea');
for(var i = 0; i < textAreas.length; i++){
  var input = textAreas[i];
  input.addEventListener('focus', function(){
    var place = this.getAttribute('placeholder');
    this.setAttribute('placeholder', '');
    var blur = function(){
      this.setAttribute('placeholder', place);
    }
    this.addEventListener('blur', blur);
  });
}
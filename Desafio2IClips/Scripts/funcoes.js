DisplayContent = function(element,emAndamento){
	
	$(".active").removeClass("active");
	$(element).addClass("active");
	
	if(emAndamento == true){
		LoadTableRowAndamento();
	}else{
		LoadTableRowAtrasada();
	}
};

$('#addCount').click(function(){
	var contadorAndamento = document.getElementById('contadorAndamento');
	var contador = contadorAndamento.innerHTML;
	contador++;
	contadorAndamento.innerHTML = contador;
});

(function() {
	var evento1 = {
		nome : "Lorem ipsum",
		url : "teste.com.br",
		andamento : true,
		atrasada : false
	};
	var evento2 = {
		nome : "Lorem ipsum 2",
		url : "teste2.com.br",
		andamento : false,
		atrasada : false
	};
	var evento3 = {
		nome : "Lorem ipsum 3",
		url : "teste3.com.br",
		andamento : false,
		atrasada : false
	};
	var evento4 = {
		nome : "Lorem ipsum 4",
		url : "teste4.com.br",
		andamento : true,
		atrasada : true
	};
	
	var arrEventos=[evento1,evento2,evento3,evento4];
	var contadorAndamento = document.getElementById('contadorAndamento');
	var contadorAtrasada = document.getElementById('contadorAtrasada');
	var titulo = document.getElementById('titulo');
	var tabela = document.getElementById("idTabela");
	var linhas = tabela.getElementsByTagName("tr");

	LoadTableRowAtrasada = function() {
		$("#idTabela tr").remove();
		var newRow = $("<tr>");
		var cols = "";

		cols += '<td> <input type="checkbox"> </td>'
		cols += '<td>'+evento1.nome+'</td>';
		cols += '<td> <a class="link" href="https://'+evento1.url+'">'+evento1.url+'</a> </td>';
			
		if (evento1.andamento)
		{
			cols += '<td class="td-action"> <div class="notification"> Novo </div> </td>'
		}
		else if (!evento1.andamento && evento1.atrasada)
		{
			cols += '<td class="td-action"> </td>'
		}
		else
		{
			cols += '<td class="td-action"> <div class="notification2"> Alteração </div> </td>'
		}

		newRow.append(cols);	
		$(".table").append(newRow);
		titulo.innerHTML = "Atrasadas";
		LoadSelectedItems();
		return false;
	};
	
    LoadTableRowAndamento = function() {
		
		var contadorAux = contadorAndamento.innerHTML;
		var contadorUm = 0;
		
		$("#idTabela tr").remove();
		
		$.each(arrEventos,function(index,evento){
			contadorUm++;
			var newRow = $("<tr>");
			var cols = "";

			cols += '<td> <input type="checkbox"> </td>'
			cols += '<td>'+evento.nome+'</td>';
			cols += '<td> <a class="link" href="https://'+evento.url+'">'+evento.url+'</a> </td>';
			
			if (evento.andamento)
			{
				cols += '<td class="td-action"> <div class="notification"> Novo </div> </td>'
			}
			else if (!evento.andamento && evento.atrasada)
			{
				cols += '<td class="td-action"> </td>'
			}
			else
			{
				cols += '<td class="td-action"> <div class="notification2"> Alteração </div> </td>'
			}

			newRow.append(cols);	
			$(".table").append(newRow);
	    });
		
		if (contadorAux > 0)
		{
			contadorAndamento.innerHTML = contadorUm + (contadorAux - contadorUm);
        }
		else
		{
			contadorAndamento.innerHTML = contadorUm;
		}
		
		contadorAtrasada.innerHTML = 1;
		titulo.innerHTML = "Em andamento";
		LoadSelectedItems();
		
		return false;
    };
	
	LoadSelectedItems = function () {
		for(var i = 0; i < linhas.length; i++){
		var linha = linhas[i];
		linha.addEventListener("click", function(){
			selLinha(this, false); 
			});
		}
	}
	
    LoadTableRowAndamento();
})(jQuery);


function selLinha(linha, multiplos){
	if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
    for(var i = 0; i < linhas.length; i++){
      var linha_ = linhas[i];
      linha_.classList.remove("selecionado");    
    }
  }
  linha.classList.toggle("selecionado");
}

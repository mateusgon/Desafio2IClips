DisplayContent = function (element, emAndamento) {

    $(".active").removeClass("active");
    $(element).addClass("active");

    if (emAndamento == true) {
        LoadTableRowAndamento();
    } else {
        LoadTableRowAtrasada();
    }
};

$('#ordena').click(function () {

    var titulo = document.getElementById('titulo');
    LoadTableRow(titulo.innerHTML, '1');
});

(function () {

    var contadorAndamento = document.getElementById('contadorAndamento');
    var contadorAtrasada = document.getElementById('contadorAtrasada');
    var titulo = document.getElementById('titulo');
    var tabela = document.getElementById("idTabela");
    var linhas = tabela.getElementsByTagName("tr");

    LoadTableRowAtrasada = function () {
        var filtroSituacao = "Atrasado";
        LoadTableRow(filtroSituacao, '0');
    };

    LoadTableRowAndamento = function () {
        var filtroSituacao = "Em andamento";
        LoadTableRow(filtroSituacao, '0');
    }

    LoadTableSizeAtrasada = function () {
        var filtroSituacao = "Atrasado";
        LoadTableSize(filtroSituacao);
    };

    LoadTableSizeEmAndamento = function () {
        var filtroSituacao = "Em andamento";
        LoadTableSize(filtroSituacao);
    };

    LoadTableSize = function (filtroSituacao) {
        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '0' },
            success: function (data) {
                if (filtroSituacao == "Atrasado") {
                    contadorAtrasada.innerHTML = data.length;
                }
                else {
                    contadorAndamento.innerHTML = data.length;
                }
            },
            error: function (ex) {
                alert(ex);
            }
        });
    }

    LoadTableRow = function (filtroSituacao, tipoOrd) {
        $("#idTabela tr").remove();
        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: tipoOrd },
            success: function (data) {
                $.each(data, function (i, data) {
                    var newRow = $("<tr>");
                    var cols = "";

                    cols += '<td> <input type="checkbox"> </td>'
                    cols += '<td>' + data.Nome + '</td>';
                    cols += '<td> <a class="link" href="https://' + data.Email + '">' + data.Email + '</a> </td>';

                    if (data.Situacao == filtroSituacao) {
                        cols += '<td class="td-action"> <div class="notification"> Novo </div> </td>'
                    }
                    else {
                        cols += '<td class="td-action"> <div class="notification2"> Alteração </div> </td>'
                    }

                    newRow.append(cols);
                    $(".table").append(newRow);
                });

                titulo.innerHTML = filtroSituacao;
                LoadSelectedItems();
                return data.length;
            },
            error: function (ex) {
                alert(ex);
            }
        });
    }
    
    LoadSelectedItems = function () {
        for (var i = 0; i < linhas.length; i++) {
            var linha = linhas[i];
            linha.addEventListener("click", function () {
                SelLinha(this);
            });
        }
    };

    SelLinha = function (linha) {
        var linhas = linha.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas.length; i++) {
            var linha_ = linhas[i];
            linha_.classList.remove("selecionado");
        }
        linha.classList.toggle("selecionado");
    };

    LoadTableRowAndamento();
    LoadTableSizeAtrasada();
    LoadTableSizeEmAndamento();
})(jQuery);

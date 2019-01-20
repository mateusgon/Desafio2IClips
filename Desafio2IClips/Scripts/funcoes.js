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

    LoadTableRowOrdenada = function () {
        var filtroSituacao = titulo.innerHTML;

        $("#idTabela tr").remove();

        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '1' },
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
    };

    LoadTableRowOrdenada();
});

(function () {

    var contadorAndamento = document.getElementById('contadorAndamento');
    var contadorAtrasada = document.getElementById('contadorAtrasada');
    var titulo = document.getElementById('titulo');
    var tabela = document.getElementById("idTabela");
    var linhas = tabela.getElementsByTagName("tr");

    LoadTableRowAtrasada = function () {
        var filtroSituacao = "Atrasado";

        $("#idTabela tr").remove();

        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '0' },
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
    };

    LoadTableSizeAtrasada = function () {
        var filtroSituacao = "Atrasado";
        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '0' },
            success: function (data) {
                contadorAtrasada.innerHTML = data.length;
            },
            error: function (ex) {
                alert(ex);
            }
        });
    };

    LoadTableRowAndamento = function () {

        var filtroSituacao = "Em andamento";

        $("#idTabela tr").remove();

        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '0' },
            success: function (data) {
                $.each(data, function (i, data) {
                    var newRow = $("<tr>");
                    var cols = "";

                    cols += '<td> <input type="checkbox"> </td>'
                    cols += '<td>' + data.Nome + '</td>';
                    cols += '<td> <a class="link" href="https://' + data.Email + '">' + data.Email + '</a> </td>';

                    if (data.Situacao == "Em andamento") {
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
            },
            error: function (ex) {
                alert(ex);
            }
        });

    };

    LoadTableSizeEmAndamento = function () {
        var filtroSituacao = "Em andamento";
        $.ajax({
            type: 'GET',
            url: '/Pessoas/GetPessoas',
            dataType: 'json',
            data: { situacao: filtroSituacao, tipoOrdenacao: '0' },
            success: function (data) {
                contadorAndamento.innerHTML = data.length;
            },
            error: function (ex) {
                alert(ex);
            }
        });
    };

    LoadSelectedItems = function () {
        for (var i = 0; i < linhas.length; i++) {
            var linha = linhas[i];
            linha.addEventListener("click", function () {
                selLinha(this, false);
            });
        }
    }

    LoadTableRowAndamento();
    LoadTableSizeAtrasada();
    LoadTableSizeEmAndamento();
})(jQuery);


function selLinha(linha, multiplos) {
    if (!multiplos) {
        var linhas = linha.parentElement.getElementsByTagName("tr");
        for (var i = 0; i < linhas.length; i++) {
            var linha_ = linhas[i];
            linha_.classList.remove("selecionado");
        }
    }
    linha.classList.toggle("selecionado");
}
fetch("../csv//consulta3.csv")
    .then(response => response.text())
    .then(dados => {

        const linhas = dados.trim().split("\n");

        const corpoTabela = document.querySelector("#dados-tabela");

        linhas.slice(1).forEach(linha => {

            const colunas = linha.split(";");

            const tr = document.createElement("tr");

            colunas.forEach(coluna => {

                const td = document.createElement("td");

                td.textContent = coluna;

                tr.appendChild(td);
            });

            corpoTabela.appendChild(tr);
        });

    })
    .catch(erro => {
        console.error("Erro ao carregar CSV:", erro);
    });
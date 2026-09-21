fetch("../mock/graficos_tables.json")
.then(response => response.json())
.then(dados =>{
    const graficos = document.querySelector(".lista_de_graficos");
    dados.forEach(grafico => {
        graficos.innerHTML += `
        <div class="tabela_grafico">
            <h3>${grafico.Nome}</h3>
            <table id="tabela">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Diesel</th>
                        <th>Etanol</th>
                        <th>Gasolina</th>
                        <th>Gasolina Aditivada</th>
                    </tr>
                </thead>
                <tbody id="${grafico.id_tbody}"></tbody>
            </table>
            <img src="${grafico.img}" alt="" width="1250px" height="600px">
        </div>
        `
    })
})

function Create_table(caminho,label){
    fetch(caminho)
        .then(response => response.text())
        .then(dados => {
    
            const linhas = dados.trim().split("\n");
    
            const corpoTabela = document.querySelector(label);
    
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

}

Create_table("../csv/grafico1.csv","#dados-tabela")
Create_table("../csv/grafico2.csv", "#dados-tabela2")
Create_table("../csv/grafico_jspetroleo.csv", "#dados-tabela3")
Create_table("../csv/arvoredo_grafico.csv","#dados-tabela4")
Create_table("../csv/atlantico_grafico.csv","#dados-tabela5")
Create_table("../csv/parada_grafico.csv","#dados-tabela6")
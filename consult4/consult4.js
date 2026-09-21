const posto = document.querySelector("#posto");
const combustivel = document.querySelector("#combustivel");
const resultado = document.querySelector("#resultado");

document.querySelector("#btnConsultar").addEventListener("click", () => {

    const postoSelecionado = posto.value;
    const combustivelSelecionado = combustivel.value;

    const dadosFiltrados = dados.filter(item =>
        item.posto === postoSelecionado &&
        item.combustivel === combustivelSelecionado
    );

    resultado.innerHTML = "";

    if (dadosFiltrados.length === 0) {
        resultado.innerHTML = `
            <tr>
                <td colspan="2">
                    Nenhum dado encontrado.
                </td>
            </tr>
        `;
        return;
    }

    dadosFiltrados.forEach(item => {

        resultado.innerHTML += `
            <tr>
                <td>${item.data}</td>
                <td>R$ ${item.valor.toFixed(2).replace(".", ",")}</td>
            </tr>
        `;

    });
});
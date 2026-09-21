fetch("./mock/consultas.json")
    .then(response => response.json())
    .then(dados =>{
        const consultas = document.querySelector(".lista_consultas");
        dados.forEach(consulta => {
            consultas.innerHTML += `
                <div class="consulta">
                    <h3>Consulta ${consulta.id}</h3>
                    <h2>${consulta.Nome}</h2>
                    <p>${consulta.Descrição}</p>
                    <p class="abrir_consult">Abrir consulta -></p>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error("Erro:", error);
    });

fetch("./mock/info.json")
    .then(response => response.json())
    .then(dados =>{
        const informacao = document.querySelector(".informacoes");
        dados.forEach(info => {
            informacao.innerHTML += `
                <div class="info">
                    <h3>${info.num}</h3>
                <p>${info.descricao}</p>
            
            `
        })
    })


const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("ativo");
    menuBtn.classList.toggle("ativo");

});

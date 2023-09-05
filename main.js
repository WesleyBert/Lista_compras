let listaCompras = []

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");
const ulItens = document.getElementById("lista-de-itens");
const ulItensComprados = document.getElementById('itens-comprados');

form.addEventListener("submit", function (event){
    event.preventDefault();
    salvarItens();
    mostrarItens();

})

function salvarItens() {
    const comprasItem = itensInput.value
    const checarDuplicados = listaCompras.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if(checarDuplicados){
        alert("Valor já existente em sua lista!")
    }else{

    listaCompras.push( {
        valor: comprasItem,
        checar: false,
    })
    }

    itensInput.value = ''
}
 function mostrarItens(){
     ulItens.innerHTML = ''
     ulItensComprados.innerHTML = ''
     
    listaCompras.forEach((item, posicao) => {
    if (item.checar) {
        ulItensComprados.innerHTML +=  
            `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${posicao}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${item.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    } else {
        ulItens.innerHTML += 
        `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${posicao}">
            <div>
                <input type="checkbox" class="is-clickable" />
                <input type="text" class="is-size-5" value="${item.valor}"></input>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
        `
    }

 })

const inputCheck = document.querySelectorAll("input[type='checkbox']");

inputCheck.forEach(i => {
    i.addEventListener('click',(event) => {
        const ValorDoElement = event.target.parentElement.parentElement.getAttribute('data-value');
        listaCompras[ValorDoElement].checar = event.target.checked
        mostrarItens();
    })
})

const deletarItens = document.querySelectorAll(".deletar");

deletarItens.forEach(i => {
    i.addEventListener('click', (evento) => {
        console.log('teste');
        const valorDoElement = evento.target.parentElement.parentElement.getAttribute('data-value');
        listaCompras.splice(valorDoElement, 1);
        mostrarItens();
        })
})
 }

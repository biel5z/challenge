function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul')

    ul.children[0].innerHTML = "Intem alterado"

    console.log(ul);
}
// console.log(teste.children) - children são os filhos imediatos dele, elementos que tem esse elemento
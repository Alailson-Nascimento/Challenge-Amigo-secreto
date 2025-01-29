
let amigos = [];

function adicionarAmigo() {
    let obterNomesDosAmigos = document.getElementById("amigo").value;

    if (obterNomesDosAmigos === "") {
    alert("Por favor, insira um nome valído.");
    return;
    }
    amigos.push(obterNomesDosAmigos);

    document.getElementById("amigo").value = "";
  // console.log(obterNomesDosAmigos)

    atualizaAListaDeAmigos();
}

function atualizaAListaDeAmigos() {
    const listaExibiAmigos = document.getElementById("listaAmigos");
    listaExibiAmigos.innerHTML = "";

        // Adicionei um forEach para deixar ma forma mais concisa e moderna de iterarcom elementos do array
    amigos.forEach((amigo) => {
    const itemDaListaAmigos = document.createElement("li");
    itemDaListaAmigos.textContent = amigo;
    listaExibiAmigos.appendChild(itemDaListaAmigos);
    });
}

function sorteaAmigosAleatorio() {
    if (amigos.length === "") {
    alert("Não há amigos na lista para sortear.");
    return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML =
    "Amigo sorteado: " + amigoSorteado;
}

const btnTrocaCor = document.getElementById("btn-troca-cor");

const quadradoAzul = document.querySelector(".azul");

btnTrocaCor.addEventListener("click", function () {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
});

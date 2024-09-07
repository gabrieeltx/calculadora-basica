const botoes = document.querySelectorAll(".numeros");
const input = document.getElementById("campoNumeros");

botoes.forEach(botao => {
    botao.addEventListener("click", (event) => {
        const value = event.target.innerText;

        if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "ERROR";
            }
        } else if (value === "C") {
            input.value = "";
        } else {
            input.value += value;
        }
    });
});
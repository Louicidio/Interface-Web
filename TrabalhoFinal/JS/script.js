const themeBtn = document.getElementById("dark-theme");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Troca o ícone do botão
    themeBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("name");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("message");
    let valid = true;

    if (nome.value.trim().length < 2) {
        nome.style.borderColor = "red";
        valid = false;
    } else {
        nome.style.borderColor = "";
    }
    if (!email.value.includes("@") || email.value.length < 5) {
        email.style.borderColor = "red";
        valid = false;
    } else {
        email.style.borderColor = "";
    }

    if (valid) {
        alert("Mensagem enviada com sucesso!");
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

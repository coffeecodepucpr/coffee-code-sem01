// Abre o formulario de adicionar
document.getElementById("open-modal").addEventListener('click', () => {
    document.getElementById("add-product-modal").classList.add("active");
})

// Fecha o formulario de adicionar
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("add-product-modal").classList.remove("active");
});

// Fecha o formulario quando apertar cancelar  
document.getElementById("cancel-modal").addEventListener("click", () => {
    document.getElementById("add-product-modal").classList.remove("active");
});

// Fecha o formulario quando clicar fora da div do formulario 
document.getElementById("add-product-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById("add-product-modal").classList.remove("active");
    }
});

// Fecha o formulario quando apertar Esc  
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("add-product-modal").classList.remove("active");
    }
});

// Troca tema de light para dark e vice versa
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    const html = document.documentElement;
    const theme = html.getAttribute("data-theme");

    if (theme === "dark") {
        html.setAttribute("data-theme", "light");
        themeButton.textContent = "☾";
        themeButton.setAttribute("aria-label", "Ativar tema escuro");
    } else {
        html.setAttribute("data-theme", "dark");
        themeButton.textContent = "☀";
        themeButton.setAttribute("aria-label", "Ativar tema claro");
    }
});
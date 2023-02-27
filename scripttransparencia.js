document.querySelectorAll(".sub-list-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // Encontra a sub-lista correspondente
    const subList = toggle.nextElementSibling;
    // Adiciona ou remove a classe "expanded" para expandir ou ocultar a sub-lista
    subList.classList.toggle("expanded");
    // Atualiza o texto do botão
    toggle.textContent = subList.classList.contains("expanded") ? "Ocultar" : "Expandir";
    // Atualiza a classe do botão
    toggle.classList.toggle("expanded");
  });
});

document.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("icone")) { 
        const img = evento.target; 
        const caminhoAtual = img.getAttribute("src"); 

       
        const caminhoPlus = "/faq-accordion-main/assets/images/icon-plus.svg";
        const caminhoMinus = "/faq-accordion-main/assets/images/icon-minus.svg";

      
        img.setAttribute("src", caminhoAtual.includes("icon-plus.svg") ? caminhoMinus : caminhoPlus);

        
        const pergunta = img.closest(".pergunta");
        if (pergunta) {
            const paragrafo = pergunta.querySelector("p");
            if (paragrafo) {
                paragrafo.style.display = (getComputedStyle(paragrafo).display === "none") ? "flex" : "none";
            }
        }
    }
});

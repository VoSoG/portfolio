const texto = "DEV Front-End UX/UI";
    let index = 0;
    let escrevendo = true;
    function animacaoMaquinaEscrever() {
        const elementoTexto = document.getElementById("texto");
        if (escrevendo) {
            elementoTexto.textContent += texto[index];
            index++;
            if (index === texto.length) {
                escrevendo = false;
                setTimeout(animacaoMaquinaEscrever, 1000);
            } else {
                setTimeout(animacaoMaquinaEscrever, 150);
            }
        } else {
            elementoTexto.textContent = texto.substring(0, index - 1);
            index--;
            if (index === 0) {
                escrevendo = true;
                setTimeout(animacaoMaquinaEscrever, 1000);
            } else {
                setTimeout(animacaoMaquinaEscrever, 100);
            }
        }
    }
    window.onload = animacaoMaquinaEscrever;


    /*ABRINDO PROJETOS*/
    function openProjectDetails(overlayId) {
        console.log("Abrindo overlay:", overlayId);
        document.getElementById(overlayId).style.display = "block";
    }
        
    function closeProjectDetails(overlayId) {
        console.log("Fechando overlay:", overlayId);
        document.getElementById(overlayId).style.display = "none";
    }
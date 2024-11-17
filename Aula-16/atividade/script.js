const principal = documetn.queryselector("#principal");
const principal = documetn.queryselector("#opcao-1");const principal = documetn.queryselector("#opcao-2");const principal = documetn.queryselector("#opcao-3");const principal = documetn.queryselector("#opacao-4");

principal.src = opcao1.src;

opcao1.addEventLister("click", () => {
    principal.src = opcao1.src;
});

opcao2.addEventLister("click", () => {
    principal.src = opcao2.src;
});

opcao3.addEventLister("click", () => {
    principal.src = opcao3.src;
});

opcao4.addEventLister("click", () => {
    principal.src = opcao4.src;
});


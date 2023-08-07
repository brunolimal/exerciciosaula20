  let alimentos = [
    {
      nome: "Maçã",
      cor: "Vermelha",
      peso: 200,
      tipo: "fruta"
    },
    {
      nome: "Cenoura",
      cor: "Laranja",
      peso: 100,
      tipo: "verdura"
    },
    {
      nome: "Abacaxi",
      cor: "Amarelo",
      peso: 1200,
      tipo: "fruta"
    },
    {
      nome: "Batata",
      cor: "Marrom",
      peso: 250,
      tipo: "legume"
    },
  ]
  
  function nomes(alimentos) {
    alimentos.forEach(alimento => {
      if (alimento.tipo === "fruta") {
        console.log(alimento.nome);
      }
    });
  }
  
  function contar(Alimentos) {
    let Frutas = 0;
    let Verduras = 0;
    let Legumes = 0;
  
    Alimentos.forEach(alimento => {
      if (alimento.tipo === "fruta") {
        Frutas++;
      } else if (alimento.tipo === "verdura") {
        Verduras++;
      } else if (alimento.tipo === "legume") {
        Legumes++;
      }
    });
  
    console.log(Frutas);
    console.log(Verduras);
    console.log(Legumes);
  }
  
  // Exibir apenas o nome das frutas
  nomes(alimentos);
  
  // Mostrar a quantidade de alimentos de cada tipo
  contar(alimentos);
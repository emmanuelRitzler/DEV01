let a = 1;

function calcul() {
// let a = 2 +a ; // on accède à une variable avant de lui assigner une valeur
   a = 2 + a;

  console.log(a, "calcul");

  function sub_calcul() {
    let b = a + 1;

    console.log(b, "sub_calcul");
  }

  sub_calcul();
}

calcul();
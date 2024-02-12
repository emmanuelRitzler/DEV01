function tdz() {
  try {
      console.log(tdz_val); // provoque une erreur
      let tdz_val = "Temporal Dead Zone";
  } catch (error) {
      console.error("Erreur capturée :", error.message);
  }

}

tdz();
// on peut continuer les scripts ici, une exception stop les scripts 

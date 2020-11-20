 //''let'' permet la déclaration des variables gauche et haut

//parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 


//cette fonction permet de déplacer la balle et les raquettes en récupérant les fonctions bouge dans les fichiers js correspondant
setInterval(function(){  
  balle.bouge();
  raquette1.bouge();
  raquette2.bouge(); 
  
}, 10);

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont pressées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "a"){
      raquette1.monte();
    }
    if(event.key === "q"){
      raquette1.descend();
    }
    if(event.key === "p"){
      raquette2.monte();
    }
    if(event.key === "m"){
      raquette2.descend();
    }
    event.preventDefault();
  }, true);

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont relachées
window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) { return}
  if(event.key === "a"){
    raquette1.stop();
  }
  if(event.key === "q"){
    raquette1.stop();
  }
  if(event.key === "p"){
    raquette2.stop();
  }
  if(event.key === "m"){
    raquette2.stop();
  }
  event.preventDefault();
}, true);

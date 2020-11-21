 //''let'' permet la déclaration des variables gauche et haut
 // déclaration de la variable js balle qui reprend les valeurs de la classe Balle qui reprend des valeurs css de l'id balle
 let balle = new Balle($("#balle"));
 let raquetteG = new Raquette($("#raquetteG"));
 let raquetteD = new Raquette($("#raquetteD"));
 let terrain=new Terrain($("#terrain")); //déclare la variable terrain prenant la valeur de la class Terrain ci-dessus à laquelle on associe les valeurs de la l'id terrain de la fiche css
 console.log(terrain); //affiche les valeurs de la variable terrain dans la console du navigateur web

 //parseInt convertit une chaine de caractère en un entier




// Jquerry perme de faire le lien entre html/css et le fichier js 


//cette fonction permet de déplacer la balle et les raquettes en récupérant les fonctions bouge dans les fichiers js correspondant
setInterval(function(){  
  balle.bouge();
  raquetteG.bouge();
  raquetteD.bouge(); 
  
}, 10);

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont pressées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    if(event.key === "a"){
        console.log("coucou")
      raquetteG.monte();
    }
    if(event.key === "q"){
      raquetteG.descend();
    }
    if(event.key === "p"){
      raquetteD.monte();
    }
    if(event.key === "m"){
      raquetteD.descend();
    }
    event.preventDefault();
  }, true);

//fonction permettant "d'écouter" les touches "a, q, p et m" du clavier lorsqu'elles sont relachées
window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) { return}
  if(event.key === "a"){
    raquetteG.stop();
  }
  if(event.key === "q"){
    raquetteG.stop();
  }
  if(event.key === "p"){
    raquetteD.stop();
  }
  if(event.key === "m"){
    raquetteD.stop();
  }
  event.preventDefault();
}, true);

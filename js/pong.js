

let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));
//Message d'alerte à l'ouverture de la page indiquant la position de la balle
alert(gauche);

setInterval(function(){
    //Donne un mouvement à la balle vers la droite
    gauche=gauche+1;
    //Donne un mouvement à la balle vers le bas
    haut=haut+0.5;
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
}, 10);

setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX; //Si la balle sort pars la gauche
    balle.haut=balle.haut+balle.vitesseY; //Donne un mouvement à la balle vers le bas en fonction de la vitesse

    //On enlève balle.largeur afin de faire rebondire la balle convenablement sur la droite du terrain.
    if(balle.gauche>terrain.largeur-balle.largeur){ //Si la balle sort pars la droite
        balle.gauche=terrain.largeur-balle.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }

    if(balle.gauche<0){ //Si la balle sort pars la gauche.
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }

    //On enlève balle.largeur afin de faire rebondire la balle convenablement sur le bas du terrain
    if(balle.haut>terrain.hauteur-balle.hauteur){ //Si la balle sort pars le bas.
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    if(balle.haut<0){ //Si la balle sort pars le haut.
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    //Donne un mouvement aux raquettes en fonction de la vitesse.
    raquette1.haut=raquette1.haut+raquette1.vitesse;
    raquette2.haut=raquette2.haut+raquette2.vitesse;

    if(raquette1.haut>terrain.hauteur-raquette1.hauteur){ //Si la raquette de gauche sort par le bas.
        raquette1.haut=terrain.hauteur-raquette1.hauteur; // Utilisation de la hauteur de la raquette afin que le rebond soit pris en compte au premier contact
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    if(raquette1.haut<0){
        raquette1.haut=0;
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    if(raquette2.haut>terrain.hauteur-2*raquette2.hauteur){
        raquette2.haut=terrain.hauteur-2*raquette2.hauteur;// Utilisation de la haueteur de la raquette afin que le rebond soit pris en compte au premier contact
        raquette2.vitesse=raquette2.vitesse*-1;
    }

    if(raquette2.haut<0-raquette2.hauteur){
        raquette2.haut=0-raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }

    balle.majHTML();
    raquette1.Fraquette1();
    raquette2.Fraquette2();

}, 10);
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("a '"+a.key+ "' a été enfoncée")
    event.preventDefault();
}, true);
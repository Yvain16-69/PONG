class Raquette1{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette1").css("top"));
        this.hauteur=parseInt($("#raquette1").css("height"));
        this.vitesse=1;
        this.direction=1;

    }
    Fraquette1(){ // Créer la fonction "majHTML" dans la class raquette1.
        this.$html.css("top",raquette1.haut);
    }

}

class Raquette2{
    constructor($html){
        this.$html=$html;
        this.hauteur=parseInt($("#raquette2").css("height"));
        this.haut=parseInt($("#raquette2").css("top"));
        this.vitesse=1;
        this.direction=1;


    }
    Fraquette2(){
        this.$html.css("top",raquette2.haut);
    }
}

let raquette1 = new Raquette1($("#raquette1")); //Création d'une raquette au sein de la classe "Raquette1"
let raquette2 = new Raquette2($("#raquette2")); //Création d'une raquette au sein de la classe "raquette2"
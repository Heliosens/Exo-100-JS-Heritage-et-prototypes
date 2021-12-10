function Vehicule(couleur, roues, marque){
    this.color = couleur;
    this.wheel = roues;
    this.mark = marque;

    this.demarrer = function (){
        console.log("le véhicule démarre.");
    }

    this.arreter = function (){
        console.log("le véhicule s'arrête.");
    }
}

function Velo (couleur, roues, marque, rayonRoues, typePeinture){
    Vehicule.call(this, couleur, roues, marque);
    this.rayon = rayonRoues;
    this.paintType = typePeinture;

    this.monter = function (){
        console.log("L'utilisateur monte sur le vélo");
    }
}

Velo.prototype = Object.create(Vehicule.prototype); // parent's prototype copy
Velo.prototype.constructor = Velo;

function Voiture(couleur, roues, marque, assurance, proprietaire){
    Vehicule.call(couleur, roues, marque);
    this.assur = assurance;
    this.owner = proprietaire;

    this.wash = function (){
        console.log('je lave la voiture');
    }
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;

let car_01 = new Vehicule("noir", "4", "renault");
car_01.demarrer();

let test = new Velo("bleu", "2", "bmx", "30", "brillant");
test.demarrer();
